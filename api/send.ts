import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY!);
const scopes = ['https://www.googleapis.com/auth/spreadsheets']

const base64EncodedCredentials = process.env.GOOGLE_SERVICE_ACCOUNT_BASE64;
const decodedCredentials = Buffer.from(base64EncodedCredentials!, 'base64').toString('utf-8');
const serviceAccountCredentials = JSON.parse(decodedCredentials);

const auth = new google.auth.GoogleAuth({
    credentials: serviceAccountCredentials,
    scopes: scopes,
  });

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID!;

// Define uma interface para o corpo da requisição, garantindo que os dados esperados cheguem
interface RequestBody {
    name: string;
    email: string;
    phone: string;
    message: string;
}

// Exporta a função handler com os tipos aplicados
export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    // Permite apenas requisições do tipo POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Extrai o corpo da requisição e aplica a tipagem da nossa interface
    const { name, email, phone, message } = req.body as RequestBody;

    // Validação simples para garantir que os campos não estão vazios
    if (!name || !email || !phone) {
        return res.status(400).json({ error: 'Nome, email e telefone são obrigatórios.' });
    }

    try {
        const timestamp = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
        const sheetRow = [timestamp, name, email, phone, message];

        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'A1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [sheetRow],
            },
        });

        const { data, error } = await resend.emails.send({
            from: 'Atendimento - Ainê <contato@enviar.ainefisiopelvica.com>',
            to: [email],
            subject: `Bem-vindo(a) à Ainê, ${name}!`,
            html: `
        <div style="font-family: sans-serif; text-align: center; padding: 20px;">
          <img src="https://www.ainefisiopelvica.com/logo.png" alt="Clínica Ainê" width="150" style="max-width: 100%; height: auto; margin-bottom: 20px;" />
          <h1>Olá, ${name}!</h1>
          <p style="font-size: 16px;">Recebemos seu contato e ficamos muito felizes pelo seu interesse na <strong>Ainê</strong>.</p>
          <p style="font-size: 16px;">Em breve, nossa equipe entrará em contato para agendar sua consulta ou responder suas dúvidas.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #777;">
            Se você não solicitou este contato, por favor ignore este e-mail.
          </p>
        </div>
      `,
        });

        // Se a API do Resend retornar um erro, o repassamos
        if (error) {
            console.error({ error });
            return res.status(400).json(error);
        }

        // Retorna uma resposta de sucesso
        return res.status(200).json({ message: 'Email enviado com sucesso!', data });

    } catch (exception) {
        console.error(exception);
        return res.status(500).json({ error: 'Ocorreu um erro inesperado no servidor.' });
    }
}
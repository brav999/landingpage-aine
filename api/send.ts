import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

// Define uma interface para o corpo da requisição, garantindo que os dados esperados cheguem
interface RequestBody {
    nome: string;
    email: string;
    phone: string;
    question: string;
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
    const { nome, email, phone } = req.body as RequestBody;

    // Validação simples para garantir que os campos não estão vazios
    if (!nome || !email || !phone) {
        return res.status(400).json({ error: 'Nome, email e telefone são obrigatórios.' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Atendimento <contato@seu-dominio-verificado.com.br>', // IMPORTANTE: Use seu domínio verificado
            to: [email],
            subject: `Bem-vindo(a) à Ainê, ${nome}!`,
            html: `
        <div style="font-family: sans-serif; text-align: center; padding: 20px;">
          <img src="URL_DO_LOGO_DA_CLINICA" alt="Clínica Ainê" style="max-width: 150px; margin-bottom: 20px;" />
          <h1>Olá, ${nome}!</h1>
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
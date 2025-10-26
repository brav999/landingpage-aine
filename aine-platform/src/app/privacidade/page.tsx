import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a Ainê Fisioterapia Pélvica coleta, utiliza e protege seus dados de acordo com a LGPD.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-aine-light/40 py-16">
      <div className="privacy-container">
        <h1>Política de Privacidade</h1>
        <h2>Ainê - Fisioterapia Pélvica e Obstétrica</h2>
        <p>
          <strong>Última atualização:</strong> 02/07/2025
        </p>

        <p>
          A sua privacidade é muito importante para a <strong>Ainê - Fisioterapia Pélvica e Obstétrica</strong>. Esta
          política descreve como coletamos, usamos, compartilhamos e protegemos suas informações pessoais, em conformidade com a
          Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
        </p>
        <p>Ao utilizar nosso site e formulários, você concorda com os termos aqui apresentados.</p>

        <h2>1. Quais dados nós coletamos?</h2>
        <p>Coletamos informações que você nos fornece diretamente e também dados de navegação:</p>
        <ul>
          <li>
            <strong>Informações de Contato:</strong> Nome, endereço de e-mail e número de telefone (WhatsApp) que você preenche em
            nosso formulário de contato.
          </li>
          <li>
            <strong>Informações de Navegação (Cookies):</strong> Dados como seu endereço IP, tipo de navegador, páginas visitadas e
            tempo de permanência em nosso site. Utilizamos esses dados para melhorar a sua experiência e entender como nosso site é
            utilizado.
          </li>
        </ul>

        <h2>2. Por que coletamos seus dados?</h2>
        <p>Utilizamos suas informações para as seguintes finalidades:</p>
        <ul>
          <li>
            <strong>Agendamento e Comunicação:</strong> Para entrar em contato com você, responder suas dúvidas e agendar consultas ou
            procedimentos.
          </li>
          <li>
            <strong>Melhoria dos Nossos Serviços:</strong> Para analisar o uso do nosso site e entender como podemos melhorar nosso
            atendimento e a experiência online.
          </li>
          <li>
            <strong>Obrigações Legais:</strong> Para cumprir com obrigações legais ou regulatórias às quais estejamos sujeitos.
          </li>
        </ul>

        <h2>3. Compartilhamento de dados</h2>
        <p>
          Não vendemos suas informações pessoais. Compartilhamos dados apenas quando necessário para prestar nossos serviços (por
          exemplo, com provedores de hospedagem ou ferramentas de atendimento) e sempre seguindo padrões rigorosos de segurança e
          confidencialidade.
        </p>

        <h2>4. Direitos dos titulares</h2>
        <p>Você tem o direito de:</p>
        <ul>
          <li>Confirmar a existência de tratamento de dados e acessá-los;</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
          <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>Solicitar a portabilidade dos dados a outro fornecedor de serviço;</li>
          <li>Revogar o consentimento a qualquer momento.</li>
        </ul>

        <p>
          Para exercer seus direitos, entre em contato pelo e-mail <strong>contato@ainefisiopelvica.com</strong>.
        </p>

        <h2>5. Segurança das informações</h2>
        <p>
          Adotamos medidas técnicas e administrativas para proteger seus dados pessoais contra acessos não autorizados, perda ou
          alteração. Nossos sistemas são continuamente monitorados para garantir o cumprimento das melhores práticas de segurança da
          informação.
        </p>

        <h2>6. Retenção de dados</h2>
        <p>
          Mantemos suas informações apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme
          exigido por obrigações legais ou regulatórias aplicáveis.
        </p>

        <h2>7. Contato</h2>
        <p>
          Se você tiver qualquer dúvida sobre esta Política de Privacidade, entre em contato conosco através do e-mail:
          <strong> contato@ainefisiopelvica.com</strong>.
        </p>

        <div className="privacy-footer">
          <p>
            <strong>Ainê - Fisioterapia Pélvica e Obstétrica</strong>
            <br />
            Rua Princesa Isabel, 40, Sala 1008 - Criciúma/SC
            <br />
            49.838.872/0001-12
          </p>
        </div>
      </div>
    </div>
  );
}

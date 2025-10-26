import React from 'react';

// Não há mais importação de CSS aqui

function PrivacidadePage() {
    return (
        // Usamos nomes de classes como strings
        <div className="privacy-container">
            <h1>Política de Privacidade</h1>
            <h2>Ainê - Fisioterapia Pélvica e Obstétrica</h2>
            <p>
                <strong>Última atualização:</strong> [02/07/2025]
            </p>

            <p>
                A sua privacidade é muito importante para a <strong>Ainê - Fisioterapia Pélvica e Obstétrica</strong>. Esta política descreve como
                coletamos, usamos, compartilhamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de
                Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
            <p>Ao utilizar nosso site e formulários, você concorda com os termos aqui apresentados.</p>

            <h2>1. Quais dados nós coletamos?</h2>
            <p>Coletamos informações que você nos fornece diretamente e também dados de navegação:</p>
            <ul>
                <li>
                    <strong>Informações de Contato:</strong> Nome, endereço de e-mail e número de telefone (WhatsApp) que você
                    preenche em nosso formulário de contato.
                </li>
                <li>
                    <strong>Informações de Navegação (Cookies):</strong> Dados como seu endereço IP, tipo de navegador, páginas
                    visitadas e tempo de permanência em nosso site. Utilizamos esses dados para melhorar a sua experiência e
                    entender como nosso site é utilizado.
                </li>
            </ul>

            <h2>2. Por que coletamos seus dados?</h2>
            <p>Utilizamos suas informações para as seguintes finalidades:</p>
            <ul>
                <li>
                    <strong>Agendamento e Comunicação:</strong> Para entrar em contato com você, responder suas dúvidas e agendar
                    consultas ou procedimentos.
                </li>
                <li>
                    <strong>Melhoria dos Nossos Serviços:</strong> Para analisar o uso do nosso site e entender como podemos
                    melhorar nosso atendimento e a experiência online.
                </li>
                <li>
                    <strong>Obrigações Legais:</strong> Para cumprir com obrigações legais ou regulatórias às quais estejamos
                    sujeitos.
                </li>
            </ul>

            {/* O resto do conteúdo continua igual... */}

            <h2>7. Contato</h2>
            <p>
                Se você tiver qualquer dúvida sobre esta Política de Privacidade, entre em contato conosco através do e-mail: <strong>contato@ainefisiopelvica.com</strong>.
            </p>

            {/* Adicionamos a classe "privacy-footer" aqui */}
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
    );
}

export default PrivacidadePage;
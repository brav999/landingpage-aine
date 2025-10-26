import { Heart, Instagram, Phone } from "lucide-react";
import LogoMark from "./LogoMark";

const Footer = () => {
  return (
    <footer className="bg-aine-purple py-12 text-white">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center space-x-3">
              <LogoMark className="h-12 w-12 text-white/90" variant="mono" />
              <span className="text-lg font-semibold tracking-wide">Ainé Fisiopélvica</span>
            </div>
            <p className="leading-relaxed text-purple-100">
              Cuidado especializado em fisioterapia pélvica e obstétrica, proporcionando bem-estar e qualidade de vida para nossas
              pacientes.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-medium">Links Rápidos</h3>
            <nav className="space-y-2 text-purple-100">
              <a href="#sobre" className="block transition-colors hover:text-white">
                Sobre Nós
              </a>
              <a href="#servicos" className="block transition-colors hover:text-white">
                Serviços
              </a>
              <a href="#contato" className="block transition-colors hover:text-white">
                Contato
              </a>
              <a href="/privacidade" className="block transition-colors hover:text-white">
                Política de Privacidade
              </a>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 font-medium">Conecte-se Conosco</h3>
            <div className="mb-4 flex space-x-4">
              <a
                href="https://www.instagram.com/ainefisiopelvica/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-aine-green transition-colors hover:bg-aine-purple/90"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/554834115334"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-aine-green transition-colors hover:bg-aine-purple/90"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-purple-100">
              Siga-nos nas redes sociais para dicas de saúde e bem-estar.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-sm text-purple-100">
            <span>© 2025 Ainê Fisioterapia Pélvica. Feito com</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>para o seu bem-estar.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

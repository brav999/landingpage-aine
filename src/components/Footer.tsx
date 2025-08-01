
import { Heart, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-aine-purple text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
              src="/images/green-logo.png" 
              alt="Ainê Fisioterapia"
              className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-purple-100 leading-relaxed">
              Cuidado especializado em fisioterapia pélvica e obstétrica, 
              proporcionando bem-estar e qualidade de vida para nossas pacientes.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#sobre" className="block text-purple-100 hover:text-white transition-colors">
                Sobre Nós
              </a>
              <a href="#servicos" className="block text-purple-100 hover:text-white transition-colors">
                Serviços
              </a>
              <a href="#contato" className="block text-purple-100 hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Conecte-se Conosco</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.instagram.com/ainefisiopelvica/" target='blank' className="w-10 h-10 bg-aine-green rounded-full flex items-center justify-center hover:bg-aine-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://wa.me/554834115334" target='blank' className="w-10 h-10 bg-aine-green rounded-full flex items-center justify-center hover:bg-aine-purple transition-colors">                <Phone className="h-5 w-5" />
              </a>
            </div>
            <p className="text-purple-100 text-sm">
              Siga-nos nas redes sociais para dicas de saúde e bem-estar.
            </p>
          </div>
        </div>

        <div className="border-t border-white-400 mt-8 pt-8 text-center">
          <p className="text-purple-100 flex items-center justify-center space-x-2">
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

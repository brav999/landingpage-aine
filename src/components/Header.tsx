
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/e44563ff-0ae9-4dba-a8d1-7a0bde496099.png" 
              alt="Ainê Fisioterapia" 
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-aine-purple hover:text-aine-green transition-colors font-medium">
              Sobre
            </a>
            <a href="#servicos" className="text-aine-purple hover:text-aine-green transition-colors font-medium">
              Serviços
            </a>
            <a href="#contato" className="text-aine-purple hover:text-aine-green transition-colors font-medium">
              Contato
            </a>
          </nav>

          <Button 
            onClick={scrollToContact}
            className="bg-aine-purple hover:bg-aine-purple/90 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

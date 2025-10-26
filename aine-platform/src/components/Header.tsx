
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/images/green-logo.png" 
              alt="Ainê Fisioterapia" 
              className="h-16 w-16"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-aine-purple hover:text-aine-green transition-colors font-medium">
              Serviços
            </a>
            <a href="#sobre" className="text-aine-purple hover:text-aine-green transition-colors font-medium">
              Sobre
            </a>
            <a href="#contato" className="text-aine-purple hover:text-aine-green transition-colors font-medium">
              Contato
            </a>
          </nav>

          <Button
            asChild
            className="bg-aine-purple hover:bg-aine-purple/90 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://wa.me/554834115334"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar consulta
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import LogoMark from "./LogoMark";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <div className="container flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-3">
          <LogoMark className="h-14 w-14 text-aine-green md:h-16 md:w-16" />
          <span className="text-lg font-semibold text-aine-purple">Ainé Fisiopélvica</span>
        </div>

        <nav className="hidden items-center space-x-8 md:flex">
          <a href="#servicos" className="text-sm font-medium text-aine-purple transition-colors hover:text-aine-green">
            Serviços
          </a>
          <a href="#sobre" className="text-sm font-medium text-aine-purple transition-colors hover:text-aine-green">
            Sobre
          </a>
          <a href="#contato" className="text-sm font-medium text-aine-purple transition-colors hover:text-aine-green">
            Contato
          </a>
        </nav>

        <a
          href="https://wa.me/554834115334"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-aine-purple px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-aine-purple/90"
        >
          Agendar consulta
        </a>
      </div>
    </header>
  );
};

export default Header;

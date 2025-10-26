import { Heart, Shield, Star } from "lucide-react";
import LogoMark from "./LogoMark";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-aine-light/60 to-white py-20">
      <div className="container grid items-start gap-12 px-4 md:grid-cols-2">
        <div className="flex flex-col justify-start space-y-8 animate-fade-in">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-aine-purple md:text-5xl">
              Cuidado especializado em
              <span className="block text-aine-green">Fisioterapia Pélvica</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              Na Ainê, oferecemos tratamentos especializados em fisioterapia pélvica e obstétrica, proporcionando cuidado integral
              para sua saúde íntima e bem-estar.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/554834115334"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-aine-purple px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-aine-purple/90"
            >
              Agendar consulta
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-aine-purple" />
              <span>Atendimento Humanizado</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-aine-purple" />
              <span>Ambiente Seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-aine-purple" />
              <span>Profissionais Especializados</span>
            </div>
          </div>
        </div>

        <div className="relative flex items-start justify-center">
          <div className="relative rounded-[3rem] bg-white/80 p-10 shadow-xl ring-1 ring-aine-purple/10">
            <LogoMark className="h-48 w-48 text-aine-purple" />
            <div
              className="pointer-events-none absolute inset-x-6 bottom-6 h-16 rounded-full bg-aine-purple/10 blur-2xl"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

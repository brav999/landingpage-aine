
import { Button } from '@/components/ui/button';
import { Heart, Shield, Star } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-aine-light to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-aine-purple mb-6 leading-tight">
              Cuidado Especializado em 
              <span className="text-aine-green block">Fisioterapia Pélvica</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Na Ainê, oferecemos tratamentos especializados em fisioterapia pélvica e obstétrica, 
              proporcionando cuidado integral para sua saúde íntima e bem-estar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToContact}
                className="bg-aine-purple hover:bg-aine-purple/90 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                Agendar Avaliação
              </Button>
              <Button 
                variant="outline" 
                className="border-aine-green text-aine-green hover:bg-aine-green hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300"
              >
                Saiba Mais
              </Button>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-aine-purple" />
                <span className="text-sm text-gray-600">Atendimento Humanizado</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-aine-purple" />
                <span className="text-sm text-gray-600">Ambiente Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-aine-purple" />
                <span className="text-sm text-gray-600">Profissionais Especializados</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-aine-purple/10 to-aine-green/10 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-aine-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-16 w-16 text-aine-purple" />
                </div>
                <p className="text-aine-purple font-medium">Seu bem-estar é nossa prioridade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

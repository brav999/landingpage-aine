
import { Award, Clock, Heart, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Pacientes Atendidas" },
    { icon: Award, number: "10+", label: "Anos de Experiência" },
    { icon: Heart, number: "98%", label: "Satisfação dos Pacientes" },
    { icon: Clock, number: "24h", label: "Suporte Disponível" }
  ];

  return (
    <section id="sobre" className="py-20 bg-aine-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-aine-purple mb-6">
              Sobre a Clínica Ainê
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A Clínica Ainê nasceu com o propósito de oferecer cuidado especializado e humanizado 
              em fisioterapia pélvica e obstétrica. Nossa missão é proporcionar bem-estar e qualidade 
              de vida através de tratamentos personalizados e eficazes.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Contamos com profissionais altamente qualificados e um ambiente acolhedor, 
              onde cada paciente recebe atenção individualizada e tratamento de excelência.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-aine-green rounded-full"></div>
                <span className="text-gray-700">Atendimento humanizado e acolhedor</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-aine-green rounded-full"></div>
                <span className="text-gray-700">Profissionais especializados e certificados</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-aine-green rounded-full"></div>
                <span className="text-gray-700">Técnicas modernas e equipamentos de última geração</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-aine-green rounded-full"></div>
                <span className="text-gray-700">Ambiente seguro e discreto</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-aine-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-aine-purple" />
                </div>
                <div className="text-2xl font-bold text-aine-purple mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

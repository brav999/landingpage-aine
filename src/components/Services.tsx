
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Bandage, Baby, HeartHandshake } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: HeartHandshake,
      title: "Fisioterapia Pélvica",
      description: "Atendimento especializado nas disfunções do assoalho pélvico (incontinência urinária, prolapsos), dores pélvicas, oncologia pélvica."
    },
    {
      icon: Baby,
      title: "Fisioterapia Obstétrica",
      description: "Atendimento especializado na preparação do corpo para o parto, prevenção das disfunções pélvicas durante a gestação e pós-parto."
    },
    {
      icon: Bandage,
      title: "Fisioterapia Dermatofuncional",
      description: "Atendimento especializado drenagem linfática, taping no pós-parto e cuidados no pré, intra e pós-operatório."
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Consultas individualizadas com foco nas necessidades específicas de cada paciente utilizando de técnicas e equipamentos para garantir os melhores resultados."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aine-purple mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços especializados em fisioterapia pélvica e obstétrica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-100 hover:border-aine-green/30">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-aine-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-aine-green/10 transition-colors">
                  <service.icon className="h-8 w-8 text-aine-purple group-hover:text-aine-green transition-colors" />
                </div>
                <CardTitle className="text-xl text-aine-purple">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

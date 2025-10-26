import { Users, Bandage, Baby, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: HeartHandshake,
    title: "Fisioterapia Pélvica",
    description:
      "Atendimento especializado nas disfunções do assoalho pélvico (incontinência urinária, prolapsos), dores pélvicas e oncologia pélvica.",
  },
  {
    icon: Baby,
    title: "Fisioterapia Obstétrica",
    description:
      "Preparação do corpo para o parto, prevenção de disfunções durante a gestação e acompanhamento no pós-parto.",
  },
  {
    icon: Bandage,
    title: "Fisioterapia Dermatofuncional",
    description:
      "Protocolos de drenagem linfática, taping no pós-parto e cuidados pré, intra e pós-operatórios para recuperação segura.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description:
      "Consultas individualizadas com técnicas e equipamentos específicos para garantir os melhores resultados para cada paciente.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="bg-white py-20">
      <div className="container px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-aine-purple md:text-4xl">Nossos Serviços</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            Oferecemos uma gama completa de serviços especializados em fisioterapia pélvica e obstétrica.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-aine-green/40 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-aine-light transition-colors group-hover:bg-aine-green/15">
                <Icon className="h-8 w-8 text-aine-purple transition-colors group-hover:text-aine-green" />
              </div>
              <h3 className="text-xl font-semibold text-aine-purple">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

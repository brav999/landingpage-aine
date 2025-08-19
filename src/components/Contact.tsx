import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const address = `Rua Princesa Isabel, 40, sala 1008\nCentro - Criciúma/SC`;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=17&output=embed`;

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aine-purple mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aqui para esclarecer suas dúvidas
          </p>
        </div>

        <div className="flex justify-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-aine-purple mb-6">
                Informações de Contato
              </h3>

              <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                <div className="space-y-6 md:flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-aine-light rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-aine-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium text-aine-purple mb-1">
                        Telefone
                      </h4>
                      <p className="text-gray-600">(48) 3411-5334</p>
                      <p className="text-sm text-gray-500">WhatsApp disponível</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-aine-light rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-aine-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium text-aine-purple mb-1">E-mail</h4>
                      <p className="text-gray-600">
                        contato@ainefisiopelvica.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-aine-light rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-aine-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium text-aine-purple mb-1">
                        Endereço
                      </h4>
                      <p className="text-gray-600 whitespace-pre-line">{address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-aine-light rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-aine-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium text-aine-purple mb-1">
                        Horário de Funcionamento
                      </h4>
                      <p className="text-gray-600">Segunda à Sexta: 8h às 19h</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-0 md:w-96 md:flex-shrink-0 rounded-lg overflow-hidden">
                  <iframe
                    title="Mapa mostrando a localização da clínica"
                    src={mapSrc}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <div className="bg-aine-light rounded-2xl p-6">
              <h4 className="font-medium text-aine-purple mb-3">
                Atendimento Especial
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Oferecemos atendimento domiciliar para gestantes e puérperas que
                necessitam de cuidados especiais. Entre em contato para mais
                informações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


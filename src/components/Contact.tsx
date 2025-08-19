import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!privacyAccepted) {
      toast({
        title: "Atenção!",
        description: "Você precisa aceitar a política de privacidade para continuar.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar a mensagem. Tente novamente.');
      }

      if (typeof window.gtag_report_conversion === 'function') {
        window.gtag_report_conversion();
      }

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
      setPrivacyAccepted(false);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro no envio",
        description: "Houve um problema ao enviar sua mensagem. Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

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

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="border-gray-100">
                <CardHeader>
                  <CardTitle className="text-aine-purple">Tire suas dúvidas</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                          type="text"
                          name="name"
                          placeholder="Seu nome completo"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-gray-200 focus:border-aine-purple"
                      />
                    </div>

                    <div>
                      <Input
                          type="email"
                          name="email"
                          placeholder="Seu e-mail"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-gray-200 focus:border-aine-purple"
                      />
                    </div>

                    <div>
                      <Input
                          type="tel"
                          name="phone"
                          placeholder="Seu telefone/WhatsApp"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="border-gray-200 focus:border-aine-purple"
                      />
                    </div>

                    <div>
                      <Textarea
                          name="message"
                          placeholder="Conte-nos como podemos ajudá-la..."
                          value={formData.message}
                          onChange={handleChange}
                          className="border-gray-200 focus:border-aine-purple min-h-[120px]"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                          id="privacy"
                          checked={privacyAccepted}
                          onCheckedChange={() => setPrivacyAccepted(!privacyAccepted)}
                      />
                      <Label htmlFor="privacy" className="text-sm font-normal text-gray-600">
                        Eu li e concordo com a{' '}
                        <Link to="/privacidade" target={"_blank"} className="underline text-aine-purple hover:text-aine-purple/80">
                          Política de Privacidade
                        </Link>
                        .
                      </Label>
                    </div>

                    <Button
                        type="submit"
                        disabled={!privacyAccepted || isSubmitting}
                        className="w-full bg-aine-purple hover:bg-aine-purple/90 text-white py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 disabled:bg-gray-400 disabled:hover:scale-100 disabled:cursor-not-allowed"
                    >
                      {isSubmitting && <Loader2 className="animate-spin" />}
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-aine-purple mb-6">Informações de Contato</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-aine-light rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-aine-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium text-aine-purple mb-1">Telefone</h4>
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
                      <p className="text-gray-600">contato@ainefisiopelvica.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-aine-light rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-aine-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium text-aine-purple mb-1">Endereço</h4>
                      <p className="text-gray-600">Rua Princesa Isabel, 40, sala 1008<br />Centro - Criciúma/SC</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-aine-light rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-aine-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium text-aine-purple mb-1">Horário de Funcionamento</h4>
                      <p className="text-gray-600">Segunda à Sexta: 8h às 19h<br /></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-aine-light rounded-2xl p-6">
                <h4 className="font-medium text-aine-purple mb-3">Atendimento Especial</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Oferecemos atendimento domiciliar para gestantes e puérperas que necessitam de cuidados especiais.
                  Entre em contato para mais informações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Contact;
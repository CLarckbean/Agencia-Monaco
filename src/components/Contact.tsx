import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const whatsappNumber = '244923456789';
  const whatsappMessage = encodeURIComponent('Olá Monaco! Gostaria de saber mais sobre os vossos serviços.');

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Entre em <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Contacto</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Estamos prontos para transformar o seu negócio. Fale connosco hoje mesmo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-purple-950/50 to-black border border-purple-900/30 rounded-3xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Telefone</div>
                    <a href="tel:+244923456789" className="text-white hover:text-purple-400 transition-colors">
                      +244 923 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <a href="mailto:contacto@monaco.ao" className="text-white hover:text-purple-400 transition-colors">
                      contacto@monaco.ao
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Localização</div>
                    <p className="text-white">Luanda, Angola</p>
                    <p className="text-gray-400 text-sm">Atendimento remoto e presencial</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Horário de Atendimento</div>
                    <p className="text-white">Segunda a Sexta: 08:00 - 18:00</p>
                    <p className="text-white">Sábado: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full font-semibold transition-all shadow-lg shadow-green-500/30"
            >
              <MessageCircle className="w-6 h-6" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-950/50 to-black border border-purple-900/30 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>

            {submitted ? (
              <div className="bg-green-500/20 border border-green-500 rounded-xl p-6 text-center">
                <div className="text-green-500 text-5xl mb-4">✓</div>
                <h4 className="text-white text-xl font-semibold mb-2">Mensagem Enviada!</h4>
                <p className="text-gray-300">Entraremos em contacto consigo em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-purple-900/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
                    placeholder="O seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-purple-900/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-purple-900/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
                    placeholder="+244 900 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Serviço de Interesse *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-purple-900/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
                  >
                    <option value="">Seleccione um serviço</option>
                    <option value="website">Criação de Sites</option>
                    <option value="seo">SEO</option>
                    <option value="google-local">Localização no Google</option>
                    <option value="social-media">Gestão de Redes Sociais</option>
                    <option value="consultoria">Consultoria Digital</option>
                    <option value="custom">Solução Personalizada</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-black/50 border border-purple-900/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors resize-none"
                    placeholder="Conte-nos sobre o seu projecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 rounded-full font-semibold hover:from-purple-700 hover:to-purple-900 transition-all shadow-lg shadow-purple-500/50 flex items-center justify-center gap-2"
                >
                  Enviar Mensagem
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden border border-purple-900/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126094.11468713836!2d13.234444!3d-8.838333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f24ecf1bb5a1%3A0x1f8d6e0d0a5b8e0!2sLuanda%2C%20Angola!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

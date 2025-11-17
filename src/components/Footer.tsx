import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-black to-purple-950/20 border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
              MONACO
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transformamos negócios através de soluções digitais inovadoras e estratégias que geram resultados reais.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-purple-900/30 hover:bg-purple-600 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-purple-900/30 hover:bg-purple-600 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-purple-900/30 hover:bg-purple-600 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-purple-900/30 hover:bg-purple-600 rounded-lg transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Preços
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Criação de Sites
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  SEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Localização no Google
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Redes Sociais
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Consultoria Digital
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contactos</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+244923456789" className="hover:text-purple-400 transition-colors">
                  +244 923 456 789
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:contacto@monaco.ao" className="hover:text-purple-400 transition-colors">
                  contacto@monaco.ao
                </a>
              </li>
            </ul>

            <button
              onClick={() => scrollToSection('contact')}
              className="mt-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-purple-900 transition-all"
            >
              Falar Connosco
            </button>
          </div>
        </div>

        <div className="border-t border-purple-900/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Monaco. Todos os direitos reservados.
            </p>

            <div className="flex gap-6 text-sm">
              <button className="text-gray-400 hover:text-purple-400 transition-colors">
                Termos e Condições
              </button>
              <button className="text-gray-400 hover:text-purple-400 transition-colors">
                Política de Privacidade
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

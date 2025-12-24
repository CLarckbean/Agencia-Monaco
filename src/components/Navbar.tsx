import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
              <img src="/Logo1.png" alt="Logo" className="h-32 w-auto" />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-purple-400 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-purple-400 transition-colors">
                Sobre Nós
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-purple-400 transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-purple-400 transition-colors">
                Portfólio
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-purple-400 transition-colors">
                Preços
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-purple-900 transition-all">
                Contactar
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/98 border-t border-purple-900/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-white hover:bg-purple-900/20">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-white hover:bg-purple-900/20">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-white hover:bg-purple-900/20">
              Serviços
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-3 py-2 text-white hover:bg-purple-900/20">
              Portfólio
            </button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-2 text-white hover:bg-purple-900/20">
              Preços
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-white hover:bg-purple-900/20">
              Contactar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

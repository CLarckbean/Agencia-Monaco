import { Globe, Search, MapPin, Share2, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Criação de Sites',
    description: 'Sites modernos, responsivos e optimizados para converter visitantes em clientes.',
    gradient: 'from-purple-600 to-purple-800'
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Posicione o seu negócio no topo do Google e atraia mais clientes qualificados.',
    gradient: 'from-purple-700 to-purple-900'
  },
  {
    icon: MapPin,
    title: 'Localização no Google',
    description: 'Destaque-se nas pesquisas locais e seja encontrado pelos clientes da sua região.',
    gradient: 'from-purple-800 to-black'
  },
  {
    icon: Share2,
    title: 'Gestão de Redes Sociais',
    description: 'Conteúdos criativos que engajam e convertem seguidores em clientes fiéis.',
    gradient: 'from-purple-600 to-purple-800'
  },
  {
    icon: Lightbulb,
    title: 'Consultoria Digital',
    description: 'Estratégias personalizadas para maximizar a sua presença online e resultados.',
    gradient: 'from-purple-700 to-purple-900'
  }
];

export default function ServicesHighlight() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Serviços que <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Transformam</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluções completas de marketing digital para elevar o seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-purple-950/50 to-black border border-purple-900/30 rounded-2xl p-8 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

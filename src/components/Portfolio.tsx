import { ExternalLink, TrendingUp, Star } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Site para Padaria',
    category: 'Website Profissional',
    image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Site moderno para padarias, com cardápio, localização e contacto.',
    link: 'https://exemplopadaria.com'
  },
  {
    title: 'Site para Restaurante',
    category: 'Website Profissional',
    image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Website elegante para restaurantes com menu online e reservas.',
    link: 'https://exemplorestaurante.com'
  },
  {
    title: 'Site para Oficina Mecânica',
    category: 'Website Profissional',
    image: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Site para oficinas mecânicas com serviços, contactos e WhatsApp.',
    link: 'https://exemplooficinamecanica.com'
  },
  {
    title: 'Site para Clínica',
    category: 'Website Profissional',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Site institucional para clínicas com agendamento e informações.',
    link: 'https://exemploclinicaodontologica.com'
  }
];


const beforeAfter = [
  {
    title: 'SEO - Tráfego Orgânico',
    before: '1,200',
    after: '15,800',
    metric: 'visitas/mês',
    growth: '+1,217%'
  },
  {
    title: 'Google Local - Avaliações',
    before: '8 reviews',
    after: '150 reviews',
    metric: '4.9 estrelas',
    growth: '+1,775%'
  },
  {
    title: 'Redes Sociais - Engajamento',
    before: '0.8%',
    after: '8.5%',
    metric: 'taxa de engajamento',
    growth: '+962%'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nosso <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Portfólio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Projectos que transformaram negócios e geraram resultados reais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gradient-to-br from-purple-950/30 to-black border border-purple-900/30 rounded-2xl overflow-hidden hover:border-purple-600/50 transition-all hover:transform hover:scale-105"
            >

              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full mb-2">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  {item.title}
                  <ExternalLink className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-green-500 font-semibold">{item.results}</span>
                </div>

                <div className="space-y-2">
                  {item.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <Star className="w-4 h-4 text-purple-400" />
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-950/50 to-black border border-purple-900/30 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Resultados <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Antes & Depois</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {beforeAfter.map((item, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold text-white mb-6">{item.title}</h4>

                <div className="flex items-center justify-center gap-8 mb-4">
                  <div>
                    <div className="text-gray-500 text-sm mb-2">Antes</div>
                    <div className="text-2xl font-bold text-gray-400">{item.before}</div>
                  </div>

                  <div className="text-3xl text-purple-500">→</div>

                  <div>
                    <div className="text-gray-500 text-sm mb-2">Depois</div>
                    <div className="text-2xl font-bold text-white">{item.after}</div>
                  </div>
                </div>

                <div className="text-sm text-gray-400 mb-2">{item.metric}</div>
                <div className="inline-block bg-green-500/20 text-green-500 px-4 py-1 rounded-full text-sm font-semibold">
                  {item.growth}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

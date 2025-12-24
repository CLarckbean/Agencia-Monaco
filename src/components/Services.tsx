import { Globe, Search, MapPin, Share2, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Criação de Sites',
    description: 'Desenvolvemos sites profissionais que reflectem a identidade da sua marca e convertem visitantes em clientes.',
    benefits: [
      'Design responsivo para todos os dispositivos',
      'Velocidade optimizada e SEO integrado',
      'Painel administrativo intuitivo',
      'Segurança e backups automáticos'
    ],
    process: [
      'Análise de necessidades e objectivos',
      'Design e prototipagem personalizada',
      'Desenvolvimento e testes rigorosos',
      'Lançamento e treinamento da equipa'
    ]
  },
  {
    icon: Search,
    title: 'SEO - Optimização para Motores de Busca',
    description: 'Posicione o seu site no topo do Google e atraia tráfego qualificado de forma orgânica.',
    benefits: [
      'Pesquisa profunda de palavras-chave',
      'Optimização técnica e de conteúdo',
      'Link building estratégico',
      'Relatórios mensais de desempenho'
    ],
    process: [
      'Auditoria completa do site actual',
      'Estratégia personalizada de SEO',
      'Implementação e optimização',
      'Monitoramento e ajustes contínuos'
    ]
  },
  {
    icon: MapPin,
    title: 'Localização no Google',
    description: 'Destaque-se nas pesquisas locais e seja facilmente encontrado pelos clientes da sua região.',
    benefits: [
      'Perfil Google Meu Negócio optimizado',
      'Gestão de avaliações e reputação',
      'Publicações regulares e actualizações',
      'Relatórios de visibilidade local'
    ],
    process: [
      'Configuração e optimização do perfil',
      'Estratégia de conteúdo local',
      'Gestão de interacções e reviews',
      'Análise e optimização contínua'
    ]
  },
  {
    icon: Share2,
    title: 'Criação de Conteúdos para Redes Sociais',
    description: 'Conteúdos criativos e estratégicos que engajam o seu público e fortalecem a sua marca.',
    benefits: [
      'Calendário editorial personalizado',
      'Design gráfico profissional',
      'Copywriting persuasivo',
      'Análise de métricas e performance'
    ],
    process: [
      'Estudo do público-alvo e concorrência',
      'Criação de estratégia de conteúdo',
      'Produção e agendamento de posts',
      'Monitoramento e engagement'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Consultoria de Presença Digital',
    description: 'Orientação estratégica para maximizar o retorno dos seus investimentos em marketing digital.',
    benefits: [
      'Diagnóstico completo da presença actual',
      'Plano estratégico personalizado',
      'Identificação de oportunidades',
      'Acompanhamento e mentoria'
    ],
    process: [
      'Análise aprofundada do negócio',
      'Desenvolvimento de estratégia',
      'Implementação assistida',
      'Revisões e ajustes estratégicos'
    ]
  }
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nossos <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluções completas para transformar a sua presença digital
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-950/30 to-black border border-purple-900/30 rounded-3xl overflow-hidden hover:border-purple-600/50 transition-all"
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  <div>
                    <div className="inline-flex p-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl mb-6">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">{service.description}</p>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-white mb-4">Benefícios</h4>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={scrollToContact}
                      className="group bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-900 transition-all flex items-center gap-2"
                    >
                      Solicitar Orçamento
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

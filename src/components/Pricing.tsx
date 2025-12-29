import { Check, Star, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: '45.000',
    period: 'Kwanzas',
    description: 'Landing page simples para marcar presença online',
    features: [
      'Landing page (1 página)',
      'Design simples e responsivo',
      'Botão de WhatsApp',
      'Formulário de contacto',
      'Carregamento rápido'
    ],
    highlighted: false
  },
  {
    name: 'Profissional',
    price: '75.000',
    period: 'Kwanzas',
    description: 'Ideal para negócios que querem mais visibilidade',
    features: [
      'Website de 3 a 4 páginas',
      'Design profissional responsivo',
      'SEO básico',
      'Google Meu Negócio profissional',
      'Botão de WhatsApp',
      'Formulário de contacto'
    ],
    highlighted: true,
    badge: 'Mais Popular'
  },
  {
    name: 'Premium',
    price: '150.000',
    period: 'Kwanzas',
    description: 'Para empresas que querem autoridade online',
    features: [
      'Website até 10 páginas',
      'Design premium personalizado',
      'SEO avançado',
      'Google Meu Negócio completo',
      'Integração com redes sociais',
      'Formulários avançados',
      'Outras regalias conforme o projecto'
    ],
    highlighted: false,
    badge: 'Melhor Valor'
  }
];

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Planos e <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Preços</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Escolha o plano ideal para o crescimento do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${
                plan.highlighted
                  ? 'from-purple-900/50 to-black border-purple-600 scale-105'
                  : 'from-purple-950/30 to-black border-purple-900/30'
              } border-2 rounded-3xl p-8 hover:border-purple-600/50 transition-all`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    {plan.highlighted ? <Star className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-2">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                </div>
                <div className="text-gray-400">{plan.period}</div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-full font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900 shadow-lg shadow-purple-500/50'
                    : 'border-2 border-purple-600 text-purple-400 hover:bg-purple-900/30'
                }`}
              >
                Formalizar os Detalhes
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-950/50 to-black border border-purple-900/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Precisa de Algo Personalizado?</h3>
          <p className="text-gray-300 mb-6">
            Criamos soluções à medida para empresas com necessidades específicas. Fale connosco e conte-nos sobre o seu projecto.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-900 transition-all"
          >
            Solicitar Proposta Personalizada
          </button>
        </div>
      </div>
    </section>
  );
}

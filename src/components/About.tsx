import { Target, Eye, Heart, Award, Users, Zap } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excelência',
    description: 'Comprometemo-nos com a qualidade superior em cada projecto.'
  },
  {
    icon: Heart,
    title: 'Paixão',
    description: 'Amamos o que fazemos e isso reflecte-se nos resultados. '
  },
  {
    icon: Zap,
    title: 'Inovação',
    description: 'Utilizamos as tecnologias mais recentes para resultados superiores.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Sobre a <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Monaco</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Fundada com a missão de democratizar o acesso a serviços de marketing digital de qualidade premium, a Monaco nasceu da visão de transformar negócios através da tecnologia e criatividade.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Somos uma agência que combina estratégia, design e tecnologia para criar experiências digitais memoráveis. Cada projecto é tratado com dedicação exclusiva, garantindo que a sua marca se destaque num mercado cada vez mais competitivo.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Com uma equipa multidisciplinar de especialistas apaixonados por resultados, já ajudámos mais de 150 empresas a alcançarem o sucesso digital e a superarem as suas metas de crescimento.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl blur-3xl opacity-20"></div>
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Equipa Monaco"
              className="relative rounded-2xl shadow-2xl border border-purple-900/30"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-purple-950/50 to-black border border-purple-900/30 rounded-2xl p-8">
            <div className="inline-flex p-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Nossa Missão</h3>
            <p className="text-gray-300 leading-relaxed">
              Capacitar empresas de todos os tamanhos a alcançarem o sucesso digital através de soluções inovadoras, personalizadas e orientadas para resultados mensuráveis.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-950/50 to-black border border-purple-900/30 rounded-2xl p-8">
            <div className="inline-flex p-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Nossa Visão</h3>
            <p className="text-gray-300 leading-relaxed">
              Ser a agência de referência em transformação digital, reconhecida pela excelência, inovação e pelo impacto positivo que geramos nos negócios dos nossos clientes.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Nossos <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Valores</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-950/50 to-black border border-purple-900/30 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <Users className="w-12 h-12 text-purple-400" />
            <div>
              <h3 className="text-2xl font-bold text-white">O Que Nos Diferencia</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div className="flex gap-3">
              <div className="text-purple-400 font-bold">•</div>
              <p>Atendimento personalizado com gestor de conta dedicado</p>
            </div>
            <div className="flex gap-3">
              <div className="text-purple-400 font-bold">•</div>
              <p>Resultados mensuráveis e relatórios transparentes</p>
            </div>
            <div className="flex gap-3">
              <div className="text-purple-400 font-bold">•</div>
              <p>Metodologia ágil e entregas no prazo estabelecido</p>
            </div>
            <div className="flex gap-3">
              <div className="text-purple-400 font-bold">•</div>
              <p>Suporte contínuo e acompanhamento pós-projecto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

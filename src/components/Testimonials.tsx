import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'CEO, Oku Kaya Angola',
    image: '/okukaya.png',
    content: 'Recebi O site da minha empresa em menos de 72h, Oque trouxe um aumento na credibilidade e nas vendas',
    rating: 5
  },
  {
    name: 'Sebastião Mendes',
    role: 'Proprietário, Hamburgaria Sabor & Arte',
    image: 'https://scontent.flad1-2.fna.fbcdn.net/v/t39.30808-1/558780375_3722507307885584_8064643322230293120_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ImYw9Lti8dIQ7kNvwFUpp54&_nc_oc=AdkSQjbsgs_ReH0EqH53j7OJ2nsRShv8YrpdJt0ZGCZjA-X7DLTMZN-fMFTBtD7k34I&_nc_zt=24&_nc_ht=scontent.flad1-2.fna&_nc_gid=K1qpcPM__AfgGT5GkRbAiQ&oh=00_AfmmyxbQ1zeqebCVeQ6xa77IoPt7_-dhVnOinSWn7i28fA&oe=69518A5F',
    content: 'Ótimo Serviço de criação de Identidade Visual, transformou por completo a imagem da minha Hamburgaria.',
    rating: 5
  },
  {
    name: 'Mariana Costa',
    role: 'Decoradora, Pretty festas',
    image: 'https://scontent.flad1-2.fna.fbcdn.net/v/t39.30808-6/462239047_122105584472551414_848526382478039416_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KVVRFiS4d1sQ7kNvwGXBPZ2&_nc_oc=Adm-JVHcMx1JfzsWMO_TEyMcX99IdTb-3lsl7kOtgQF2zftRbAunkMKn8JsMabY2GsQ&_nc_zt=23&_nc_ht=scontent.flad1-2.fna&_nc_gid=iI6GpYQ7x21tnHr7-DCwsA&oh=00_Afk5I5gG03m1jWAd98Dc_rWFg1fHLUr0Heg73gpX2Cyu9g&oe=6951A89D',
    content: 'Recomendo a Monaco para quem procura o serviço de localização. A equipa agiu de maneira rápida e edicaz.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            O Que Dizem Nossos <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Histórias reais de sucesso e transformação digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-950/50 to-black border border-purple-900/30 rounded-2xl p-8 hover:border-purple-600/50 transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-purple-600/20" />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-600"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

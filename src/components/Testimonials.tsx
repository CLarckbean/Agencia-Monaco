import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'CEO, TechStart Angola',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'A Monaco transformou completamente a nossa presença digital. Em apenas 3 meses, aumentámos as nossas vendas online em 250%. Profissionais excepcionais!',
    rating: 5
  },
  {
    name: 'Carlos Mendes',
    role: 'Proprietário, Restaurante Sabor & Arte',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'Graças à optimização local no Google, o nosso restaurante nunca esteve tão cheio. As reservas aumentaram 180% e somos agora uma referência em Luanda.',
    rating: 5
  },
  {
    name: 'Mariana Costa',
    role: 'Directora de Marketing, FashionHub',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'A gestão de redes sociais da Monaco é impecável. O nosso engajamento triplicou e finalmente conseguimos construir uma comunidade fiel à nossa marca.',
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

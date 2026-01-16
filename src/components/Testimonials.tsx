import React from 'react';
import { Star, Instagram } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Nunca imaginé que el matcha pudiera saber así. El color, la textura y el sabor son simplemente perfectos.",
      name: "Ana G.",
      location: "Hermosillo"
    },
    {
      text: "Uso el matcha culinario para mis postres y el sabor mejora muchísimo. Mis clientes lo notaron de inmediato.",
      name: "Javier R.",
      location: "Repostería local"
    },
    {
      text: "El matcha tiene un umami increíble, y el proceso de preparación es muy meditativo. Una experiencia completa.",
      name: "Mariana L.",
      location: "Clienta frecuente"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-shizuku-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-cursive font-medium text-shizuku-800 mb-4 italic">
            Lo que dicen nuestros clientes
          </h3>
          <p className="text-lg text-shizuku-600 max-w-2xl mx-auto font-cursive italic">
            Experiencias auténticas de quienes han descubierto la pureza del matcha japonés en Hermosillo
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-shizuku-50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative border border-shizuku-100 clip-path-testimonial"
            >
              <div className="absolute -top-4 left-8">
                <div className="bg-shizuku-600 w-12 h-12 flex items-center justify-center clip-path-star">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="text-white fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <p className="text-shizuku-700 leading-relaxed mb-6 italic text-lg font-cursive">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gold-200 pt-4">
                  <p className="font-medium text-shizuku-800 mb-1 font-cursive">
                    {testimonial.name}
                  </p>
                  <p className="text-shizuku-600 text-sm font-cursive italic">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-4">
          <button 
            onClick={() => window.open('https://www.instagram.com/shizukumatchastudio/', '_blank')}
            className="inline-flex items-center gap-3 bg-shizuku-600 text-white px-8 py-4 font-medium hover:bg-shizuku-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-4 clip-path-button"
          >
            <Instagram size={20} />
            Ordena por Instagram
          </button>
          
          <div>
            <a 
              href="https://www.instagram.com/shizukumatchastudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-shizuku-600 hover:text-shizuku-700 transition-colors duration-300 underline font-cursive italic"
            >
              Ver más reseñas en Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
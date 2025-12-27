import React from 'react';
import { Instagram, Sparkles, Clock, Leaf } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-4">
            La Experiencia Shizuku
          </h2>
          <div className="w-24 h-px bg-matcha mx-auto mb-6"></div>
          <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
            Descubre los beneficios del auténtico matcha premium
          </p>
        </div>

        {/* Main Feature - Split Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2">
            {/* Image Side */}
            <div className="aspect-[4/3] relative">
              <img 
                src="/6.png" 
                alt="Preparación de Matcha" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent">
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-2xl font-serif mb-2">Energía Natural</p>
                  <p className="text-sm opacity-90">L-teanina + Cafeína</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="bg-matcha-pale/10 p-8 lg:p-12 flex items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-charcoal">
                    Beneficios del Matcha
                  </h3>
                  <p className="text-charcoal-light">
                    El matcha premium ofrece una experiencia única de energía 
                    sostenida y claridad mental, gracias a su combinación natural 
                    de L-teanina y cafeína.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Sparkles className="text-matcha" size={20} />
                      <h4 className="font-medium text-charcoal">Enfoque</h4>
                    </div>
                    <p className="text-sm text-charcoal-light">
                      Energía estable sin crashes
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="text-matcha" size={20} />
                      <h4 className="font-medium text-charcoal">4-6 horas</h4>
                    </div>
                    <p className="text-sm text-charcoal-light">
                      De energía sostenida
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Leaf className="text-matcha" size={20} />
                      <h4 className="font-medium text-charcoal">Antioxidantes</h4>
                    </div>
                    <p className="text-sm text-charcoal-light">
                      Alto contenido de EGCG
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Instagram className="text-matcha" size={20} />
                      <h4 className="font-medium text-charcoal">Comunidad</h4>
                    </div>
                    <p className="text-sm text-charcoal-light">
                      Soporte y tips diarios
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-px bg-charcoal/10">
            <div className="bg-white p-8">
              <div className="aspect-square mb-6">
                <img 
                  src="/1.png" 
                  alt="Matcha Tradicional" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-charcoal mb-2">
                Tradicional
              </h4>
              <p className="text-sm text-charcoal-light">
                La forma más pura de disfrutar el matcha
              </p>
            </div>

            <div className="bg-white p-8">
              <div className="aspect-square mb-6">
                <img 
                  src="/5.png" 
                  alt="Matcha Latte" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-charcoal mb-2">
                Matcha Latte
              </h4>
              <p className="text-sm text-charcoal-light">
                Cremoso y reconfortante
              </p>
            </div>

            <div className="bg-white p-8">
              <div className="aspect-square mb-6">
                <img 
                  src="/7.png" 
                  alt="Matcha Frío" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif text-lg text-charcoal mb-2">
                Matcha Frío
              </h4>
              <p className="text-sm text-charcoal-light">
                Refrescante para el clima de Hermosillo
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-xl mx-auto mt-16 text-center">
          <div className="bg-matcha-pale/10 p-8">
            <h3 className="text-2xl font-serif text-charcoal mb-4">
              ¿Listo para probar?
            </h3>
            <p className="text-charcoal-light mb-6">
              Comienza tu experiencia Shizuku con pick-up disponible toda la semana
            </p>
            <a 
              href="https://www.instagram.com/shizukumatchastudio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-matcha text-white px-8 py-4 hover:bg-matcha-dark transition-colors"
            >
              <Instagram size={20} />
              Ordenar por Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
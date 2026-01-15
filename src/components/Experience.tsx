import React from 'react';
import { Instagram, Sparkles, Clock, Leaf } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-washi-bg">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
            Beneficios
          </p>
          <h2 className="studio-subheading text-washi-text">
            La experiencia Shizuku
          </h2>
          <div className="w-20 h-px bg-forest-green/30 mx-auto"></div>
          <p className="text-base md:text-lg text-charcoal-light max-w-xl mx-auto font-light leading-relaxed">
            Descubre los beneficios del auténtico matcha premium
          </p>
        </div>

        {/* Main Feature - Split Section */}
        <div className="max-w-6xl mx-auto mb-16 lg:mb-24">
          <div className="grid md:grid-cols-2 gap-0">
            
            {/* Image Side */}
            <div className="aspect-[4/3] relative bg-cream">
              <img 
                src="/MatchaPowder.png" 
                alt="Matcha en polvo - energía natural" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                <div className="absolute bottom-12 left-12 text-white space-y-2">
                  <p className="text-3xl font-serif font-light tracking-tight">Energía natural</p>
                  <p className="font-mono text-xs uppercase tracking-[0.15em] opacity-90">L-teanina + Cafeína</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="bg-forest-green-pale/30 p-8 lg:p-16 flex items-center">
              <div className="space-y-10">
                <div className="space-y-6">
                  <h3 className="text-3xl font-serif text-washi-text font-light tracking-tight">
                    Beneficios del matcha
                  </h3>
                  <p className="text-charcoal-light font-light leading-relaxed">
                    El matcha premium ofrece una experiencia única de energía 
                    sostenida y claridad mental, gracias a su combinación natural 
                    de L-teanina y cafeína.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Sparkles className="text-forest-green" size={18} />
                      <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-washi-text">Enfoque</h4>
                    </div>
                    <p className="text-sm text-charcoal-light font-light">
                      Energía estable sin crashes
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Clock className="text-forest-green" size={18} />
                      <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-washi-text">4-6 horas</h4>
                    </div>
                    <p className="text-sm text-charcoal-light font-light">
                      De energía sostenida
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Leaf className="text-forest-green" size={18} />
                      <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-washi-text">Antioxidantes</h4>
                    </div>
                    <p className="text-sm text-charcoal-light font-light">
                      Alto contenido de EGCG
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Instagram className="text-forest-green" size={18} />
                      <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-washi-text">Comunidad</h4>
                    </div>
                    <p className="text-sm text-charcoal-light font-light">
                      Soporte y tips diarios
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples - Clean Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="aspect-square bg-cream overflow-hidden">
                <img 
                  src="/BowlWithMatcha.png" 
                  alt="Matcha tradicional" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-2xl text-washi-text font-light tracking-tight">
                  Tradicional
                </h4>
                <p className="text-sm text-charcoal-light font-light leading-relaxed">
                  La forma más pura de disfrutar el matcha
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-square bg-cream overflow-hidden">
                <img 
                  src="/HotMatchaLatte.png" 
                  alt="Matcha latte" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-2xl text-washi-text font-light tracking-tight">
                  Matcha latte
                </h4>
                <p className="text-sm text-charcoal-light font-light leading-relaxed">
                  Cremoso y reconfortante
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-square bg-cream overflow-hidden">
                <img 
                  src="/MatchaLatter.png" 
                  alt="Matcha frío" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-2xl text-washi-text font-light tracking-tight">
                  Matcha frío
                </h4>
                <p className="text-sm text-charcoal-light font-light leading-relaxed">
                  Refrescante para el clima de Hermosillo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

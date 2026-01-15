import React from 'react';
import { Instagram, CalendarDays, MapPin } from 'lucide-react';

const HowToOrder = () => {
  return (
    <section id="how-to-order" className="section-padding bg-washi-bg">
      <div className="container-custom">
        
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-16 lg:mb-20 space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
            Proceso
          </p>
          <h2 className="studio-subheading text-washi-text">
            ¿Cómo ordenar?
          </h2>
          <div className="w-20 h-px bg-forest-green/30 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-16 lg:space-y-20">
          
          {/* Process Steps - Clean Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Step 1 */}
            <div className="space-y-6 text-center">
              <div className="h-16 w-16 border border-forest-green flex items-center justify-center mx-auto">
                <Instagram className="text-forest-green" size={24} />
              </div>
              <div className="space-y-3">
                <div className="flex flex-col items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-forest-green">01</span>
                  <h3 className="font-serif text-2xl text-washi-text font-light tracking-tight">Envía dm</h3>
                </div>
                <p className="text-charcoal-light font-light leading-relaxed">
                  Escríbenos por Instagram para hacer tu pedido
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-6 text-center">
              <div className="h-16 w-16 border border-forest-green flex items-center justify-center mx-auto">
                <CalendarDays className="text-forest-green" size={24} />
              </div>
              <div className="space-y-3">
                <div className="flex flex-col items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-forest-green">02</span>
                  <h3 className="font-serif text-2xl text-washi-text font-light tracking-tight">Transfiere</h3>
                </div>
                <p className="text-charcoal-light font-light leading-relaxed">
                  Realiza tu transferencia y coordina tu pick-up
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-6 text-center">
              <div className="h-16 w-16 border border-forest-green flex items-center justify-center mx-auto">
                <MapPin className="text-forest-green" size={24} />
              </div>
              <div className="space-y-3">
                <div className="flex flex-col items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-forest-green">03</span>
                  <h3 className="font-serif text-2xl text-washi-text font-light tracking-tight">Recoge</h3>
                </div>
                <p className="text-charcoal-light font-light leading-relaxed">
                  Recoge tu pedido en el horario acordado
                </p>
              </div>
            </div>
          </div>

          {/* Pick-up Info */}
          <div className="bg-forest-green-pale/20 border border-forest-green/10 p-10 lg:p-16">
            <h3 className="font-serif text-2xl text-washi-text font-light tracking-tight mb-10 text-center">
              Pick-up disponible
            </h3>
            <div className="grid md:grid-cols-2 gap-10 max-w-2xl mx-auto">
              <div className="text-center space-y-4">
                <div className="text-3xl">📍</div>
                <p className="text-sm text-charcoal-light font-light leading-relaxed">
                  Coordina la ubicación y horario por dm
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-3xl">📅</div>
                <p className="text-sm text-charcoal-light font-light leading-relaxed">
                  Disponible toda la semana
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href="https://www.instagram.com/shizukumatchastudio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-forest-green text-forest-green px-10 py-5 font-mono text-xs uppercase tracking-[0.15em] hover:bg-forest-green hover:text-washi-bg transition-all duration-500"
            >
              <Instagram size={18} />
              ordenar por Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;

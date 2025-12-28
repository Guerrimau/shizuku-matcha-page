import React from 'react';
import { Instagram, CalendarDays, MapPin } from 'lucide-react';

const HowToOrder = () => {
  return (
    <section id="how-to-order" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header Simple */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal">
            ¿Cómo Ordenar?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal/10">
            {/* Step 1 */}
            <div className="bg-white p-6">
              <div className="h-12 w-12 bg-matcha flex items-center justify-center mb-6">
                <Instagram className="text-white" size={24} />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-matcha">01</span>
                  <h3 className="font-serif text-lg text-charcoal">Envía DM</h3>
                </div>
                <p className="text-charcoal-light">
                  Escríbenos por Instagram para hacer tu pedido
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6">
              <div className="h-12 w-12 bg-matcha flex items-center justify-center mb-6">
                <CalendarDays className="text-white" size={24} />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-matcha">02</span>
                  <h3 className="font-serif text-lg text-charcoal">Transfiere</h3>
                </div>
                <p className="text-charcoal-light">
                  Realiza tu transferencia y coordina tu pick-up
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6">
              <div className="h-12 w-12 bg-matcha flex items-center justify-center mb-6">
                <MapPin className="text-white" size={24} />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-matcha">03</span>
                  <h3 className="font-serif text-lg text-charcoal">Recoge</h3>
                </div>
                <p className="text-charcoal-light">
                  Recoge tu pedido en el horario acordado
                </p>
              </div>
            </div>
          </div>

          {/* Pick-up Info */}
          <div className="mt-12 bg-matcha-pale/10 p-6 lg:p-8">
            <h3 className="font-serif text-lg text-charcoal mb-4 text-center">
              Pick-up Disponible
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl mb-2">📍</div>
                <p className="text-sm text-charcoal-light">
                  Coordina la ubicación y horario por DM
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📅</div>
                <p className="text-sm text-charcoal-light">
                  Disponible toda la semana
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a 
              href="https://www.instagram.com/shizukumatchastudio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-matcha text-white px-8 py-4 hover:bg-matcha-dark transition-colors"
            >
              <Instagram size={24} />
              Ordenar por Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;

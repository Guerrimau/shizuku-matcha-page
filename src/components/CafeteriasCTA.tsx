import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CafeteriasCTA = () => {
  return (
    <section id="cafeterias-cta" className="section-padding bg-matcha-pale/10">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-6">
            ¿Listo para Elevar tu Menú?
          </h2>
          <p className="text-xl text-charcoal-light mb-12 max-w-2xl mx-auto">
            Únete a las cafeterías en Hermosillo que ya están ofreciendo 
            matcha premium a sus clientes. Contáctanos hoy mismo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.instagram.com/shizukumatchastudio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-matcha text-white px-8 py-4 hover:bg-matcha-dark transition-colors text-lg"
            >
              <Instagram size={24} />
              Solicitar Cotización B2B
            </a>
            
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-charcoal hover:text-matcha transition-colors"
            >
              Ver productos para consumo individual
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="font-medium text-charcoal mb-2">Precios Competitivos</h4>
              <p className="text-sm text-charcoal-light">
                Descuentos especiales para pedidos mayores y compras recurrentes
              </p>
            </div>
            <div>
              <h4 className="font-medium text-charcoal mb-2">Soporte Continuo</h4>
              <p className="text-sm text-charcoal-light">
                Asesoría en preparación y recetas para tu equipo
              </p>
            </div>
            <div>
              <h4 className="font-medium text-charcoal mb-2">Disponibilidad</h4>
              <p className="text-sm text-charcoal-light">
                Stock disponible para pedidos inmediatos en Hermosillo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeteriasCTA;


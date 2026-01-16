import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CafeteriasCTA = () => {
  return (
    <section id="cafeterias-cta" className="section-padding bg-matcha-pale/10">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-6">
            Matcha premium para tu cafetería de especialidad
          </h2>
          <p className="text-xl text-charcoal-light mb-12 max-w-2xl mx-auto">
            Si te tomas en serio el café de especialidad, tómate en serio el matcha. 
            Precio competitivo, sin consumo mínimo, con asesoramiento profesional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.instagram.com/shizukumatchastudio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-matcha text-white px-8 py-4 hover:bg-matcha-dark transition-colors text-lg"
            >
              <Instagram size={24} />
                Solicitar cotización B2B
            </a>
            
            <Link 
              href="/#products"
              className="inline-flex items-center gap-2 text-charcoal hover:text-matcha transition-colors"
            >
              Ver productos para consumo individual
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="font-medium text-charcoal mb-2">~50% más barato</h4>
              <p className="text-sm text-charcoal-light">
                Precio competitivo comparado con el mercado. Matcha premium sin pagar precios premium
              </p>
            </div>
            <div>
              <h4 className="font-medium text-charcoal mb-2">Sin consumo mínimo</h4>
              <p className="text-sm text-charcoal-light">
                Empieza con el volumen que necesites. Sin compromisos ni obligaciones
              </p>
            </div>
            <div>
              <h4 className="font-medium text-charcoal mb-2">Asesoría incluida</h4>
              <p className="text-sm text-charcoal-light">
                Guías técnicas, recetas y entrenamiento para tu equipo sin costo adicional
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeteriasCTA;


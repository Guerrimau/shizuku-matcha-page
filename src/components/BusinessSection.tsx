import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const BusinessSection = () => {
  return (
    <section id="business-section" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="bg-matcha-pale/10 p-12 lg:p-16 flex items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Building2 className="text-matcha" size={32} />
                  <h2 className="text-3xl lg:text-4xl font-serif text-charcoal">
                    ¿Tienes una Cafetería?
                  </h2>
                </div>
                <p className="text-lg text-charcoal-light leading-relaxed">
                  Ofrecemos matcha premium para negocios en Hermosillo. 
                  Precios mayoristas, soporte especializado y productos de 
                  la más alta calidad para tu menú.
                </p>
                <ul className="space-y-2 text-charcoal-light">
                  <li className="flex items-center gap-2">
                    <span className="text-matcha">•</span>
                    Precios mayoristas competitivos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-matcha">•</span>
                    Soporte en preparación y recetas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-matcha">•</span>
                    Presentaciones ideales para uso comercial
                  </li>
                </ul>
                <Link 
                  href="/matcha-cafeterias"
                  className="inline-flex items-center gap-2 bg-matcha text-white px-8 py-4 hover:bg-matcha-dark transition-colors"
                >
                  Ver Información para Negocios
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div className="bg-cream p-6 lg:p-8 flex items-center justify-center">
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <img 
                  src="/CoffeShop.png" 
                  alt="Cafetería con matcha premium" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <h3 className="font-serif text-2xl text-charcoal mb-2">
                    Eleva tu Menú
                  </h3>
                  <p className="text-charcoal-light">
                    Únete a las cafeterías que ya ofrecen matcha premium
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;

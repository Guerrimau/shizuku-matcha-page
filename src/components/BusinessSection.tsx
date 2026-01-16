import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const BusinessSection = () => {
  return (
    <section id="business-section" className="section-padding bg-washi-bg">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 border border-charcoal/10">
            {/* Content Side */}
            <div className="bg-washi-bg p-12 lg:p-16 flex items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Building2 className="text-forest-green" size={24} />
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
                    Para cafeterías
                  </p>
                </div>
                <h2 className="text-3xl lg:text-4xl font-serif font-light text-charcoal tracking-tight">
                  ¿Tienes una cafetería?
                </h2>
                <p className="text-lg text-charcoal-light leading-relaxed font-light">
                  Matcha premium para negocios en Hermosillo. Precios mayoristas,
                  soporte especializado y calidad consistente para tu menú.
                </p>
                <ul className="space-y-3 text-charcoal-light font-light">
                  <li className="flex items-center gap-2">
                    <span className="text-forest-green">•</span>
                    Precios competitivos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-forest-green">•</span>
                    Soporte en preparación y recetas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-forest-green">•</span>
                    Presentaciones ideales para uso comercial
                  </li>
                </ul>
                <Link 
                  href="/matcha-cafeterias"
                  className="inline-flex items-center gap-2 border border-forest-green text-forest-green px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] hover:bg-forest-green hover:text-washi-bg transition-all duration-500"
                >
                  Ver información para cafeterías
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div className="bg-washi-bg p-6 lg:p-8 flex items-center justify-center">
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <img 
                  src="/CoffeShop.png" 
                  alt="Cafetería con matcha premium" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-washi-bg/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <h3 className="font-serif text-2xl font-light text-charcoal mb-2">
                    Eleva tu menú
                  </h3>
                  <p className="text-charcoal-light font-light">
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

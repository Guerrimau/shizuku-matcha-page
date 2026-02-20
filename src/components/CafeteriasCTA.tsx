import React from 'react';
import Image from 'next/image';
import { Instagram, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CafeteriasCTA = () => {
  return (
    <section id="cafeterias-cta" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 border border-charcoal/10">

            {/* Content Side */}
            <div className="bg-washi-bg p-12 lg:p-16 flex items-center">
              <div className="space-y-8 max-w-lg">

                <div className="space-y-3">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
                    Cotización B2B
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-serif font-light text-washi-text tracking-tight">
                    ¿Listo para agregar matcha de especialidad a tu carta?
                  </h2>
                </div>

                <p className="text-base text-charcoal-light font-light leading-relaxed">
                  Escríbenos por Instagram. Te respondemos con precios, presentaciones y especificaciones técnicas. Sin mínimo, sin compromisos.
                </p>

                <div className="space-y-3">
                  {[
                    'Precio directo de importador',
                    'Primera cosecha, cultivar Okumidori',
                    'Asesoría técnica incluida',
                    'Entrega en Hermosillo y envíos nacionales',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-forest-green flex-shrink-0"></span>
                      <span className="text-sm text-charcoal-light font-light">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="https://www.instagram.com/shizukumatchastudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 border border-forest-green text-forest-green px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] hover:bg-forest-green hover:text-washi-bg transition-all duration-500"
                  >
                    <Instagram size={14} />
                    solicitar cotización
                  </a>
                  <Link
                    href="/#products"
                    className="group inline-flex items-center justify-center gap-3 text-sm lowercase tracking-wide text-washi-text transition-all duration-500 hover:gap-5"
                  >
                    <span>ver productos individuales</span>
                    <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </div>

              </div>
            </div>

            {/* Image Side */}
            <div className="relative min-h-[400px] md:min-h-0">
              <Image
                src="/MATCHA_BAG.jpg"
                alt="Presentación de matcha Shizuku para cafeterías"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-washi-text/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-washi-bg/80 mb-1">
                  Shizuoka → Hermosillo
                </p>
                <p className="font-serif text-2xl text-washi-bg font-light">
                  Shizu no Midori
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeteriasCTA;

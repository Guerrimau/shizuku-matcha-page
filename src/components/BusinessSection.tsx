import React from 'react';
import Image from 'next/image';
import { Building2, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const BusinessSection = () => {
  return (
    <section id="business-section" className="py-24 md:py-32 bg-washi-bg">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Building2 className="text-forest-green" size={20} />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
              Para cafeterías
            </p>
          </div>
          <h2 className="studio-subheading text-washi-text">
            ¿Tienes una cafetería?
          </h2>
          <div className="w-20 h-px bg-forest-green/30 mx-auto"></div>
          <p className="text-base md:text-lg text-charcoal-light max-w-2xl mx-auto font-light leading-relaxed">
            Matcha de especialidad para cafeterías en Hermosillo. Precio directo de importador,
            asesoría técnica de preparación y perfil consistente lote a lote.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center border border-charcoal/10 p-6 md:p-10 lg:p-12">
            {/* Image Side */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/5] w-full relative overflow-hidden">
                <Image 
                  src="/MATCHA_LATTE_HOT.jpg" 
                  alt="Matcha latte de especialidad para cafeterías" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream/80 mb-2">
                    Matcha para tu carta
                  </p>
                  <p className="text-lg text-cream font-light">
                    Mismo origen, perfil consistente, formato para volumen
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits & CTAs Side */}
            <div className="order-1 md:order-2 space-y-10 flex flex-col">
              {/* Benefits List */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl lg:text-3xl font-light text-washi-text tracking-tight">
                  Lo que ofrecemos
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="text-forest-green flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-serif text-lg text-washi-text tracking-tight mb-1">Precios competitivos</p>
                      <p className="text-charcoal-light font-light text-base">Directo del importador, sin intermediarios</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="text-forest-green flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-serif text-lg text-washi-text tracking-tight mb-1">Soporte técnico</p>
                      <p className="text-charcoal-light font-light text-base">Asesoría en preparación, recetas y capacitación</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="text-forest-green flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-serif text-lg text-washi-text tracking-tight mb-1">Formato comercial</p>
                      <p className="text-charcoal-light font-light text-base">Presentaciones ideales para alto volumen</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="text-forest-green flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-serif text-lg text-washi-text tracking-tight mb-1">Perfil consistente</p>
                      <p className="text-charcoal-light font-light text-base">Mismo sabor lote a lote para tu carta</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-4 pt-4">
                <Link 
                  href="/matcha-cafeterias"
                  className="w-full inline-flex items-center justify-center gap-3 bg-forest-green text-cream px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] hover:bg-forest-green-light transition-all duration-300"
                >
                  Ver información completa
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://www.instagram.com/shizukumatchastudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 border border-forest-green text-forest-green px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] hover:bg-forest-green hover:text-cream transition-all duration-300"
                >
                  <MessageCircle size={16} />
                  Contactar ahora
                </a>
              </div>

              {/* Trust note */}
              <p className="text-sm text-charcoal-light/80 font-mono tracking-wide">
                Ya trabajamos con cafeterías en Hermosillo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;

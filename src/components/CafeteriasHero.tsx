import React from 'react';
import Image from 'next/image';
import { Instagram, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CafeteriasHero = () => {
  return (
    <section
      id="cafeterias-hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-washi-bg"
    >
      <div className="container-custom relative z-10 w-full py-24 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen md:min-h-0">

          {/* Left Side */}
          <div className="order-2 md:order-1 space-y-10 md:space-y-12 max-w-lg">

            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
                Para cafeterías de especialidad
              </p>
              <div className="w-16 h-px bg-forest-green"></div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-serif font-light tracking-tight text-washi-text leading-[1.1]">
              Matcha de origen para tu carta.
            </h1>

            <p className="text-lg md:text-xl text-charcoal-light leading-relaxed font-light max-w-md">
              Primera cosecha de Shizuoka, cultivar Okumidori. Precio directo de importador, sin intermediarios. Perfil consistente lote a lote.
            </p>

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
                <span>ver productos</span>
                <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-2">
              <div className="space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest-green">Precio</p>
                <p className="text-sm text-charcoal-light font-light">Directo de importador</p>
              </div>
              <div className="w-px h-8 bg-charcoal/10 self-center"></div>
              <div className="space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest-green">Pedido mínimo</p>
                <p className="text-sm text-charcoal-light font-light">Sin mínimo</p>
              </div>
              <div className="w-px h-8 bg-charcoal/10 self-center"></div>
              <div className="space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest-green">Asesoría</p>
                <p className="text-sm text-charcoal-light font-light">Incluida</p>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <div className="order-1 md:order-2 relative">
            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
              <Image
                src="/MATCHA_LATTE_HOT.jpg"
                alt="Matcha latte de especialidad preparado con Shizu no Midori"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-washi-bg/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-8 -left-8 md:-left-12 bg-washi-bg border border-forest-green/20 p-6 md:p-8 max-w-xs shadow-lg">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-forest-green mb-2">
                Origen
              </p>
              <p className="text-sm text-charcoal-light leading-relaxed font-light">
                Shizuoka, Japón. Cultivar Okumidori. Alta solubilidad en leche, color verde estable.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute inset-0 bg-texture opacity-40 pointer-events-none"></div>
    </section>
  );
};

export default CafeteriasHero;

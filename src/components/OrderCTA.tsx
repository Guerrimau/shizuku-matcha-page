import React from "react";
import { Instagram } from "lucide-react";

const OrderCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-forest-green relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-texture opacity-20 pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Label */}
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white">
            Ordena ahora
          </p>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-white leading-tight">
            ¿Listo para probar el mejor matcha de Hermosillo?
          </h2>

          {/* Subtext */}
          <p className="text-base md:text-lg text-cream font-light leading-relaxed max-w-lg mx-auto">
            Escríbenos por Instagram para realizar tu pedido. Pickup en
            Hermosillo o envío a todo México.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="https://www.instagram.com/shizukumatchastudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-cream text-forest-green px-8 py-4 text-sm tracking-wide transition-all duration-300 hover:bg-matcha-green hover:text-forest-green"
            >
              <Instagram size={18} />
              <span>Ordenar por Instagram</span>
            </a>
          </div>

          {/* Small note */}
          <p className="text-xs text-cream/80 font-mono tracking-wide">
            Respuesta en menos de 24 horas
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderCTA;

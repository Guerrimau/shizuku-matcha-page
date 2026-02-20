'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: '¿Por qué matcha de especialidad y no ceremonial?',
    answer: 'En Japón, el matcha se clasifica por perfil sensorial y uso, no por categorías comerciales. Nuestro matcha de primera cosecha de Shizuoka está seleccionado específicamente para bebidas con leche: alta solubilidad, color verde estable y un perfil de umami moderado que destaca sobre la base láctea sin amargor excesivo.',
  },
  {
    question: '¿Qué hace que este matcha sea premium?',
    answer: 'Primera cosecha de Shizuoka, cultivar Okumidori. Las hojas se cosechan en la primera temporada (abril-mayo) tras 20+ días de sombreado, cuando tienen la mayor concentración de L-teanina y clorofila. El proceso de molido lento en piedra preserva el perfil aromático y el color verde intenso.',
  },
  {
    question: '¿Por qué funciona mejor en lattes que otros matchas?',
    answer: 'El cultivar Okumidori tiene alta solubilidad y un perfil balanceado que mantiene estructura en preparaciones con leche. El amargor bajo y el umami moderado permiten que el matcha resalte sin dominar. El color se mantiene verde intenso incluso con leche entera.',
  },
  {
    question: '¿Por qué el precio es más accesible?',
    answer: 'Importamos directamente de productores en Shizuoka, sin intermediarios ni distribuidores. Eso nos permite ofrecer matcha de primera cosecha a un precio significativamente menor que el promedio del mercado, manteniendo la misma calidad de origen.',
  },
  {
    question: '¿Qué incluye la asesoría técnica?',
    answer: 'Guías de proporción matcha-leche, temperaturas óptimas, técnica de batido (tamizado, temperatura del agua, frío vs caliente), y recetas base para tu menú. Podemos hacer una sesión con tu equipo si lo necesitas. Sin costo adicional.',
  },
  {
    question: '¿Cuál es el pedido mínimo?',
    answer: 'No hay pedido mínimo. Puedes comenzar con una presentación estándar para evaluar el producto en tu operación antes de comprometerte a volumen. Sin contratos ni obligaciones.',
  },
];

const CafeteriasFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="cafeterias-faq" className="section-padding bg-washi-bg">
      <div className="container-custom">

        <div className="text-center mb-16 lg:mb-20 space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
            FAQ
          </p>
          <h2 className="studio-subheading text-washi-text">
            Información técnica
          </h2>
          <div className="w-20 h-px bg-forest-green/30 mx-auto"></div>
          <p className="text-base md:text-lg text-charcoal-light max-w-xl mx-auto font-light leading-relaxed">
            Lo que necesitas saber antes de incorporar Shizuku a tu carta
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-charcoal/10">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-8 flex items-center justify-between text-left hover:opacity-70 transition-opacity duration-300"
              >
                <h3 className="font-serif text-xl md:text-2xl text-washi-text font-light tracking-tight pr-8">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-forest-green flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-forest-green flex-shrink-0" size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-8 pr-12">
                  <p className="text-charcoal-light font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CafeteriasFAQ;

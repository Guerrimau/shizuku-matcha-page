'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Venden matcha ceremonial?",
      answer: "Sí, ofrecemos matcha premium de primera cosecha de Shizuoka, Japón. Nuestro matcha es de calidad premium, ideal tanto para preparación tradicional como para lattes y bebidas modernas. Disponible en bolsas de 40g y 150g. Hacemos entregas gratis los sábados en Hermosillo y pick-up disponible toda la semana."
    },
    {
      question: "¿Dónde puedo comprar matcha?",
      answer: "Puedes comprar matcha premium a través de nuestro Instagram @shizukumatchastudio. Ofrecemos entregas GRATIS los sábados a domicilio en Hermosillo, y también tenemos opción de pick-up disponible toda la semana. Solo escríbenos por DM para hacer tu pedido."
    },
    {
      question: "¿Qué diferencia hay entre matcha premium y matcha ceremonial?",
      answer: "El término 'ceremonial' es principalmente un término de marketing occidental. En Japón, el matcha se clasifica por calidad y uso. Nuestro matcha premium es de primera cosecha de Shizuoka y es versátil: funciona excelente para preparación tradicional (como ceremonial) y también para lattes y bebidas modernas. Es matcha de alta calidad sin el precio inflado del marketing."
    },
    {
      question: "¿Cuánto cuesta el matcha?",
      answer: "Ofrecemos matcha premium japonés en presentaciones de 40g y 150g. Los precios varían según la presentación. Contáctanos por Instagram @shizukumatchastudio para conocer los precios actuales y hacer tu pedido."
    },
    {
      question: "¿Hacen entregas?",
      answer: "Sí, hacemos entregas GRATIS todos los sábados a domicilio en Hermosillo. También ofrecemos opción de pick-up disponible toda la semana. Coordinamos la ubicación y horario por DM en Instagram."
    },
    {
      question: "¿El matcha es auténtico de Japón?",
      answer: "Sí, nuestro matcha es 100% auténtico de primera cosecha de Shizuoka, Japón. Shizuoka es una de las regiones más reconocidas para la producción de matcha de calidad. Trabajamos directamente con productores japoneses para asegurar autenticidad y calidad premium."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-4">
            Preguntas Frecuentes
          </h2>
          <div className="w-24 h-px bg-matcha mx-auto mb-6"></div>
          <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre nuestro matcha premium
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-charcoal/10">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-cream/50 transition-colors"
              >
                <h3 className="font-serif text-lg md:text-xl text-charcoal pr-8">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-matcha flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-matcha flex-shrink-0" size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-charcoal-light leading-relaxed">
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

export default FAQ;


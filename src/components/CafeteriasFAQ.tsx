'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CafeteriasFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Por qué matcha premium y no ceremonial?",
      answer: "La categoría 'ceremonial' es en gran parte un término de marketing occidental. En Japón, el matcha se clasifica por calidad y uso. Nuestro matcha premium es de primera cosecha de Shizuoka y está específicamente seleccionado para bebidas como lattes, donde necesita disolverse bien, tener buen sabor con leche y crear una textura cremosa. Es el matcha que realmente necesitas para tu cafetería, no el que se usa en ceremonias tradicionales (que es demasiado delicado y costoso para bebidas)."
    },
    {
      question: "¿Qué hace que este matcha sea premium?",
      answer: "Nuestro matcha es de primera cosecha de Shizuoka, Japón, una de las regiones más reconocidas para matcha de calidad. Primera cosecha significa que las hojas se cosechan en la primera temporada (abril-mayo), cuando tienen el mejor sabor y mayor contenido de nutrientes. El proceso de sombreado y molienda tradicional asegura un polvo fino y de calidad superior."
    },
    {
      question: "¿Por qué es mejor para lattes que el matcha ceremonial?",
      answer: "El matcha ceremonial está diseñado para beberse solo con agua caliente, donde su sabor delicado y amargor mínimo son ideales. Para lattes y bebidas con leche, necesitas un matcha con más cuerpo y sabor que pueda destacar sobre la leche. Nuestro matcha premium tiene el equilibrio perfecto: sabor rico sin ser demasiado amargo, se disuelve bien y crea una textura cremosa ideal para bebidas de especialidad."
    },
    {
      question: "¿Realmente es 50% más barato?",
      answer: "Sí. Comparado con proveedores que venden matcha 'ceremonial' a cafeterías, nuestros precios son aproximadamente 50% más bajos porque trabajamos directamente con productores en Japón y no inflamos los precios con términos de marketing innecesarios. Obtienes matcha de primera calidad a un precio justo."
    },
    {
      question: "¿Qué incluye el asesoramiento de preparación?",
      answer: "Te proporcionamos guías técnicas sobre cómo preparar el matcha perfecto para diferentes bebidas, ratios de matcha a leche, temperaturas ideales, técnicas de batido, y recetas para tu menú. También podemos hacer sesiones de entrenamiento con tu equipo si lo necesitas. Todo incluido, sin costo adicional."
    },
    {
      question: "¿Cuál es el pedido mínimo?",
      answer: "No hay pedido mínimo. Entendemos que cada cafetería tiene necesidades diferentes. Puedes empezar con una bolsa pequeña para probar o pedir el volumen que necesites para tu operación. Sin compromisos ni obligaciones."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="cafeterias-faq" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-4">
            Preguntas Frecuentes
          </h2>
          <div className="w-24 h-px bg-matcha mx-auto mb-6"></div>
          <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre nuestro matcha para cafeterías
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-cream border border-charcoal/10">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-cream/80 transition-colors"
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

export default CafeteriasFAQ;


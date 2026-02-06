'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Faq } from '@/app/types';

const FAQ = ({ data }: { data: Faq[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
            FAQ
          </p>
          <h2 className="studio-subheading text-washi-text">
            Preguntas frecuentes
          </h2>
          <div className="w-20 h-px bg-forest-green/30 mx-auto"></div>
          <p className="text-base md:text-lg text-charcoal-light max-w-xl mx-auto font-light leading-relaxed">
            Todo lo que necesitas saber sobre nuestro matcha premium
          </p>
        </div>

        {/* FAQ Items - Minimal Design */}
        <div className="max-w-4xl mx-auto space-y-2">
          {data.map((faq, index) => (
            <div key={index} className="border-b border-charcoal/10">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-8 flex items-center justify-between text-left hover:opacity-70 transition-opacity duration-300"
              >
                <h3 className="font-serif text-xl md:text-2xl text-washi-text font-light tracking-tight pr-8">
                  {faq.Question}
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
                    {faq.Answer}
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

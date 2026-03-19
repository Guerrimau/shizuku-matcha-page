"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  label?: string;
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="border-b border-neutral-200">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group"
        aria-expanded={isOpen}
      >
        <h3
          className="text-base md:text-lg font-serif font-light text-neutral-900 group-hover:text-neutral-600 transition-colors pr-4"
          style={{ letterSpacing: "-0.01em" }}
        >
          {item.question}
        </h3>
        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-neutral-400 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-base text-neutral-600 font-light leading-relaxed pb-6">
            {item.answer}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function FAQAccordion({
  items,
  title = "Preguntas Frecuentes",
  label = "FAQ",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 md:py-28 lg:py-32 bg-washi-bg border-t border-neutral-200/40"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="font-mono text-[9px] uppercase text-neutral-400"
              style={{ letterSpacing: "0.25em" }}
            >
              {label}
            </span>
            <h2
              id="faq-heading"
              className="mt-4 text-[1.5rem] md:text-[1.75rem] font-serif font-light text-neutral-900"
              style={{ letterSpacing: "-0.02em" }}
            >
              {title}
            </h2>
          </div>

          <div className="border-t border-neutral-200">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

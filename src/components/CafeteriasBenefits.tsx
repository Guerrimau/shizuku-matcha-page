import React from 'react';
import { TrendingDown, FlaskConical, Layers, HeartHandshake } from 'lucide-react';

const benefits = [
  {
    icon: TrendingDown,
    label: 'Precio',
    title: 'Directo de importador',
    description: 'Sin intermediarios entre Shizuoka y tu cafetería. El precio refleja el origen, no el marketing.',
  },
  {
    icon: FlaskConical,
    label: 'Perfil técnico',
    title: 'Solubilidad en leche',
    description: 'Cultivar Okumidori seleccionado por su capacidad de mantener estructura y color en preparaciones lácteas.',
  },
  {
    icon: Layers,
    label: 'Consistencia',
    title: 'Perfil lote a lote',
    description: 'Primera cosecha, misma región, mismo cultivar. El perfil sensorial es predecible y reproducible.',
  },
  {
    icon: HeartHandshake,
    label: 'Soporte',
    title: 'Asesoría técnica incluida',
    description: 'Guías de proporción, temperatura y técnica de batido adaptadas a tu equipo y equipo de trabajo.',
  },
];

const CafeteriasBenefits = () => {
  return (
    <section id="cafeterias-benefits" className="section-padding bg-cream">
      <div className="container-custom">

        <div className="text-center mb-16 lg:mb-20 space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
            Por qué Shizuku
          </p>
          <h2 className="studio-subheading text-washi-text">
            Matcha con el mismo rigor que tu café
          </h2>
          <div className="w-20 h-px bg-forest-green/30 mx-auto"></div>
          <p className="text-base md:text-lg text-charcoal-light max-w-xl mx-auto font-light leading-relaxed">
            Cuatro razones técnicas para elegir Shizuku en tu carta de bebidas
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/5">
          {benefits.map(({ icon: Icon, label, title, description }) => (
            <div key={title} className="bg-washi-bg p-8 space-y-5">
              <div className="w-12 h-12 bg-forest-green-pale flex items-center justify-center">
                <Icon className="text-forest-green" size={22} />
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest-green">
                  {label}
                </p>
                <h3 className="font-serif text-xl text-washi-text font-light tracking-tight">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-charcoal-light font-light leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CafeteriasBenefits;

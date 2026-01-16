import React from 'react';
import { TrendingUp, Users, Award, Coffee } from 'lucide-react';

const CafeteriasBenefits = () => {
  return (
    <section id="cafeterias-benefits" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-4">
            Para cafeterías que se toman en serio el matcha
          </h2>
          <div className="w-24 h-px bg-matcha mx-auto mb-6"></div>
          <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
            Matcha premium japonés con el mismo rigor que aplicas a tu café de especialidad
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-cream p-8">
            <div className="w-16 h-16 bg-matcha-pale flex items-center justify-center mb-6">
              <TrendingUp className="text-matcha" size={32} />
            </div>
            <h3 className="font-serif text-xl text-charcoal mb-3">
              Precio competitivo
            </h3>
            <p className="text-charcoal-light">
              Aproximadamente 50% más barato que el mercado. Matcha premium 
              sin pagar precios premium.
            </p>
          </div>

          <div className="bg-cream p-8">
            <div className="w-16 h-16 bg-matcha-pale flex items-center justify-center mb-6">
              <Award className="text-matcha" size={32} />
            </div>
            <h3 className="font-serif text-xl text-charcoal mb-3">
              Matcha premium japonés
            </h3>
            <p className="text-charcoal-light">
              Primera cosecha de Shizuoka, Japón. Calidad auténtica para 
              cafeterías de especialidad.
            </p>
          </div>

          <div className="bg-cream p-8">
            <div className="w-16 h-16 bg-matcha-pale flex items-center justify-center mb-6">
              <Users className="text-matcha" size={32} />
            </div>
            <h3 className="font-serif text-xl text-charcoal mb-3">
              Asesoría de preparación
            </h3>
            <p className="text-charcoal-light">
              Guía profesional para tu equipo. Técnicas, recetas y consejos para 
              preparar el mejor matcha latte.
            </p>
          </div>

          <div className="bg-cream p-8">
            <div className="w-16 h-16 bg-matcha-pale flex items-center justify-center mb-6">
              <Coffee className="text-matcha" size={32} />
            </div>
            <h3 className="font-serif text-xl text-charcoal mb-3">
              Sin consumo mínimo
            </h3>
            <p className="text-charcoal-light">
              Empieza con el volumen que necesites. Sin compromisos ni 
              pedidos mínimos obligatorios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeteriasBenefits;


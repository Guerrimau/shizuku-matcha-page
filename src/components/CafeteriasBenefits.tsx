import React from 'react';
import { TrendingUp, Users, Award, Coffee } from 'lucide-react';

const CafeteriasBenefits = () => {
  return (
    <section id="cafeterias-benefits" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-4">
            ¿Por Qué Elegir Shizuku para tu Negocio?
          </h2>
          <div className="w-24 h-px bg-matcha mx-auto mb-6"></div>
          <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
            Beneficios que hacen la diferencia en tu cafetería
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-cream p-8">
            <div className="w-16 h-16 bg-matcha-pale flex items-center justify-center mb-6">
              <Award className="text-matcha" size={32} />
            </div>
            <h3 className="font-serif text-xl text-charcoal mb-3">
              Calidad Premium
            </h3>
            <p className="text-charcoal-light">
              Matcha de primera cosecha de Shizuoka, Japón. Diferenciate con 
              productos de la más alta calidad.
            </p>
          </div>

          <div className="bg-cream p-8">
            <div className="w-16 h-16 bg-matcha-pale flex items-center justify-center mb-6">
              <TrendingUp className="text-matcha" size={32} />
            </div>
            <h3 className="font-serif text-xl text-charcoal mb-3">
              Mayor Margen
            </h3>
            <p className="text-charcoal-light">
              Precios mayoristas competitivos que te permiten ofrecer matcha 
              premium con excelente rentabilidad.
            </p>
          </div>

          <div className="bg-cream p-8">
            <div className="w-16 h-16 bg-matcha-pale flex items-center justify-center mb-6">
              <Users className="text-matcha" size={32} />
            </div>
            <h3 className="font-serif text-xl text-charcoal mb-3">
              Soporte Especializado
            </h3>
            <p className="text-charcoal-light">
              Guía de preparación, recetas y tips para que tu equipo prepare 
              el mejor matcha.
            </p>
          </div>

          <div className="bg-cream p-8">
            <div className="w-16 h-16 bg-matcha-pale flex items-center justify-center mb-6">
              <Coffee className="text-matcha" size={32} />
            </div>
            <h3 className="font-serif text-xl text-charcoal mb-3">
              Versatilidad
            </h3>
            <p className="text-charcoal-light">
              Perfecto para lattes, bebidas frías, postres y más. Expande tu 
              menú con opciones premium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeteriasBenefits;


import React from 'react';
import { Instagram, Package } from 'lucide-react';

const CafeteriasProducts = () => {
  return (
    <section id="cafeterias-products" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-4">
            Matcha premium para bebidas
          </h2>
          <div className="w-24 h-px bg-matcha mx-auto mb-6"></div>
          <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
            Matcha japonés de primera cosecha, perfecto para lattes y bebidas de especialidad
          </p>
        </div>

        {/* Products Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Matcha */}
          <div className="bg-white p-8">
            <div className="aspect-square mb-6 bg-matcha-pale/10 flex items-center justify-center">
              <Package className="text-matcha" size={64} />
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-4">
              Matcha premium
            </h3>
            <ul className="space-y-2 text-charcoal-light mb-6">
              <li>• Primera cosecha de Shizuoka, Japón</li>
              <li>• Perfecto para lattes y bebidas</li>
              <li>• Sabor equilibrado y cremoso</li>
              <li>• Presentaciones comerciales</li>
            </ul>
            <p className="text-sm text-charcoal-light italic mb-4">
              Ideal para cafeterías de especialidad
            </p>
          </div>

          {/* Hojicha */}
          <div className="bg-white p-8">
            <div className="aspect-square mb-6 bg-matcha-pale/10 flex items-center justify-center">
              <Package className="text-matcha" size={64} />
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-4">
              Hojicha
            </h3>
            <ul className="space-y-2 text-charcoal-light mb-6">
              <li>• Presentación: 40g</li>
              <li>• Bajo en cafeína</li>
              <li>• Sabor suave y reconfortante</li>
              <li>• Perfecto para cualquier hora</li>
            </ul>
            <p className="text-sm text-charcoal-light italic mb-4">
              Ideal para menús de tarde y noche
            </p>
          </div>

          {/* Sencha */}
          <div className="bg-white p-8">
            <div className="aspect-square mb-6 bg-matcha-pale/10 flex items-center justify-center">
              <Package className="text-matcha" size={64} />
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-4">
              Sencha
            </h3>
            <ul className="space-y-2 text-charcoal-light mb-6">
              <li>• Presentación: 50g</li>
              <li>• Té verde premium</li>
              <li>• Rico en antioxidantes</li>
              <li>• Sabor fresco y vegetal</li>
            </ul>
            <p className="text-sm text-charcoal-light italic mb-4">
              Complementa tu oferta de tés
            </p>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="max-w-4xl mx-auto mt-16 bg-matcha-pale/20 p-8">
          <div className="text-center">
            <h3 className="font-serif text-2xl text-charcoal mb-4">
              Precio competitivo · Sin consumo mínimo
            </h3>
            <p className="text-charcoal-light mb-6">
              Aproximadamente 50% más barato que el mercado. Empieza con el volumen que necesites, 
              sin compromisos ni pedidos mínimos obligatorios. Contáctanos para conocer nuestros precios.
            </p>
            <a 
              href="https://www.instagram.com/shizukumatchastudio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-matcha text-white px-8 py-4 hover:bg-matcha-dark transition-colors"
            >
              <Instagram size={20} />
                Solicitar cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeteriasProducts;


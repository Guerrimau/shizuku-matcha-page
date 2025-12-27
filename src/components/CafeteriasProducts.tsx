import React from 'react';
import { Instagram, Package } from 'lucide-react';

const CafeteriasProducts = () => {
  return (
    <section id="cafeterias-products" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-4">
            Productos para tu Negocio
          </h2>
          <div className="w-24 h-px bg-matcha mx-auto mb-6"></div>
          <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
            Disponemos de presentaciones ideales para uso comercial
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
              Matcha Premium
            </h3>
            <ul className="space-y-2 text-charcoal-light mb-6">
              <li>• Presentaciones: 30g, 100g</li>
              <li>• Ideal para lattes y bebidas</li>
              <li>• Calidad ceremonial</li>
              <li>• Precios mayoristas</li>
            </ul>
            <p className="text-sm text-charcoal-light italic mb-4">
              Consulta disponibilidad de presentaciones más grandes
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

        {/* Wholesale Note */}
        <div className="max-w-4xl mx-auto mt-16 bg-matcha-pale/20 p-8">
          <div className="text-center">
            <h3 className="font-serif text-2xl text-charcoal mb-4">
              Precios Mayoristas Disponibles
            </h3>
            <p className="text-charcoal-light mb-6">
              Ofrecemos descuentos especiales para pedidos mayores y compras recurrentes. 
              Contáctanos para conocer nuestros precios mayoristas y opciones de volumen.
            </p>
            <a 
              href="https://www.instagram.com/shizukumatchastudio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-matcha text-white px-8 py-4 hover:bg-matcha-dark transition-colors"
            >
              <Instagram size={20} />
              Solicitar Cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeteriasProducts;


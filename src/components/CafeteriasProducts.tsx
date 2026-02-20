import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const products = [
  {
    name: 'Matcha Shizu no Midori',
    kanji: '抹茶',
    label: 'Primera cosecha · Okumidori',
    image: '/MATCHA/PRODUCT.jpg',
    specs: [
      { key: 'Cultivar', value: 'Okumidori' },
      { key: 'Origen', value: 'Shizuoka, Japón' },
      { key: 'Proceso', value: 'Tencha molido en piedra' },
      { key: 'Perfil', value: 'Umami moderado, amargor bajo' },
    ],
    note: 'Seleccionado para bebidas con leche. Alta solubilidad, color verde estable.',
  },
  {
    name: 'Hojicha',
    kanji: '焙じ茶',
    label: 'Tostado · Bajo en cafeína',
    image: '/HOJICHA/PRODUCT.jpg',
    specs: [
      { key: 'Tipo', value: 'Hojicha en polvo' },
      { key: 'Origen', value: 'Japón' },
      { key: 'Proceso', value: 'Tostado lento' },
      { key: 'Perfil', value: 'Ahumado suave, sin amargor' },
    ],
    note: 'Ideal para lattes de tarde y noche. Perfil diferenciador en la carta.',
  },
  {
    name: 'Sencha',
    kanji: '煎茶',
    label: 'Hoja entera · Premium',
    image: '/SENCHA/PRODUCT.jpg',
    specs: [
      { key: 'Tipo', value: 'Sencha loose leaf' },
      { key: 'Origen', value: 'Shizuoka, Japón' },
      { key: 'Proceso', value: 'Al vapor (Fukamushi)' },
      { key: 'Perfil', value: 'Fresco, vegetal, umami' },
    ],
    note: 'Complementa la oferta de tés calientes e iced teas.',
  },
];

const CafeteriasProducts = () => {
  return (
    <section id="cafeterias-products" className="section-padding bg-washi-bg">
      <div className="container-custom">

        <div className="text-center mb-16 lg:mb-20 space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
            Productos
          </p>
          <h2 className="studio-subheading text-washi-text">
            Tés japoneses de origen
          </h2>
          <div className="w-20 h-px bg-forest-green/30 mx-auto"></div>
          <p className="text-base md:text-lg text-charcoal-light max-w-xl mx-auto font-light leading-relaxed">
            Importados de Shizuoka. Presentaciones para volumen disponibles bajo pedido.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <div key={product.name} className="space-y-6">

              <div className="aspect-[4/5] relative overflow-hidden bg-cream">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest-green">
                    {product.label}
                  </p>
                  <h3 className="font-serif text-2xl text-washi-text font-light tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-xl text-charcoal-light/60 font-script">
                    {product.kanji}
                  </p>
                </div>

                <div className="space-y-2 border-t border-charcoal/5 pt-4">
                  {product.specs.map(({ key, value }) => (
                    <div key={key} className="flex justify-between items-baseline">
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-charcoal-light/60">
                        {key}
                      </span>
                      <span className="text-sm text-charcoal-light font-light">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-charcoal-light/80 italic border-l border-forest-green/30 pl-4 font-light">
                  {product.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-xl mx-auto mt-20 text-center space-y-6">
          <div className="w-20 h-px bg-forest-green/20 mx-auto"></div>
          <p className="text-base text-charcoal-light font-light leading-relaxed">
            Presentaciones para uso comercial y precios mayoristas disponibles por DM.
          </p>
          <a
            href="https://www.instagram.com/shizukumatchastudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-forest-green text-forest-green px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] hover:bg-forest-green hover:text-washi-bg transition-all duration-500"
          >
            <Instagram size={14} />
            solicitar cotización
          </a>
        </div>

      </div>
    </section>
  );
};

export default CafeteriasProducts;

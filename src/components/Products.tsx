'use client';

import React, { useState } from 'react';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<'matcha' | 'hojicha' | 'sencha'>('matcha');

  const productImages = {
    matcha: [
      {
        src: "/MatchaProducts.png",
        alt: "Productos de matcha Shizuku"
      },
      {
        src: "/MatchaLatter.png",
        alt: "Matcha latte preparado"
      },
      {
        src: "/MatchaPowder.png",
        alt: "Matcha en polvo premium de primera cosecha"
      },

    ],
    hojicha: [
      {
        src: "/HojichaBag.png",
        alt: "Bolsa de hojicha Shizuku"
      },
      {
        src: "/HojichaPowder.png",
        alt: "Hojicha en polvo"
      }
    ],
    sencha: [
      {
        src: "/TeaFarmTea.png",
        alt: "Sencha Shizuku"
      },
      {
        src: "/TeaPlant.png",
        alt: "Plantas de té"
      }
    ]
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImages = productImages[selectedProduct];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const products = {
    matcha: {
      name: "Matcha Shizu no Midori",
      subtitle: "抹茶",
      description: "Té verde molido en piedra. Origen Shizuoka, Japón. Cultivar Okumidori.",
      quality: "Calidad premium",
      use: "Formulación especializada para lattes y bebidas selectas",
      sizes: [
        {
          size: "30g",
          price: 350
        },
        {
          size: "100g",
          price: 950,
          badge: "Mejor valor"
        }
      ],
      characteristics: [
        "Cosecha estacional",
        "Notas verdes dulces",
        "Hierba fresca",
        "Toques cremosos"
      ],
      tasteProfile: [
        "Dulzor vegetal",
        "Umami moderado",
        "Amargor bajo",
        "Cuerpo medio a cremoso"
      ],
      features: [
        "Stone-ground • Molido en piedra",
        "Origen Shizuoka, Japón",
        "Cultivar Okumidori",
        "Guía de preparación incluida"
      ]
    },
    hojicha: {
      name: "Hojicha",
      description: "Té verde tostado japonés con sabor suave y aroma reconfortante",
      sizes: [
        {
          size: "40g"
        }
      ],
      features: [
        "Tostado tradicional japonés",
        "Bajo en cafeína, ideal para cualquier hora",
        "Sabor suave y reconfortante",
        "TODO: Agregar características específicas del producto"
      ]
    },
    sencha: {
      name: "Sencha",
      description: "Té verde japonés premium, el más popular en Japón",
      sizes: [
        {
          size: "50g"
        }
      ],
      features: [
        "Hojas de primera cosecha",
        "Rico en antioxidantes y L-teanina",
        "Sabor fresco y vegetal característico",
        "TODO: Agregar características específicas del producto"
      ]
    }
  };

  const currentProduct = products[selectedProduct];

  return (
    <section id="products" className="section-padding bg-washi-bg">
      <div className="container-custom">
        
        {/* Header with Elegant Typography */}
        <div className="text-center mb-16 lg:mb-20 space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
            Colección
          </p>
          <h2 className="studio-subheading text-washi-text">
            Tés japoneses de origen
          </h2>
          <div className="w-20 h-px bg-forest-green/30 mx-auto"></div>
          <p className="text-base md:text-lg text-charcoal-light max-w-xl mx-auto font-light leading-relaxed">
            Tés japoneses premium importados directamente de Shizuoka. 
            Matcha de primera cosecha, ideal para preparación tradicional y bebidas modernas.
          </p>
        </div>

        {/* Product Selector - Minimal Pills */}
        <div className="max-w-4xl mx-auto mb-16 lg:mb-20">
          <div className="flex flex-col items-center gap-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-light/70">
              Selecciona tu té
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedProduct('matcha');
                  setCurrentImageIndex(0);
                }}
                className={`relative px-8 py-3 transition-all duration-500 font-mono text-xs uppercase tracking-[0.15em] ${
                  selectedProduct === 'matcha'
                    ? 'bg-forest-green text-washi-bg'
                    : 'bg-transparent text-charcoal-light border border-charcoal/20 hover:border-forest-green/40'
                }`}
              >
                matcha
              </button>
              <button
                onClick={() => {
                  setSelectedProduct('hojicha');
                  setCurrentImageIndex(0);
                }}
                className={`px-8 py-3 transition-all duration-500 font-mono text-xs uppercase tracking-[0.15em] ${
                  selectedProduct === 'hojicha'
                    ? 'bg-forest-green text-washi-bg'
                    : 'bg-transparent text-charcoal-light border border-charcoal/20 hover:border-forest-green/40'
                }`}
              >
                hojicha
              </button>
              <button
                onClick={() => {
                  setSelectedProduct('sencha');
                  setCurrentImageIndex(0);
                }}
                className={`px-8 py-3 transition-all duration-500 font-mono text-xs uppercase tracking-[0.15em] ${
                  selectedProduct === 'sencha'
                    ? 'bg-forest-green text-washi-bg'
                    : 'bg-transparent text-charcoal-light border border-charcoal/20 hover:border-forest-green/40'
                }`}
              >
                sencha
              </button>
            </div>
          </div>
        </div>

        {/* Product Display - Clean Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Image Side */}
            <div className="space-y-8">
              <div className="relative">
                {/* Main Image Container */}
                <div className="aspect-[4/5] relative overflow-hidden bg-cream">
                  <img 
                    src={currentImages[currentImageIndex].src}
                    alt={currentImages[currentImageIndex].alt}
                    className="w-full h-full object-cover transition-opacity duration-700"
                  />

                  {/* Navigation Arrows */}
                  {currentImages.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-washi-bg/90 backdrop-blur-sm hover:bg-washi-bg flex items-center justify-center text-charcoal transition-all duration-300"
                        aria-label="Imagen anterior"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-washi-bg/90 backdrop-blur-sm hover:bg-washi-bg flex items-center justify-center text-charcoal transition-all duration-300"
                        aria-label="Siguiente imagen"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Navigation */}
                {currentImages.length > 1 && (
                  <div className="flex gap-4 mt-6 justify-center">
                    {currentImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-16 h-16 overflow-hidden transition-all duration-300 ${
                          currentImageIndex === index 
                            ? 'ring-1 ring-forest-green' 
                            : 'opacity-40 hover:opacity-70'
                        }`}
                      >
                        <img 
                          src={image.src}
                          alt={`Miniatura ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-10 pt-4">
              
              {/* Product Name */}
              <div className="space-y-3">
                <h3 className="text-4xl md:text-5xl font-serif text-washi-text font-light tracking-tight">
                  {currentProduct.name}
                </h3>
                {'subtitle' in currentProduct && (
                  <p className="text-2xl text-charcoal-light font-script">
                    {currentProduct.subtitle}
                  </p>
                )}
                {'quality' in currentProduct && (
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-forest-green">
                    {currentProduct.quality}
                  </p>
                )}
              </div>
              
              {/* Description */}
              <p className="text-base text-charcoal-light font-light leading-relaxed">
                {currentProduct.description}
              </p>
              
              {'use' in currentProduct && (
                <p className="text-sm text-charcoal-light/80 italic border-l border-forest-green/30 pl-6 font-light">
                  {currentProduct.use}
                </p>
              )}

              {/* Sizes */}
              <div className="space-y-4 pt-4">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-light/70">
                  Presentaciones
                </h4>
                <div className="space-y-3">
                  {currentProduct.sizes.map((sizeInfo, index) => {
                    const sizeNumber = sizeInfo.size.replace('g', '').replace('G', '');
                    return (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-charcoal/5">
                        <span className="font-mono text-sm tracking-wide text-washi-text">
                          Lata {sizeNumber} g
                        </span>
                        {'price' in sizeInfo && sizeInfo.price && (
                          <span className="text-base text-charcoal-light">
                            ${sizeInfo.price} MXN
                          </span>
                        )}
                        {'badge' in sizeInfo && sizeInfo.badge && (
                          <span className="font-mono text-[9px] uppercase tracking-wider bg-forest-green/10 text-forest-green px-3 py-1">
                            {sizeInfo.badge}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Characteristics */}
              {'characteristics' in currentProduct && (
                <div className="space-y-4">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-light/70">
                    Características
                  </h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {currentProduct.characteristics.map((item, index) => (
                      <li key={index} className="text-sm text-charcoal-light font-light">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Taste Profile */}
              {'tasteProfile' in currentProduct && (
                <div className="space-y-4">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-light/70">
                    Perfil de sabor
                  </h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {currentProduct.tasteProfile.map((item, index) => (
                      <li key={index} className="text-sm text-charcoal-light font-light">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="pt-8">
                <a 
                  href="https://www.instagram.com/shizukumatchastudio/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-forest-green text-forest-green px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] hover:bg-forest-green hover:text-washi-bg transition-all duration-500 w-full justify-center"
                >
                  <Instagram size={16} />
                  ordenar por dm
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid - Clean & Spacious */}
        <div className="mt-24 lg:mt-32 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div className="text-center space-y-4 py-8">
            <div className="text-3xl">📍</div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-washi-text">Pick-up</h4>
            <p className="text-sm text-charcoal-light font-light">Disponible toda la semana</p>
          </div>
          <div className="text-center space-y-4 py-8">
            <div className="text-3xl">💚</div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-washi-text">Guía incluida</h4>
            <p className="text-sm text-charcoal-light font-light">Soporte personalizado</p>
          </div>
          <div className="text-center space-y-4 py-8">
            <div className="text-3xl">✨</div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-washi-text">Primera cosecha</h4>
            <p className="text-sm text-charcoal-light font-light">Calidad premium</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

'use client';

import React, { useState } from 'react';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<'matcha' | 'hojicha' | 'sencha'>('matcha');

  const productImages = {
    matcha: [
      {
        src: "/MatchaProducts.png",
        alt: "Productos de Matcha Shizuku"
      },
      {
        src: "/MatchaLatter.png",
        alt: "Matcha latte preparado"
      },
      {
        src: "/MatchaPowder.png",
        alt: "Matcha en polvo"
      },

    ],
    hojicha: [
      {
        src: "/HojichaBag.png",
        alt: "Bolsa de Hojicha Shizuku"
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
      quality: "Calidad Premium",
      use: "Formulación especializada para lattes y bebidas selectas",
      sizes: [
        {
          size: "30g",
          price: 350
        },
        {
          size: "100g",
          price: 950,
          badge: "Mejor Valor"
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
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-4">
            Nuestros Productos
          </h2>
          <div className="w-24 h-px bg-matcha mx-auto mb-6"></div>
          <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
            Tés japoneses premium importados directamente de Shizuoka
          </p>
        </div>

        {/* Product Selector - Column layout */}
        <div className="max-w-6xl mx-auto mb-12 px-4">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-charcoal-light uppercase tracking-wide">
              Selecciona tu té
            </p>
            <div className="bg-matcha-pale/10 p-2 flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  setSelectedProduct('matcha');
                  setCurrentImageIndex(0);
                }}
                className={`relative px-6 sm:px-10 py-3 sm:py-4 transition-all font-medium text-base sm:text-lg w-full sm:w-auto ${
                  selectedProduct === 'matcha'
                    ? 'bg-matcha text-white shadow-medium'
                    : 'bg-white text-charcoal border-2 border-matcha/30 hover:bg-matcha-pale/30'
                }`}
              >
                Matcha
                {selectedProduct !== 'matcha' && (
                  <span className="absolute -top-2 -right-2 bg-matcha text-white text-xs px-1.5 py-0.5">
                    ⭐
                  </span>
                )}
              </button>
              <button
                onClick={() => {
                  setSelectedProduct('hojicha');
                  setCurrentImageIndex(0);
                }}
                className={`px-6 sm:px-10 py-3 sm:py-4 transition-all font-medium text-base sm:text-lg w-full sm:w-auto ${
                  selectedProduct === 'hojicha'
                    ? 'bg-matcha text-white shadow-medium'
                    : 'bg-white text-charcoal hover:bg-matcha-pale/30'
                }`}
              >
                Hojicha
              </button>
              <button
                onClick={() => {
                  setSelectedProduct('sencha');
                  setCurrentImageIndex(0);
                }}
                className={`px-6 sm:px-10 py-3 sm:py-4 transition-all font-medium text-base sm:text-lg w-full sm:w-auto ${
                  selectedProduct === 'sencha'
                    ? 'bg-matcha text-white shadow-medium'
                    : 'bg-white text-charcoal hover:bg-matcha-pale/30'
                }`}
              >
                Sencha
              </button>
            </div>
          </div>
        </div>

        {/* Single Product Card */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-cream overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              {/* Image Side */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="relative max-w-xl mx-auto">
                  {/* Main Image Container */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={currentImages[currentImageIndex].src}
                      alt={currentImages[currentImageIndex].alt}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    
                    {/* Premium Badge */}
                    <div className="absolute top-4 right-4 bg-matcha text-white text-sm px-3 py-1">
                      Premium
                    </div>

                    {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
                    {currentImages.length > 1 && (
                      <>
                        <button 
                          onClick={prevImage}
                          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white items-center justify-center text-charcoal transition-colors"
                          aria-label="Imagen anterior"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white items-center justify-center text-charcoal transition-colors"
                          aria-label="Siguiente imagen"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Navigation */}
                  {currentImages.length > 1 && (
                    <div className="flex gap-3 mt-6 justify-center">
                      {currentImages.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-20 h-20 overflow-hidden transition-all ${
                            currentImageIndex === index 
                              ? 'outline outline-2 outline-matcha' 
                              : 'opacity-60 hover:opacity-100'
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
              <div className="p-4 sm:p-6 lg:p-8 bg-matcha-pale/10 h-full">
                <div className="max-w-xl mx-auto">
                  <div className="mb-4">
                    <h3 className="text-3xl font-serif text-charcoal mb-1">
                      {currentProduct.name}
                    </h3>
                    {'subtitle' in currentProduct && (
                      <p className="text-xl text-charcoal-light mb-2 font-script">
                        {currentProduct.subtitle}
                      </p>
                    )}
                    {'quality' in currentProduct && (
                      <p className="text-sm font-medium text-matcha uppercase tracking-wide mb-2">
                        {currentProduct.quality}
                      </p>
                    )}
                  </div>
                  
                  <p className="text-charcoal-light mb-4">
                    {currentProduct.description}
                  </p>
                  
                  {'use' in currentProduct && (
                    <p className="text-sm text-charcoal-light italic mb-8 border-l-2 border-matcha pl-4">
                      {currentProduct.use}
                    </p>
                  )}

                  {/* Sizes */}
                  <div className="mb-6">
                    <h4 className="font-medium text-charcoal mb-3 text-sm uppercase tracking-wide">
                      Presentaciones
                    </h4>
                    <div className="flex flex-col gap-2 text-charcoal-light text-sm">
                      {currentProduct.sizes.map((sizeInfo, index) => {
                        const sizeNumber = sizeInfo.size.replace('g', '').replace('G', '');
                        return (
                          <div key={index} className="text-charcoal">
                            LATA {sizeNumber} G{'price' in sizeInfo && sizeInfo.price ? ` - $${sizeInfo.price} MXN` : ''}
                            {'badge' in sizeInfo && sizeInfo.badge && (
                              <span className="text-xs bg-gold text-white px-2 py-0.5 ml-2">
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
                    <div className="mb-6">
                      <h4 className="font-medium text-charcoal mb-3 text-sm uppercase tracking-wide">
                        Características
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-charcoal-light text-sm">
                        {currentProduct.characteristics.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-matcha mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Taste Profile */}
                  {'tasteProfile' in currentProduct && (
                    <div className="mb-6">
                      <h4 className="font-medium text-charcoal mb-3 text-sm uppercase tracking-wide">
                        Perfil de Sabor
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-charcoal-light text-sm">
                        {currentProduct.tasteProfile.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-matcha mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                 
                  {/* CTA y mensaje de entrega */}
                  <div >
                    <a 
                      href="https://www.instagram.com/shizukumatchastudio/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 bg-matcha text-white w-full py-3 sm:py-4 justify-center transition-colors text-sm sm:text-base md:text-lg hover:bg-matcha-dark px-3 sm:px-4"
                    >
                      <Instagram size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                      <span className="whitespace-nowrap text-xs sm:text-base md:text-lg">Ordenar por DM</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local Benefits */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-4">
          <div className="text-center p-6 bg-cream">
            <div className="text-2xl mb-2">📍</div>
            <h4 className="font-medium text-charcoal mb-1">Pick-up</h4>
            <p className="text-sm text-charcoal-light">Disponible toda la semana</p>
          </div>
          <div className="text-center p-6 bg-cream">
            <div className="text-2xl mb-2">💚</div>
            <h4 className="font-medium text-charcoal mb-1">Guía Incluida</h4>
            <p className="text-sm text-charcoal-light">Soporte personalizado</p>
          </div>
          <div className="text-center p-6 bg-cream">
            <div className="text-2xl mb-2">✨</div>
            <h4 className="font-medium text-charcoal mb-1">Primera Cosecha</h4>
            <p className="text-sm text-charcoal-light">Calidad Premium</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

'use client';

import React, { useState } from 'react';
import { Instagram, Scale, PackageCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<'matcha' | 'hojicha' | 'sencha'>('matcha');

  const productImages = {
    matcha: [
      {
        src: "/1.png",
        alt: "Matcha Shizuku empaque"
      },
      {
        src: "/5.png",
        alt: "Matcha preparado"
      },
      {
        src: "/6.png",
        alt: "Proceso de preparación"
      },
      {
        src: "/7.png",
        alt: "Matcha en polvo"
      }
    ],
    hojicha: [
      {
        src: "/1.png",
        alt: "Hojicha Shizuku"
      }
    ],
    sencha: [
      {
        src: "/1.png",
        alt: "Sencha Shizuku"
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
      name: "Matcha Premium",
      description: "Matcha premium de primera cosecha, directo de Shizuoka, Japón",
      sizes: [
        {
          size: "30g",
          portions: "10 bebidas aproximadas (3g por porción)",
          duration: "Ideal para 1-2 semanas de consumo diario",
          icon: Scale
        },
        {
          size: "100g",
          portions: "33 bebidas aproximadas (3g por porción)",
          duration: "Perfecto para 1 mes de consumo diario",
          icon: PackageCheck,
          badge: "Mejor Valor"
        }
      ],
      features: [
        "Primera cosecha de Shizuoka",
        "Grado premium",
        "Guía de preparación incluida",
        "Empaque resellable para mayor frescura"
      ]
    },
    hojicha: {
      name: "Hojicha",
      description: "Té verde tostado japonés con sabor suave y aroma reconfortante",
      sizes: [
        {
          size: "40g",
          portions: "TODO: Calcular porciones según uso recomendado",
          duration: "TODO: Duración estimada de consumo",
          icon: Scale
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
          size: "50g",
          portions: "TODO: Calcular porciones según uso recomendado",
          duration: "TODO: Duración estimada de consumo",
          icon: Scale
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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-4">
            Nuestros Productos
          </h2>
          <div className="w-24 h-px bg-matcha mx-auto mb-6"></div>
          <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
            Tés japoneses premium importados directamente de Shizuoka
          </p>
        </div>

        {/* Product Selector - More Prominent */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-charcoal-light uppercase tracking-wide">
              Selecciona tu té
            </p>
            <div className="bg-matcha-pale/10 p-2 inline-flex gap-2">
              <button
                onClick={() => {
                  setSelectedProduct('matcha');
                  setCurrentImageIndex(0);
                }}
                className={`relative px-10 py-4 transition-all font-medium text-lg ${
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
                className={`px-10 py-4 transition-all font-medium text-lg ${
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
                className={`px-10 py-4 transition-all font-medium text-lg ${
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
        <div className="max-w-6xl mx-auto">
          <div className="bg-cream">
            <div className="grid md:grid-cols-2 items-center">
              {/* Image Side */}
              <div className="p-8 lg:p-12">
                <div className="relative max-w-xl mx-auto">
                  {/* Main Image Container */}
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={currentImages[currentImageIndex].src}
                      alt={currentImages[currentImageIndex].alt}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    
                    {/* Premium Badge */}
                    <div className="absolute top-4 right-4 bg-matcha text-white text-sm px-3 py-1">
                      Premium
                    </div>

                    {/* Navigation Arrows */}
                    {currentImages.length > 1 && (
                      <>
                        <button 
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white flex items-center justify-center text-charcoal transition-colors"
                          aria-label="Imagen anterior"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white flex items-center justify-center text-charcoal transition-colors"
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
              <div className="p-8 lg:p-12 bg-matcha-pale/10 h-full">
                <div className="max-w-xl mx-auto">
                  <h3 className="text-3xl font-serif text-charcoal mb-4">
                    {currentProduct.name}
                  </h3>
                  <p className="text-charcoal-light mb-8">
                    {currentProduct.description}
                  </p>

                  {/* Sizes */}
                  <div className="space-y-6 mb-10">
                    {currentProduct.sizes.map((sizeInfo, index) => {
                      const IconComponent = sizeInfo.icon;
                      return (
                        <div key={index} className="flex items-start gap-6">
                          <div className="w-14 h-14 bg-white flex items-center justify-center flex-shrink-0">
                            <IconComponent className="text-matcha" size={28} />
                          </div>
                          <div>
                            <h4 className="font-medium text-charcoal text-lg flex items-center gap-2">
                              Bolsa {sizeInfo.size}
                              {'badge' in sizeInfo && sizeInfo.badge && (
                                <span className="text-xs bg-gold text-white px-2 py-1">
                                  {sizeInfo.badge}
                                </span>
                              )}
                            </h4>
                            <p className="text-charcoal-light">
                              • {sizeInfo.portions}
                              <br/>
                              • {sizeInfo.duration}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 text-charcoal-light mb-10">
                    {currentProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="text-matcha text-lg">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA y mensaje de entrega */}
                  <div className="space-y-4">
                    <a 
                      href="https://www.instagram.com/shizukumatchastudio/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-matcha text-white w-full py-4 justify-center transition-colors text-lg hover:bg-matcha-dark"
                    >
                      <Instagram size={24} />
                      Ordenar por DM
                    </a>
                    <div className="text-sm text-center text-charcoal-light space-y-2 p-4 bg-white">
                      <p className="font-medium text-matcha">Pick-up disponible:</p>
                      <p>• Coordina tu recogida por DM</p>
                      <p>• Disponible toda la semana</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local Benefits */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-6xl mx-auto">
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

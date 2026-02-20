"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { Tea } from "@/app/types";

const Products = ({ data }: { data: Tea[] }) => {
  const [selectedProduct, setSelectedProduct] = useState<number>(0);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentProduct = data[selectedProduct];
  const productImages = [ "PRODUCT.jpg","FULL.jpg", "BAG.jpg"]

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1,
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

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
            Tés japoneses de especialidad importados de Shizuoka. Matcha de
            primera cosecha, cultivar Okumidori. Perfil balanceado para lattes
            y preparación tradicional.
          </p>
        </div>

        {/* Product Selector - Minimal Pills */}
        <div className="max-w-4xl mx-auto mb-16 lg:mb-20">
          <div className="flex flex-col items-center gap-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-light/70">
              Selecciona tu té
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {data.map((tea, index) => {
                return (
                  <button
                    key={tea.id}
                    onClick={() => {
                      setSelectedProduct(index);
                      setCurrentImageIndex(0)
                    }}
                    className={`px-8 py-3 transition-all duration-500 font-mono text-xs uppercase tracking-[0.15em] ${
                      selectedProduct === index
                        ? "bg-forest-green text-washi-bg"
                        : "bg-transparent text-charcoal-light border border-charcoal/20 hover:border-forest-green/40"
                    }`}
                  >
                    {tea.NameShort}
                  </button>
                );
              })}
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
                  <Image
                    src={`/${currentProduct.NameShort.replace(" ", "").toUpperCase()}/${productImages[currentImageIndex]}`}
                    alt={currentProduct.Name}
                    fill
                    className="object-cover transition-opacity duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Navigation Arrows */}
                  {(
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
                {productImages.length > 1 && (
                  <div className="flex gap-4 mt-6 justify-center">
                    {productImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-16 h-16 overflow-hidden transition-all duration-300 ${
                          currentImageIndex === index
                            ? "ring-1 ring-forest-green"
                            : "opacity-40 hover:opacity-70"
                        }`}
                      >
                        <Image
                          src={`/${currentProduct.NameShort.replace(" ", "").toUpperCase()}/${image}`}
                          alt={`Miniatura ${index + 1}`}
                          width={64}
                          height={64}
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
                  {currentProduct.Name}
                </h3>
                {"Kanji" in currentProduct && (
                  <p className="text-2xl text-charcoal-light font-script">
                    {currentProduct.Kanji}
                  </p>
                )}
                {"Caption" in currentProduct && (
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-forest-green">
                    {currentProduct.Caption}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-base text-charcoal-light font-light leading-relaxed">
                {currentProduct.Description}
              </p>

              {"Quote" in currentProduct && (
                <p className="text-sm text-charcoal-light/80 italic border-l border-forest-green/30 pl-6 font-light">
                  {currentProduct.Quote}
                </p>
              )}

              {/* Sizes */}
              <div className="space-y-4 pt-4">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-light/70">
                  Presentaciones
                </h4>
                <div className="space-y-3">
                  {currentProduct.Presentations.map((sizeInfo, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between py-3 border-b border-charcoal/5"
                      >
                        <span className="font-mono text-sm tracking-wide text-washi-text">
                          {sizeInfo.Name} {sizeInfo.Amount} {sizeInfo.Type}
                        </span>
                        {"Price" in sizeInfo && sizeInfo.Price && (
                          <span className="text-base text-charcoal-light">
                            ${sizeInfo.Price} MXN
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Taste Profile */}
              {"Profile" in currentProduct && (
                <div className="space-y-4">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-light/70">
                    Perfil de sabor
                  </h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {currentProduct.Profile.map((item, index) => (
                      <li
                        key={index}
                        className="text-sm text-charcoal-light font-light"
                      >
                        {item.Content}
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
      </div>
    </section>
  );
};

export default Products;

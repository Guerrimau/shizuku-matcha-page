"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById("products");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const parallaxOffset = scrollY * 0.3;

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-washi-bg"
    >
      {/* Asymmetrical Grid Layout */}
      <div className="container-custom relative z-10 w-full py-24 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen md:min-h-0">
          {/* Left Side - Minimal Text Content */}
          <div className="order-2 md:order-1 space-y-10 md:space-y-12 max-w-lg">
            {/* Small Label */}
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
                Shizuoka, Japón → Hermosillo, Sonora
              </p>
              <div className="w-16 h-px bg-forest-green"></div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-light tracking-tight text-washi-text leading-[1.1]">
              Matcha de especialidad, directo del productor.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-charcoal-light leading-relaxed font-light max-w-md">
              Cultivar Okumidori, primera cosecha. Importado en lotes pequeños
              para garantizar frescura. El único matcha de especialidad en
              Hermosillo.
            </p>

            {/* Ghost CTA - Lowercase for modern studio feel */}
            <div className="pt-4">
              <button
                onClick={scrollToProducts}
                className="group inline-flex items-center gap-3 text-sm lowercase tracking-wide text-washi-text transition-all duration-500 hover:gap-5"
              >
                <span>Desde $350 MXN — Ordenar</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* Right Side - Product Lifestyle Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
              <Image
                src="/TEA_SESSION_EMPTY.jpg"
                alt="Preparación de matcha de especialidad con chasen"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  transform: `translateY(${parallaxOffset * 0.5}px)`,
                  willChange: "transform",
                }}
              />

              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-washi-bg/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-texture opacity-40 pointer-events-none"></div>
    </section>
  );
};

export default Hero;

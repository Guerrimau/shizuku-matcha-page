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
      {/* Asymmetrical Grid Layout — scaled for 1080p+ */}
      <div className="container-custom relative z-10 w-full py-24 md:py-0 px-6 md:px-10 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center min-h-screen md:min-h-0">
          {/* Left Side - Minimal Text Content */}
          <div className="order-2 md:order-1 space-y-6 md:space-y-8 lg:space-y-10 max-w-xl lg:max-w-2xl">
            {/* Tags — vibrant matcha green */}
            <div className="space-y-3">
              <p 
                className="font-mono text-[11px] lg:text-xs uppercase tracking-[0.25em]"
                style={{ color: '#4A7C59' }}
              >
                Matcha · Shizuoka · Okumidori
              </p>
              <div className="w-12 h-px" style={{ backgroundColor: 'rgba(74, 124, 89, 0.5)' }}></div>
            </div>

            {/* Main Headline — larger for 1080p */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium tracking-tight text-washi-text leading-[1.1]">
              El cuerpo del <span style={{ color: '#4A7C59' }}>Matcha Latte</span> perfecto.
            </h1>

            {/* Subheadline — scaled up */}
            <p 
              className="text-base md:text-lg lg:text-xl text-charcoal-light font-light max-w-lg lg:max-w-xl"
              style={{ lineHeight: '1.7' }}
            >
              Un <em className="font-normal">seasonal blend</em> de primera y segunda cosecha, 
              diseñado para que el perfil profundo y umami del Okumidori 
              corte la densidad de la leche sin perder su identidad. El único matcha de especialidad en Hermosillo.
            </p>

            {/* CTA — uppercase, vibrant matcha green */}
            <div className="pt-4 lg:pt-6">
              <button
                onClick={scrollToProducts}
                className="group inline-flex items-center gap-3 text-xs lg:text-sm uppercase tracking-[0.2em] transition-all duration-500 hover:gap-4 hover:opacity-80"
                style={{ color: '#4A7C59' }}
              >
                <span>Explorar cosecha actual</span>
                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* Right Side - Product Lifestyle Image — larger on desktop */}
          <div className="order-1 md:order-2 relative">
            <div className="relative aspect-[4/5] md:aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <Image
                src="/MATCHA_WISK.jpg"
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
              <div className="absolute inset-0 bg-gradient-to-t from-washi-bg/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default Hero;

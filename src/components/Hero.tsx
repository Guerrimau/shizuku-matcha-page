'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Instagram, MapPin } from 'lucide-react';

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Llamar una vez para inicializar
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const parallaxOffset = scrollY * 0.5;

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/MatchaMix.png" 
          alt="Matcha japonés premium en Hermosillo, Sonora - Preparación de matcha auténtico" 
          className="w-full h-full object-cover object-center transition-transform duration-0"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
            willChange: 'transform',
          }}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 md:from-charcoal/70 md:via-charcoal/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 md:from-charcoal/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 w-full py-12 md:py-0">
        <div className="max-w-2xl text-left space-y-6 md:space-y-8">
          {/* Local Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div className="inline-flex items-center gap-2 bg-gold text-charcoal px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium w-fit">
              Hermosillo
              <MapPin size={14} className="sm:w-4 sm:h-4" />
            </div>
            
            {/* Pick-up Badge */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/90">
              <span>Pick-up disponible toda la semana</span>
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight drop-shadow-lg">
            Matcha Japonés Premium en Hermosillo
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed max-w-xl drop-shadow-md">
            Descubre la autenticidad del matcha, hojicha y sencha japoneses de primera cosecha de Shizuoka. 
            A drop of beauty, a lifetime ritual.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
            <button 
              onClick={scrollToProducts}
              className="group bg-gold text-charcoal px-6 py-3 sm:px-8 sm:py-4 font-medium text-base sm:text-lg transition-all duration-300 hover:bg-gold-light flex items-center justify-center gap-2 sm:gap-3 shadow-lg w-full sm:w-auto"
            >
              Ver Productos
            </button>
            
            <a 
              href="https://www.instagram.com/shizukumatchastudio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-charcoal border-2 border-white px-6 py-3 sm:px-8 sm:py-4 font-medium text-base sm:text-lg transition-all duration-300 hover:bg-white/90 flex items-center justify-center gap-2 sm:gap-3 shadow-lg w-full sm:w-auto"
            >
              <Instagram size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Ordenar por Instagram</span>
              <span className="sm:hidden">Ordenar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

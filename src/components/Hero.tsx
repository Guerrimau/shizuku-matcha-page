'use client';

import React from 'react';
import { Instagram, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/MatchaMix.png" 
          alt="Matcha mezclado - Preparación de matcha" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 w-full">
        <div className="max-w-2xl text-left space-y-8">
          {/* Local Badge */}
          <div className="inline-flex items-center gap-2 bg-matcha text-white px-4 py-2 text-sm font-medium animate-fade-in">
            Hermosillo
            <MapPin size={16} />
          </div>
          
          {/* Pick-up Badge */}
          <div className="inline-flex items-center gap-2 text-sm text-white/90 ml-2 mb-4 animate-fade-in">
            <span>Pick-up disponible toda la semana</span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight animate-fade-in-up drop-shadow-lg">
            Matcha Japonés Premium en Hermosillo
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-xl animate-fade-in-up drop-shadow-md" style={{animationDelay: '0.2s'}}>
            Descubre la autenticidad del matcha, hojicha y sencha japoneses. 
            A drop of beauty, a lifetime ritual.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <button 
              onClick={scrollToProducts}
              className="group bg-matcha text-white px-8 py-4 font-medium text-lg transition-all duration-300 hover:bg-matcha-dark flex items-center justify-center gap-3 shadow-lg"
            >
              Ver Productos
            </button>
            
            <a 
              href="https://www.instagram.com/shizukumatchastudio/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-charcoal border-2 border-white px-8 py-4 font-medium text-lg transition-all duration-300 hover:bg-white/90 flex items-center justify-center gap-3 shadow-lg"
            >
              <Instagram size={20} />
              Ordenar por Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

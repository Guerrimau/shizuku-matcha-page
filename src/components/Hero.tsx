'use client';

import React from 'react';
import { Instagram, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-cream to-matcha-pale flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream/90 to-matcha-pale/90"></div>
      <div className="absolute inset-0">
        <img 
          src="/5.png" 
          alt="Matcha preparation" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/80 to-matcha-pale/80"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Local Badge */}
            <div className="inline-flex items-center gap-2 bg-matcha text-white px-4 py-2 text-sm font-medium animate-fade-in">
              <MapPin size={16} />
              Ahora en Hermosillo
            </div>
            
            {/* Pick-up Badge */}
            <div className="inline-flex items-center gap-2 text-sm text-charcoal-light mb-4 animate-fade-in">
              <span>Pick-up disponible toda la semana</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal leading-tight animate-fade-in-up">
              Tés Japoneses Premium en Hermosillo
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-charcoal-light leading-relaxed max-w-xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Descubre la autenticidad del matcha, hojicha y sencha japoneses. 
              Calidad premium, ahora disponible en tu ciudad.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <button 
                onClick={scrollToProducts}
                className="group bg-matcha text-white px-8 py-4 font-medium text-lg transition-all duration-300 hover:bg-matcha-dark flex items-center justify-center gap-3"
              >
                Ver Productos
              </button>
              
              <a 
                href="https://www.instagram.com/shizukumatchastudio/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-charcoal border-2 border-charcoal px-8 py-4 font-medium text-lg transition-all duration-300 hover:bg-charcoal hover:text-white flex items-center justify-center gap-3"
              >
                <Instagram size={20} />
                Ordenar por Instagram
              </a>
            </div>

            {/* Local Info */}
            <div className="text-sm text-charcoal-light">
              Pick-up en Hermosillo • Soporte local • Guía de preparación incluida
            </div>
          </div>

          {/* Right Content */}
          <div className="hidden md:block relative animate-fade-in-right">
            <div className="relative group">
              <img 
                src="/5.png" 
                alt="Matcha ceremony" 
                className="w-full h-auto object-cover shadow-medium hover:shadow-strong transition-all duration-500 transform group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent"></div>
              
              {/* Japanese Character */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gold-pale flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <span className="text-2xl text-gold font-script">抹茶</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

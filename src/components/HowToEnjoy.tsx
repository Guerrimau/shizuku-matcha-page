import React from 'react';
import { Droplets, Sparkles, Coffee } from 'lucide-react';

const HowToEnjoy = () => {
  return (
    <section id="how-to-enjoy" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-4">
            Cómo Disfrutar Tu Matcha
          </h2>
          <div className="w-24 h-px bg-matcha mx-auto mb-6"></div>
          <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
            Preparar el matcha perfecto es más fácil de lo que piensas
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-matcha-pale rounded-full flex items-center justify-center mx-auto mb-6">
              <Droplets className="text-matcha" size={24} />
            </div>
            <h3 className="text-xl font-serif text-charcoal mb-2">1. Tamizar</h3>
            <p className="text-charcoal-light">
              Coloca 2g de matcha (1 cucharadita) en tu taza usando el tamiz
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-matcha-pale rounded-full flex items-center justify-center mx-auto mb-6">
              <Coffee className="text-matcha" size={24} />
            </div>
            <h3 className="text-xl font-serif text-charcoal mb-2">2. Agua</h3>
            <p className="text-charcoal-light">
              Agrega 60ml de agua a 80°C y bate en forma de W
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-matcha-pale rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-matcha" size={24} />
            </div>
            <h3 className="text-xl font-serif text-charcoal mb-2">3. Disfrutar</h3>
            <p className="text-charcoal-light">
              ¡Listo! Disfruta tu matcha premium recién preparado
            </p>
          </div>
        </div>

        {/* Video or Image */}
        <div className="max-w-2xl mx-auto rounded-lg overflow-hidden shadow-medium">
          <div className="aspect-[4/3]">
            <img 
              src="/TeaWhisk.png" 
              alt="Preparación de Matcha con chasen" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Tips */}
        <div className="mt-12 text-center">
          <p className="text-charcoal-light">
            ¿Necesitas ayuda? Te guiamos en la preparación de tu primer matcha
          </p>
          <a 
            href="https://www.instagram.com/shizukumatchastudio/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-matcha hover:text-matcha-dark transition-colors mt-2"
          >
            Contáctanos por Instagram →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToEnjoy; 
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container-custom">
        <div className="text-center">
          {/* Brand */}
          <div className="mb-8">
            <h3 className="text-3xl font-serif mb-1">Shizuku</h3>
            <p className="text-sm font-sans font-normal text-gold-light tracking-wider uppercase">Matcha Studio</p>
            <div className="w-16 h-px bg-gold mx-auto mt-4"></div>
          </div>
          
          {/* Japanese Characters */}
          <div className="mb-8">
            <span className="text-5xl font-script text-gold opacity-80">抹茶</span>
          </div>
          
          {/* Description */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Llevando el arte del matcha japonés a Hermosillo, Sonora, una gota de belleza a la vez.
          </p>
          
          {/* Divider */}
          <div className="border-t border-charcoal-light pt-8 mt-8">
            <div className="flex items-center justify-center gap-2 text-gold-light">
              <span className="text-sm">© 2024 Hecho con</span>
              <Heart size={16} className="fill-current" />
              <span className="text-sm">tradición y matcha</span>
            </div>
            
            <p className="text-xs text-gray-400 mt-2">
              Shizuku Matcha Studio • Hermosillo, Sonora
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-washi-text text-washi-bg py-20 lg:py-24">
      <div className="container-custom">
        <div className="text-center space-y-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-4xl font-serif font-light tracking-tight">Shizuku</h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-washi-bg/70">
              Matcha Studio
            </p>
            <div className="w-20 h-px bg-forest-green-light/40 mx-auto"></div>
          </div>
          
          {/* Japanese Characters */}
          <div>
            <span className="text-5xl font-script text-washi-bg/60">抹茶</span>
          </div>
          
          {/* Description */}
          <p className="text-base text-washi-bg/80 max-w-xl mx-auto font-light leading-relaxed">
            Shizuku Matcha Studio. Shizuoka — México.
          </p>
          
          {/* Location Detail */}
          <div className="pt-8 space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-washi-bg/50">
              Despacho local en Hermosillo y envíos nacionales
            </p>
            <p className="font-mono text-[10px] tracking-[0.15em] text-washi-bg/40">
              29.07° N, 110.95° W
            </p>
          </div>
          
          {/* Divider */}
          <div className="border-t border-washi-bg/10 pt-12 mt-12 space-y-4">
            <div className="flex items-center justify-center gap-2 text-washi-bg/60">
              <span className="font-mono text-xs tracking-wide">© 2026</span>
              <Heart size={14} className="fill-current" />
              <span className="font-mono text-xs tracking-wide">Shizuoka → Hermosillo</span>
            </div>
            
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-washi-bg/40">
              Shizuku Matcha Studio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

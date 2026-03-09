import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-washi-text text-washi-bg">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            
            <div className="space-y-1">
              <h3 className="font-serif text-2xl tracking-tight">Shizuku Matcha Studio</h3>
              <p className="text-base text-washi-bg/70 font-light">
                Matcha de especialidad
              </p>
              <p className="text-base text-washi-bg/70 font-light">
                Hermosillo, Sonora
              </p>
            </div>
          </div>

          {/* Coordinates Column */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-washi-bg/50">
              Coordenadas
            </p>
            <div className="space-y-2">
              <p className="text-base text-washi-bg/80 font-light">
                29.0729° N, 110.9559° O
              </p>
              <p className="text-base text-washi-bg/80 font-light">
                Elevación: 210m SNM
              </p>
              <p className="text-base text-washi-bg/80 font-light">
                Zona Horaria: MST (UTC-7)
              </p>
            </div>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-washi-bg/50">
              Conecta
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/shizukumatchastudio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 border border-washi-bg/30 rounded-full flex items-center justify-center hover:border-washi-bg/60 hover:bg-washi-bg/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="mailto:hola@shizukumatchastudio.com"
                className="w-11 h-11 border border-washi-bg/30 rounded-full flex items-center justify-center hover:border-washi-bg/60 hover:bg-washi-bg/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-washi-bg/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-washi-bg/50">
            <p className="font-mono text-xs uppercase tracking-[0.15em]">
              © 2026 Shizuku Matcha Studio // Todos los derechos reservados
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.15em]">
              Shizuoka → Hermosillo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

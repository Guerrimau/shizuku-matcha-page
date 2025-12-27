import React from 'react';
import { Instagram } from 'lucide-react';

const MobileNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-shizuku-100 p-4 md:hidden z-50">
      <div className="flex gap-3">
        <button 
          onClick={() => window.open('https://instagram.com/shizukumatchastudio', '_blank')}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white py-3 font-medium hover:from-gold-600 hover:to-gold-700 transition-all duration-300 clip-path-button"
        >
          <Instagram size={18} />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
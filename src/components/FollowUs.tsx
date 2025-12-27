import React from 'react';
import { Instagram, Heart } from 'lucide-react';

const FollowUs = () => {
  return (
    <section className="py-20 bg-gradient-to-t from-shizuku-50 to-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-cursive font-medium text-shizuku-800 mb-4 italic">
            Sumérgete en el universo del matcha
          </h3>
          <p className="text-lg text-shizuku-600 max-w-2xl mx-auto mb-8 font-cursive italic">
            Recetas, rituales, tips y nuestra comunidad.<br />
            Síguenos en Instagram: @shizukumatchastudio
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            "https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=400",
            "https://images.pexels.com/photos/4226920/pexels-photo-4226920.jpeg?auto=compress&cs=tinysrgb&w=400",
            "https://images.pexels.com/photos/7937395/pexels-photo-7937395.jpeg?auto=compress&cs=tinysrgb&w=400"
          ].map((image, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden clip-path-image">
              <img 
                src={image}
                alt={`Matcha post ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <Heart className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => window.open('https://www.instagram.com/shizukumatchastudio/', '_blank')}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 font-medium hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 clip-path-button"
        >
          <Instagram size={20} />
          @shizukumatchastudio
        </button>
      </div>
    </section>
  );
};

export default FollowUs;
import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-cursive font-medium text-shizuku-800 mb-8 leading-tight italic">
          Nuestra Filosofía
        </h3>
        
        <div className="prose prose-lg text-shizuku-700 leading-relaxed max-w-3xl mx-auto">
          <p className="text-xl font-cursive mb-6 italic">
            En Shizuku Matcha Studio, honramos la ceremonia japonesa del matcha.
          </p>
          
          <p className="text-lg font-cursive mb-6 italic">
            Seleccionamos cuidadosamente cada variedad para ofrecerte una experiencia auténtica: 
            tranquila, ceremonial y profundamente sensorial.
          </p>
          
          <p className="text-lg font-cursive italic">
            Cada sorbo es una pausa, una conexión con siglos de tradición.
          </p>
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="w-3 h-3 bg-shizuku-600 mx-auto mb-2 transform rotate-45"></div>
              <p className="text-shizuku-800 font-medium text-sm font-cursive">Tradición</p>
            </div>
            <div className="w-16 h-px bg-gold-300"></div>
            <div className="text-center">
              <div className="w-3 h-3 bg-gold-500 mx-auto mb-2 transform rotate-45"></div>
              <p className="text-shizuku-800 font-medium text-sm font-cursive">Pureza</p>
            </div>
            <div className="w-16 h-px bg-gold-300"></div>
            <div className="text-center">
              <div className="w-3 h-3 bg-shizuku-600 mx-auto mb-2 transform rotate-45"></div>
              <p className="text-shizuku-800 font-medium text-sm font-cursive">Ceremonia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
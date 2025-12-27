import React from 'react';

const OurMatcha = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-shizuku-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-cursive font-medium text-shizuku-800 mb-4 italic">
            Nuestro Matcha
          </h3>
          <p className="text-lg text-shizuku-600 max-w-2xl mx-auto font-cursive italic">
            Cada variedad seleccionada con cuidado para ofrecerte la mejor experiencia
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/7262708/pexels-photo-7262708.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Matcha artesanal Shizuku"
              className="w-full h-96 object-cover shadow-2xl clip-path-image"
            />
            <div className="absolute inset-0 bg-shizuku-900 bg-opacity-10 clip-path-image"></div>
          </div>
          
          <div className="space-y-8">
            <div className="border-l-4 border-shizuku-500 pl-6 bg-white shadow-lg p-6 clip-path-card">
              <h4 className="text-2xl font-cursive font-medium text-shizuku-800 mb-3 italic">
                Premium Grade
              </h4>
              <p className="text-shizuku-600 leading-relaxed mb-4 font-cursive italic">
                Nuestro matcha de mayor pureza, ideal para rituales tradicionales.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Origen japonés", "Molido a piedra", "Color vibrante", "Sabor umami"].map((feature, index) => (
                  <span key={index} className="bg-shizuku-100 text-shizuku-700 px-3 py-1 text-sm font-cursive clip-path-tag">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="border-l-4 border-gold-500 pl-6 bg-white shadow-lg p-6 clip-path-card">
              <h4 className="text-2xl font-cursive font-medium text-shizuku-800 mb-3 italic">
                Premium Daily
              </h4>
              <p className="text-shizuku-600 leading-relaxed mb-4 font-cursive italic">
                Perfecto para tu ritual diario. Conserva la calidad y el sabor que distinguen a Shizuku.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Versátil", "Antioxidantes", "Sabor equilibrado"].map((feature, index) => (
                  <span key={index} className="bg-gold-100 text-shizuku-700 px-3 py-1 text-sm font-cursive clip-path-tag">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="border-l-4 border-shizuku-300 pl-6 bg-white shadow-lg p-6 clip-path-card">
              <h4 className="text-2xl font-cursive font-medium text-shizuku-800 mb-3 italic">
                Culinary Grade
              </h4>
              <p className="text-shizuku-600 leading-relaxed mb-4 font-cursive italic">
                Diseñado para dar un toque matcha a tus recetas dulces o saladas.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Color distintivo", "Sabor intenso", "Ideal para repostería"].map((feature, index) => (
                  <span key={index} className="bg-shizuku-100 text-shizuku-700 px-3 py-1 text-sm font-cursive clip-path-tag">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMatcha;
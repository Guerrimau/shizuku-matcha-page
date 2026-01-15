import React from 'react';

const Story = () => {
  return (
    <section id="story" className="section-padding bg-cream">
      <div className="container-custom">
        
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-16 lg:mb-20 space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
            Origen
          </p>
          <h2 className="studio-subheading text-washi-text">
            Nuestro viaje al origen
          </h2>
          <div className="w-20 h-px bg-forest-green/30 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-24">
          
          {/* Main Story Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            
            {/* Large Feature Image */}
            <div className="aspect-[4/3] md:aspect-auto md:h-[60vh] relative bg-cream">
              <img 
                src="/ShiShizuoka.png"
                alt="Matcha Shizu no Midori en Shizuoka, Japón" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-washi-bg/95 backdrop-blur-sm p-8 max-w-sm">
                <p className="font-serif text-xl text-washi-text font-light tracking-tight mb-1">Shizuoka, Japón</p>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-charcoal-light">El origen de nuestro matcha premium</p>
              </div>
            </div>

            {/* Story Content */}
            <div className="bg-forest-green-pale/20 p-8 lg:p-16 flex items-center">
              <div className="space-y-8 max-w-lg">
                <p className="text-charcoal-light font-light leading-relaxed text-base">
                  Nuestro viaje nos llevó a Shizuoka, la región más importante de Japón 
                  para la producción de té. Visitamos las plantaciones donde se cultiva 
                  nuestro matcha y conocimos a los maestros que preservan esta tradición milenaria.
                </p>
                <p className="text-charcoal-light font-light leading-relaxed text-base">
                  Hoy traemos esa misma pasión y respeto por el matcha a Hermosillo, 
                  compartiendo no solo el té, sino toda una tradición milenaria.
                </p>
              </div>
            </div>
          </div>

          {/* Experiences Gallery - Clean Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="aspect-square bg-washi-bg overflow-hidden">
                <img 
                  src="/TeaFarm.png"
                  alt="Plantación de té en Shizuoka" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-2xl text-washi-text font-light tracking-tight">
                  Las plantaciones
                </h3>
                <p className="text-sm text-charcoal-light font-light leading-relaxed">
                  Visitamos las plantaciones de Shizuoka donde se cultiva nuestro matcha, 
                  conociendo el cuidado y dedicación que requiere cada hoja.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-square bg-washi-bg overflow-hidden">
                <img 
                  src="/TeaWhisk.png"
                  alt="Preparación tradicional de matcha con chasen" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-2xl text-washi-text font-light tracking-tight">
                  La ceremonia
                </h3>
                <p className="text-sm text-charcoal-light font-light leading-relaxed">
                  Aprendimos que cada movimiento en la preparación es un arte 
                  refinado durante siglos de tradición.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-square bg-washi-bg overflow-hidden">
                <img 
                  src="/TeaPlant.png"
                  alt="Plantas de té en Shizuoka" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-2xl text-washi-text font-light tracking-tight">
                  El origen
                </h3>
                <p className="text-sm text-charcoal-light font-light leading-relaxed">
                  Shizuoka, donde cada grano de matcha cuenta la historia de 
                  una región dedicada a la excelencia del té.
                </p>
              </div>
            </div>
          </div>

          {/* Final Quote */}
          <div className="max-w-2xl mx-auto text-center pt-12">
            <p className="text-2xl md:text-3xl font-serif text-washi-text italic font-light leading-relaxed">
              "En cada taza de Shizuku, servimos la esencia de lo que 
              descubrimos en Japón"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;

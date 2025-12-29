import React from 'react';

const Story = () => {
  return (
    <section id="story" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal">
            Nuestro Viaje al Origen
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Story Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Large Feature Image */}
            <div className="aspect-[4/3] aspect-auto h-[60vh] relative">
              <img 
                src="/ShiShizuoka.png"
                alt="Matcha Shizu no Midori en Shizuoka, Japón" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-white p-6">
                <p className="font-serif text-lg text-charcoal">Shizuoka, Japón</p>
                <p className="text-sm text-charcoal-light">El origen de nuestro matcha premium</p>
              </div>
            </div>

            {/* Story Content */}
            <div className="bg-matcha-pale/10 p-6 lg:p-8 flex items-center">
              <div className="space-y-6">
                <p className="text-charcoal-light leading-relaxed">
                  Nuestro viaje nos llevó a Shizuoka, la región más importante de Japón 
                  para la producción de té. Visitamos las plantaciones donde se cultiva 
                  nuestro matcha y conocimos a los maestros que preservan esta tradición milenaria.
                </p>
                <p className="text-charcoal-light leading-relaxed">
                  Hoy traemos esa misma pasión y respeto por el matcha a Hermosillo, 
                  compartiendo no solo el té, sino toda una tradición milenaria.
                </p>
              </div>
            </div>
          </div>

          {/* Experiences Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-px">
            <div className="bg-white">
              <div className="aspect-square">
                <img 
                  src="/TeaFarm.png"
                  alt="Plantación de té en Shizuoka" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-charcoal mb-2">
                  Las Plantaciones
                </h3>
                <p className="text-sm text-charcoal-light">
                  Visitamos las plantaciones de Shizuoka donde se cultiva nuestro matcha, 
                  conociendo el cuidado y dedicación que requiere cada hoja.
                </p>
              </div>
            </div>

            <div className="bg-white">
              <div className="aspect-square">
                <img 
                  src="/TeaWhisk.png"
                  alt="Preparación tradicional de matcha con chasen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-charcoal mb-2">
                  La Ceremonia
                </h3>
                <p className="text-sm text-charcoal-light">
                  Aprendimos que cada movimiento en la preparación es un arte 
                  refinado durante siglos de tradición.
                </p>
              </div>
            </div>

            <div className="bg-white">
              <div className="aspect-square">
                <img 
                  src="/TeaPlant.png"
                  alt="Plantas de té en Shizuoka" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-charcoal mb-2">
                  El Origen
                </h3>
                <p className="text-sm text-charcoal-light">
                  Shizuoka, donde cada grano de matcha cuenta la historia de 
                  una región dedicada a la excelencia del té.
                </p>
              </div>
            </div>
          </div>

          {/* Final Quote */}
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-2xl font-serif text-charcoal italic">
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
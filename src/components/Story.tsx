import React from 'react';

const Story = () => {
  return (
    <section id="story" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal">
            Nuestro Viaje al Origen
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Story Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Large Feature Image */}
            <div className="h-[70vh] relative">
              <img 
                src="/ruta-a-tu-foto-templo"
                alt="Nuestro viaje a Japón" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-white p-6">
                <p className="font-serif text-lg text-charcoal">Kioto, Japón</p>
                <p className="text-sm text-charcoal-light">El corazón de la tradición del té</p>
              </div>
            </div>

            {/* Story Content */}
            <div className="bg-matcha-pale/10 p-12 flex items-center">
              <div className="space-y-6">
                <p className="text-charcoal-light leading-relaxed">
                  Nuestro viaje nos llevó a las antiguas calles de Kioto, donde cada 
                  rincón respira la tradición del té. Visitamos templos centenarios y 
                  casas de té donde el tiempo parece detenerse.
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
                  src="/ruta-a-tu-foto-cafeteria"
                  alt="Cafetería tradicional" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-charcoal mb-2">
                  Cafeterías Centenarias
                </h3>
                <p className="text-sm text-charcoal-light">
                  Descubrimos lugares donde el matcha se ha servido de la misma 
                  manera por generaciones, cada taza cuenta una historia.
                </p>
              </div>
            </div>

            <div className="bg-white">
              <div className="aspect-square">
                <img 
                  src="/ruta-a-tu-foto-chawan"
                  alt="Chawan antiguo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-charcoal mb-2">
                  Arte y Tradición
                </h3>
                <p className="text-sm text-charcoal-light">
                  Nos maravillamos con chawanes de cientos de años, cada uno 
                  una obra de arte que ha servido a generaciones de maestros del té.
                </p>
              </div>
            </div>

            <div className="bg-white">
              <div className="aspect-square">
                <img 
                  src="/ruta-a-tu-foto-preparacion"
                  alt="Preparación tradicional" 
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
          </div>

          {/* Final Quote */}
          <div className="mt-24 max-w-2xl mx-auto text-center">
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
import Image from 'next/image';

const preparations = [
  {
    image: '/MATCHA_BOWL.jpg',
    alt: 'Matcha tradicional preparado en chawan con chasen — Shizuku Matcha Studio',
    eyebrow: 'Tradicional',
    title: 'La forma más pura',
    description: 'Sin leche, sin endulzantes. El perfil completo del Okumidori en taza.',
    params: [
      '1 tsp matcha (2g)',
      '70ml agua a 70°C',
      'Bate en zig-zag 20 seg',
    ],
  },
  {
    image: '/MATCHA_LATTE_HOT.jpg',
    alt: 'Matcha latte caliente preparado con Shizu no Midori — Shizuku Matcha Studio',
    eyebrow: 'Matcha Latte',
    title: 'Cremoso y reconfortante',
    description: 'El Okumidori fue desarrollado para esto. Su astringencia resalta incluso con leche.',
    params: [
      '1.5 tsp matcha (3g)',
      '30ml agua a 70°C para disolver',
      '150ml leche vegetal caliente',
    ],
  },
  {
    image: '/MATCHA_LATTE.jpg',
    alt: 'Matcha latte frío para el clima de Hermosillo — Shizuku Matcha Studio',
    eyebrow: 'Matcha Frío',
    title: 'Refrescante para Hermosillo',
    description: 'La mejor forma de tomarlo en temporada de calor. Color vibrante, sabor limpio.',
    params: [
      '1.5 tsp matcha (3g)',
      '30ml agua a 70°C para disolver',
      '150ml leche fría + hielo',
    ],
  },
];

const HowToPrepare = () => {
  return (
    <section id="preparacion" className="section-padding bg-washi-bg">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
            Preparación
          </p>
          <h2 className="studio-subheading text-washi-text">
            Tres formas de tomarlo
          </h2>
          <div className="w-20 h-px bg-forest-green/30 mx-auto"></div>
          <p className="text-base md:text-lg text-charcoal-light max-w-xl mx-auto font-light leading-relaxed">
            El mismo matcha, tres experiencias distintas.
          </p>
        </div>

        {/* Cards grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 lg:gap-12">
          {preparations.map(({ image, alt, eyebrow, title, description, params }) => (
            <div key={eyebrow} className="space-y-6">

              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden bg-cream">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest-green">
                    {eyebrow}
                  </p>
                  <h3 className="font-serif text-2xl text-washi-text font-light tracking-tight">
                    {title}
                  </h3>
                  <p className="text-sm text-charcoal-light font-light leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Technical params */}
                <div className="border-t border-charcoal/10 pt-4 space-y-2">
                  {params.map((param) => (
                    <p key={param} className="font-mono text-[11px] tracking-wide text-charcoal-light/70">
                      · {param}
                    </p>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowToPrepare;

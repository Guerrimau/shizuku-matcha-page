import Image from 'next/image';

const cards = [
  {
    eyebrow: 'Origen',
    title: 'El término no existe en Japón',
    description:
      'Fue creado por marcas occidentales para justificar precios. En Japón simplemente existe matcha de mayor o menor calidad.',
  },
  {
    eyebrow: 'Perfil',
    title: 'Diseñado para tu latte',
    description:
      'Okumidori tiene el nivel correcto de astringencia para resaltar mezclado con leche, no desaparecer como un matcha sin cuerpo.',
  },
  {
    eyebrow: 'Trazabilidad',
    title: 'Un productor, un origen',
    description:
      'Conocemos el nombre del productor, la granja, el cultivar y la cosecha. No reempacamos ni mezclamos lotes.',
  },
];

const Transparency = () => {
  return (
    <section id="transparencia" className="section-padding bg-cream">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
            Transparencia
          </p>
          <h2 className="studio-subheading text-washi-text">
            Nosotros no vendemos matcha ceremonial
          </h2>
          <div className="w-20 h-px bg-forest-green/30 mx-auto"></div>
          <p className="text-base md:text-lg text-charcoal-light max-w-xl mx-auto font-light leading-relaxed">
            El término no existe en Japón. Aquí te explicamos por qué eso importa.
          </p>
        </div>

        {/* Main layout — image + text */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 mb-20 lg:mb-28">

          {/* Image */}
          <div className="aspect-[3/4] md:aspect-auto md:min-h-[520px] relative overflow-hidden bg-washi-bg">
            <Image
              src="/EKI.jpg"
              alt="Estación de Shizuoka, Japón — origen del matcha Shizuku"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Copy */}
          <div className="bg-washi-bg p-10 lg:p-16 flex items-center">
            <div className="space-y-8 max-w-lg">

              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest-green">
                Shizu no Midori — Cultivar Okumidori
              </p>

              <div className="space-y-6 text-charcoal-light font-light leading-relaxed text-base">
                <p>
                  El término "matcha ceremonial" fue creado por marcas occidentales para justificar precios más altos. En Japón no existe esa categoría — solo existe matcha de mayor o menor calidad, definida por el cultivar, la cosecha y el productor.
                </p>
                <p>
                  Nuestro Shizu no Midori es cultivar Okumidori, primera cosecha, de un solo productor en Shizuoka. Tiene el nivel correcto de astringencia para resaltar en preparaciones con leche sin desaparecer. No es "ceremonial". Es mejor que eso: es trazable.
                </p>
              </div>

              <div className="border-t border-charcoal/10 pt-8 grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest-green">Cultivar</p>
                  <p className="text-sm text-charcoal-light font-light">Okumidori</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest-green">Cosecha</p>
                  <p className="text-sm text-charcoal-light font-light">Primera (Ichibancha)</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest-green">Origen</p>
                  <p className="text-sm text-charcoal-light font-light">Shizuoka, Japón</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest-green">Proceso</p>
                  <p className="text-sm text-charcoal-light font-light">Molido en piedra</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Three cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-px bg-charcoal/5">
          {cards.map(({ eyebrow, title, description }) => (
            <div key={eyebrow} className="bg-cream p-8 lg:p-10 space-y-4">
              <div className="w-full h-px bg-forest-green/30 mb-6"></div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest-green">
                {eyebrow}
              </p>
              <h3 className="font-serif text-xl lg:text-2xl text-washi-text font-light tracking-tight">
                {title}
              </h3>
              <p className="text-sm text-charcoal-light font-light leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Transparency;

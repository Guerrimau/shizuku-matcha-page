type Testimonial = {
  text: string;
  name: string;
  city: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Lo tengo en mi cafetería y se ha vendido bastante bien. La diferencia con otros matchas que he probado es notable.",
    name: "Andrea R.",
    city: "Hermosillo, Son.",
  },
  {
    text: "Me encantó. Es el mejor matcha que he probado — y ya he probado varios. El sabor es completamente diferente.",
    name: "Paulina M.",
    city: "Hermosillo, Son.",
  },
  {
    text: "Ya es mi matcha de todos los días. Por fin una buena opción local, sin tener que importarlo yo misma.",
    name: "Sofía L.",
    city: "Hermosillo, Son.",
  },
];

const Testimonials = () => {
  return (
    <section id="clientes" className="section-padding bg-forest-green-pale/30">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
            Clientes
          </p>
          <h2 className="studio-subheading text-washi-text">
            Lo que dicen quienes ya lo prueban
          </h2>
          <div className="w-20 h-px bg-forest-green/30 mx-auto"></div>
        </div>

        {/* Testimonials grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map(({ text, name, city }) => (
            <div key={name} className="space-y-6">
              <p className="font-serif text-xl lg:text-2xl text-washi-text font-light italic leading-relaxed min-h-[130px]">
                {text}
              </p>
              <div className="border-t border-charcoal/10 pt-6 space-y-1">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-washi-text">
                  {name}
                </p>
                <p className="text-base text-charcoal-light/70 font-light">
                  {city}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="max-w-6xl mx-auto mt-16 lg:mt-20 pt-10 border-t border-charcoal/10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-charcoal-light/60">
            Hermosillo, Son. — Pedidos locales y envíos a todo México
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

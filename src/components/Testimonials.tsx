type Testimonial = {
  text: string;
  name: string;
  city: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Llevaba meses tomando matcha de otra marca. La diferencia en el latte es inmediata — este tiene cuerpo real, no desaparece con la leche.",
    name: "Andrea R.",
    city: "Hermosillo, Son.",
  },
  {
    text: "Por fin entendí por qué el matcha que compraba antes sabía aguado. El Okumidori tiene un verde que no había visto en ningún otro.",
    name: "Carlos M.",
    city: "Hermosillo, Son.",
  },
  {
    text: "Lo usamos en la cafetería y nuestros clientes lo notan. Es el único matcha que hemos encontrado que rinde bien en cold latte sin perder color.",
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
              <p className="font-serif text-xl lg:text-2xl text-washi-text font-light italic leading-relaxed">
                {text}
              </p>
              <div className="border-t border-charcoal/10 pt-6 space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-washi-text">
                  {name}
                </p>
                <p className="text-sm text-charcoal-light/60 font-light">
                  {city}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="max-w-6xl mx-auto mt-16 lg:mt-20 pt-10 border-t border-charcoal/10 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-light/50">
            Hermosillo, Son. — Pedidos locales y envíos a todo México
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

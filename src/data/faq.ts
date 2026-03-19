export interface FAQItem {
  question: string;
  answer: string;
}

export const homeFaqItems: FAQItem[] = [
  {
    question: "¿Dónde comprar matcha en Hermosillo?",
    answer:
      "Shizuku Matcha Studio es la tienda de matcha de especialidad en Hermosillo, Sonora. Importamos directamente de Shizuoka, Japón, sin intermediarios. Puedes comprar en línea con envío a todo México o visitarnos en nuestros talleres presenciales en Hermosillo.",
  },
  {
    question: "¿Qué es el matcha y en qué se diferencia del té verde?",
    answer:
      "El matcha es té verde japonés molido en polvo fino. A diferencia del té verde de hoja suelta donde se infusiona y descarta la hoja, con el matcha consumes la hoja entera disuelta en agua. Las plantas se sombrean 20+ días antes de la cosecha, aumentando la clorofila y L-teanina.",
  },
  {
    question: '¿Qué significa matcha "ceremonial" o "grado ceremonial"?',
    answer:
      '"Matcha ceremonial" es un término de marketing occidental sin definición estandarizada. En Japón, el matcha se clasifica por competencias regionales y calidad del tencha. Lo que realmente importa es el cultivar, tiempo de sombreado, cosecha y proceso de molido.',
  },
  {
    question: "¿Cuáles son los beneficios del matcha?",
    answer:
      "El matcha contiene L-teanina, que promueve concentración calmada sin nerviosismo. Al consumir la hoja entera, obtienes más antioxidantes que con té infusionado. La cafeína se libera gradualmente, proporcionando energía sostenida durante 4-6 horas.",
  },
  {
    question: "¿Qué es el hojicha?",
    answer:
      "El hojicha es té verde japonés tostado con notas de caramelo, nuez y madera. Tiene menos cafeína que el matcha (~20mg vs 70mg por taza), ideal para tardes o noches. Ofrecemos hojicha en polvo para lattes y de hoja suelta para infusión.",
  },
];

export const b2bFaqItems: FAQItem[] = [
  {
    question: "¿Por qué matcha de especialidad y no ceremonial?",
    answer:
      'En Japón, el matcha se clasifica por perfil sensorial y uso, no por categorías comerciales. Nuestro Shizu no Midori es un blend estacional de Shizuoka seleccionado específicamente para bebidas con leche: alta solubilidad, color verde estable y un perfil de umami moderado que destaca sobre la base láctea sin amargor excesivo.',
  },
  {
    question: "¿Por qué funciona mejor en lattes que otros matchas?",
    answer:
      "El cultivar Okumidori tiene alta solubilidad y un perfil balanceado que mantiene estructura en preparaciones con leche. El amargor bajo y el umami moderado permiten que el matcha resalte sin dominar. El color se mantiene verde intenso incluso con leche entera.",
  },
  {
    question: "¿Por qué el precio es más accesible?",
    answer:
      "Importamos directamente de productores en Shizuoka, sin intermediarios ni distribuidores. Eso nos permite ofrecer matcha de especialidad a un precio significativamente menor que el promedio del mercado, manteniendo la misma calidad de origen.",
  },
  {
    question: "¿Cuál es el pedido mínimo?",
    answer:
      "No hay pedido mínimo. Puedes comenzar con una presentación para probar y escalar según tus necesidades. Ofrecemos precios por volumen para pedidos recurrentes.",
  },
];

export interface Workshop {
  id: string;
  name: string;
  kanji?: string;
  subtitle: string;
  description: string;
  duration: string;
  price: number;
  includes: string[];
  skillLevel: "Principiante" | "Intermedio" | "Todos los niveles";
  date: string;
  time: string;
  spotsAvailable?: number;
  image?: string;
}

export const workshops: Workshop[] = [
  {
    id: "taller-matcha-abril-2026",
    name: "Taller de Matcha",
    kanji: "抹茶",
    subtitle: "Origen, historia y degustación",
    description:
      "Descubre el origen y la historia del matcha, té verde japonés. Degustarás usucha, matcha latte y hojicha latte, además de hacer tu propia preparación con utensilios originarios de Japón.",
    duration: "90 minutos",
    price: 650,
    includes: [
      "Matcha Shizu no Midori en Latte",
      "Matcha para Usucha de alto grado",
      "Hojicha en Latte",
      "Guía impresa",
      "Degustación",
    ],
    skillLevel: "Principiante",
    date: "2026-01-01",
    time: "11:00",
    spotsAvailable: 6,
    image: "/workshops/matcha_workshop.jpg",
  },
  {
    id: "taller-matcha-marzo-2026",
    name: "Taller de Matcha",
    kanji: "抹茶",
    subtitle: "Origen, historia y degustación",
    description:
      "Descubre el origen y la historia del matcha, té verde japonés. Degustarás usucha, matcha latte y hojicha latte, además de hacer tu propia preparación con utensilios originarios de Japón.",
    duration: "90 minutos",
    price: 650,
    includes: [
      "Matcha Shizu no Midori en Latte",
      "Matcha para Usucha de alto grado",
      "Hojicha en Latte",
      "Guía impresa",
      "Degustación",
    ],
    skillLevel: "Principiante",
    date: "2026-03-08",
    time: "11:00",
    image: "/workshops/workshop.jpg",
  },
];

export const workshopsFaqItems = [
  {
    question: "¿Necesito experiencia previa para los talleres?",
    answer:
      "No, nuestros talleres están diseñados para principiantes. Comenzamos desde cero y avanzamos paso a paso. Solo necesitas curiosidad y ganas de aprender.",
  },
  {
    question: "¿Cómo reservo mi lugar?",
    answer:
      "Escríbenos por Instagram (@shizukumatchastudio) con el taller que te interesa y la fecha. Te confirmamos disponibilidad y te enviamos los datos de pago.",
  },
  {
    question: "¿Puedo reservar un taller privado?",
    answer:
      "Sí, ofrecemos talleres privados para grupos de 2 a 8 personas. Escríbenos para coordinar fecha, horario y precio especial.",
  },
];

export function getNextWorkshop(): Workshop | undefined {
  const now = new Date();
  return workshops
    .filter((w) => new Date(w.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];
}

export function getPastWorkshops(): Workshop[] {
  const now = new Date();
  return workshops
    .filter((w) => new Date(w.date) <= now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function formatWorkshopDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export function formatShortDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

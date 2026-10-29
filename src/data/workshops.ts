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
  attendees?: number;
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
    question: "¿Dónde tomar un curso de matcha en Hermosillo?",
    answer:
      "En Shizuku Matcha Studio damos un taller presencial de introducción al matcha en Hermosillo, con cata de matcha de distintas regiones y cultivares de Japón, matcha latte, hojicha y otros tés japoneses.",
  },
  {
    question: "¿Los talleres son privados o en grupo?",
    answer:
      "Ambos. Trabajamos con grupos pequeños y también con talleres privados para amigos, parejas, familias o equipos.",
  },
  {
    question: "¿Qué matchas se prueban en el taller?",
    answer:
      "Probamos matcha de diferentes regiones de Japón y de distintos cultivares, para que compares sabor, dulzor y cuerpo. El selecto puede variar según la fecha.",
  },
  {
    question: "¿Sirve si quiero abrir una barra o una cafetería?",
    answer:
      "Sí. Aprenderás la base de preparación, la mezcla con leche y cómo reconocer un buen matcha, que es el punto de partida antes de armar un menú.",
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

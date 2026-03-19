export type TeaSpecs = {
  type: "tea";
  tipo: string;
  origen: string;
  proceso: string;
  perfil: string;
};

export type AccessorySpecs = {
  type: "accessory";
  material: string;
  capacidad: string;
  origen: string;
  artesano: string;
};

export type KitSpecs = {
  type: "kit";
  contenido: string;
  nivel: string;
  teIncluido: string;
  perfil: string;
};

export type ProductSpecs = TeaSpecs | AccessorySpecs | KitSpecs;

export type FilterCategory =
  | "all"
  | "matcha"
  | "polvo"
  | "hoja"
  | "accesorios";

export interface FlavorProfile {
  dulzor: number;
  umami: number;
  amargor: number;
  cuerpo: number;
}

export interface BrewingGuide {
  temperatura: string;
  ratio: string;
  tiempo: string;
}

export interface ProductSize {
  label: string;
  price: number;
  sku: string;
}

export interface Product {
  slug: string;
  name: string;
  kanji: string;
  subtitle: string;
  labels: string[];
  image: string;
  images: string[];
  category: FilterCategory;
  sizes: ProductSize[];
  specs: ProductSpecs;
  flavorProfile?: FlavorProfile;
  brewingGuide?: BrewingGuide;
  description: string;
}

export const products: Product[] = [
  {
    slug: "matcha_okumidori_seasonal_blend_latte_30g",
    name: "Matcha | Shizu no Midori",
    kanji: "抹茶",
    subtitle: "Cultivar Okumidori · Grado Latte",
    labels: ["CULTIVAR OKUMIDORI", "SEASONAL BLEND"],
    image: "/MATCHA/PRODUCT.jpg",
    images: [
      "/MATCHA/PRODUCT.jpg",
      "/MATCHA/BOT_FIELD.jpg",
      "/MATCHA/SIDE.jpg",
      "/MATCHA/UNPACK.jpg",
      "/MATCHA_LATTE_HOT.jpg",
    ],
    category: "matcha",
    sizes: [
      { label: "30g", price: 350, sku: "MATCHA-30" },
      { label: "100g", price: 950, sku: "MATCHA-100" },
    ],
    specs: {
      type: "tea",
      tipo: "Té verde molido en piedra",
      origen: "Shizuoka, Japón",
      proceso: "Tencha molido en piedra",
      perfil: "Dulzor vegetal, umami moderado, amargor bajo",
    },
    flavorProfile: {
      dulzor: 6,
      umami: 6,
      amargor: 3,
      cuerpo: 7,
    },
    brewingGuide: {
      temperatura: "55-65°C",
      ratio: "3-4g : 40ml",
      tiempo: "Batir 15-20s",
    },
    description:
      "Nuestro matcha insignia, cultivar Okumidori de cosecha estacional. Notas verdes dulces, hierba fresca y toques cremosos. Formulación especializada para lattes y bebidas selectas. Cuerpo medio a cremoso.",
  },
  {
    slug: "hojicha_polvo_roasted_latte_30g",
    name: "Hojicha | Shizu no Homura",
    kanji: "焙じ茶",
    subtitle: "Tostado · Bajo en Cafeína",
    labels: ["TOSTADO", "BAJO EN CAFEÍNA"],
    image: "/HOJICHA/PRODUCT.jpg",
    images: ["/HOJICHA/BAG.jpg", "/HOJICHA/PRODUCT.jpg", "/HOJICHA/FULL.jpg"],
    category: "polvo",
    sizes: [{ label: "40g", price: 310, sku: "HOJICHA-P-40" }],
    specs: {
      type: "tea",
      tipo: "Hojicha en polvo",
      origen: "Shizuoka, Japón",
      proceso: "Tueste medio",
      perfil: "Cacao ligero, Almendrado, Cuerpo Medio",
    },
    flavorProfile: {
      dulzor: 6,
      umami: 4,
      amargor: 1,
      cuerpo: 7,
    },
    brewingGuide: {
      temperatura: "70°C",
      ratio: "6g : 50ml",
      tiempo: "Batir 50-60s",
    },
    description:
      "Hojicha molido en polvo fino, perfecto para lattes. El proceso de tostado reduce naturalmente la cafeína, ideal para las tardes o noches. Notas de caramelo y madera.",
  },
  {
    slug: "te_verde_sencha_shizuoka_50g",
    name: "Sencha | Shizu no Izumi",
    kanji: "煎茶",
    subtitle: "Hoja Suelta · Primera Cosecha",
    labels: ["HOJA SUELTA", "PRIMERA COSECHA"],
    image: "/SENCHA/PRODUCT.jpg",
    images: [
      "/SENCHA/BAG.jpg",
      "/SENCHA/PRODUCT.jpg",
      "/SENCHA/FULL.jpg",
      "/sencha_loose_leaf.jpg",
      "/SENCHA/BREW.jpg"
    ],
    category: "hoja",
    sizes: [{ label: "50g", price: 390, sku: "SENCHA-50" }],
    specs: {
      type: "tea",
      tipo: "Té verde de hoja",
      origen: "Shizuoka, Japón",
      proceso: "Al vapor (Fukamushi)",
      perfil: "Fresco, vegetal, umami",
    },
    flavorProfile: {
      dulzor: 6,
      umami: 9,
      amargor: 4,
      cuerpo: 6,
    },
    brewingGuide: {
      temperatura: "70-75°C",
      ratio: "4g : 200ml",
      tiempo: "60-90 segundos",
    },
    description:
      "Sencha de vapor profundo (fukamushi) de Shizuoka. El proceso extendido de vaporizado crea un té más intenso y turbio con un sabor más completo y menos astringencia.",
  },
  {
    slug: "hojicha_roasted_shizuoka_loose_leaf_50g",
    name: "Hojicha Hoja Suelta",
    kanji: "焙じ茶",
    subtitle: "Hoja Suelta · Bajo en Cafeína",
    labels: ["HOJA SUELTA", "BAJO EN CAFEÍNA"],
    image: "/HOJICHA_LOOSE/PRODUCT.jpg",
    images: [
      "/HOJICHA_LOOSE/PRODUCT.jpg",
      "/HOJICHA_LOOSE/FULL.jpg",
      "/HOJICHA_LOOSE/BREW.jpg",
      "/HOJICHA_LOOSE/BAG.jpg",
    ],
    category: "hoja",
    sizes: [{ label: "100g", price: 420, sku: "HOJICHA-L-100" }],
    specs: {
      type: "tea",
      tipo: "Té verde tostado",
      origen: "Shizuoka, Japón",
      proceso: "Té verde tostado",
      perfil: "Amaderado, reconfortante",
    },
    flavorProfile: {
      dulzor: 5,
      umami: 3,
      amargor: 1,
      cuerpo: 6,
    },
    brewingGuide: {
      temperatura: "90-95°C",
      ratio: "4g : 200ml",
      tiempo: "30-60 segundos",
    },
    description:
      "Hojas de té verde tostadas a alta temperatura, creando un perfil de sabor único con notas de nuez y caramelo. Naturalmente bajo en cafeína, perfecto para cualquier momento del día.",
  },
  {
    slug: "kit_matcha_ritual_starter_chasen_chawan",
    name: "Kit Mini de Preparación de Matcha",
    kanji: "茶道具セット",
    subtitle: "Kit Completo · Ritual Start",
    labels: ["KITS", "RITUAL START"],
    image: "/products/mini-kit-matcha/FULL.jpg",
    images: [
      "/products/mini-kit-matcha/FULL.jpg",
      "/products/mini-kit-matcha/CHASEN.jpg",
      "/products/mini-kit-matcha/CHASHAKU.jpg",
      "/products/mini-kit-matcha/BOWLS.jpg",
    ],
    category: "accesorios",
    sizes: [{ label: "Kit Completo", price: 1300, sku: "KIT-MATCHA-MINI-01" }],
    specs: {
      type: "kit",
      contenido: "Chasen, Chashaku, Chawan, Matcha 30g",
      nivel: "Principiante / Intermedio",
      teIncluido: "Matcha Shizu no Midori",
      perfil: "Práctica Completa de Ritual",
    },
    description:
      "Todo lo necesario para comenzar tu práctica de matcha. Incluye un chasen (batidor de bambú) de 80 puntas, chashaku (cuchara de bambú), chawan (tazón de cerámica) y 30g de nuestro matcha Shizu no Midori.",
  },
  {
    slug: "kyusu_verde_tokoname_ceramica_300ml",
    name: "Kyusu Verde",
    kanji: "急須",
    subtitle: "Cerámica Artesanal · 300ml",
    labels: ["CERÁMICA", "ARTESANAL"],
    image: "/products/kyusu/PRODUCT.jpg",
    images: [
      "/products/kyusu/PRODUCT.jpg",
      "/products/kyusu/SIDE.jpg",
      "/products/kyusu/TOP.jpg",
      "/products/kyusu/FULL.jpg",
    ],
    category: "accesorios",
    sizes: [{ label: "300ml", price: 600, sku: "KYUSU-V-300" }],
    specs: {
      type: "accessory",
      material: "Cerámica esmaltada",
      capacidad: "300ml",
      origen: "Tokoname, Japón",
      artesano: "Taller tradicional",
    },
    description:
      "Kyusu tradicional japonés con mango lateral, diseñado para una infusión óptima de té verde. El filtro integrado de cerámica permite un flujo suave mientras retiene las hojas. Acabado verde celadón que complementa cualquier espacio.",
  },
  {
    slug: "chawan_negro_ceramica_matcha_bowl",
    name: "Chawan Negro",
    kanji: "茶碗",
    subtitle: "Cerámica Artesanal · Matcha Bowl",
    labels: ["CERÁMICA", "ARTESANAL"],
    image: "/products/black_chawan/PRODUCT.jpg",
    images: [
      "/products/black_chawan/PRODUCT.jpg",
      "/products/black_chawan/TOP.jpg",
      "/products/black_chawan/FULL.jpg",
    ],
    category: "accesorios",
    sizes: [{ label: "Estándar", price: 680, sku: "CHAWAN-B-01" }],
    specs: {
      type: "accessory",
      material: "Cerámica esmaltada",
      capacidad: "400ml",
      origen: "Mino, Japón",
      artesano: "Taller tradicional",
    },
    description:
      "Chawan tradicional para la preparación de matcha. Su forma amplia y redondeada permite un batido óptimo con el chasen. El esmalte negro profundo realza el color verde vibrante del matcha, creando un contraste visual elegante.",
  },
  {
    slug: "chasen_joho_bambu_batidor_matcha",
    name: "Jōho Chasen Japonés",
    kanji: "茶筅",
    subtitle: "Bambú · Hecho a Mano",
    labels: ["BAMBÚ", "ARTESANAL"],
    image: "/products/chasen/PRODUCT.jpg",
    images: [
      "/products/chasen/PRODUCT.jpg",
      "/products/chasen/FULL.jpg",
      "/products/chasen/CLOSE.jpg",
    ],
    category: "accesorios",
    sizes: [{ label: "80 puntas", price: 480, sku: "CHASEN-J-80" }],
    specs: {
      type: "accessory",
      material: "Bambú natural",
      capacidad: "80 puntas",
      origen: "Nara, Japón",
      artesano: "Artesano tradicional",
    },
    description:
      "Batidor de bambú hecho a mano bajo estándares japoneses. Filamentos calibrados para una espuma fina y estable. Esencial para lograr la textura cremosa característica del matcha bien preparado.",
  },
  {
    slug: "chashaku_bambu_dosificador_matcha",
    name: "Chashaku",
    kanji: "茶杓",
    subtitle: "Bambú · Dosificador Tradicional",
    labels: ["BAMBÚ", "ARTESANAL"],
    image: "/products/chashaku/PRODUCT.jpg",
    images: [
      "/products/chashaku/PRODUCT.jpg",
      "/products/chashaku/FULL.jpg",
      "/products/chashaku/TOP.jpg",
    ],
    category: "accesorios",
    sizes: [{ label: "Estándar", price: 180, sku: "CHASHAKU-01" }],
    specs: {
      type: "accessory",
      material: "Bambú natural",
      capacidad: "~1g por medida",
      origen: "Nara, Japón",
      artesano: "Artesano tradicional",
    },
    description:
      "Dosificador tradicional de matcha. Control exacto del gramaje y del balance en cada preparación. Cada chashaku está tallado a mano, siguiendo técnicas centenarias de la ceremonia del té.",
  },
];

export const filters: { id: FilterCategory; label: string }[] = [
  { id: "all", label: "Todo" },
  { id: "matcha", label: "Matcha" },
  { id: "polvo", label: "Té en Polvo" },
  { id: "hoja", label: "Té Hoja Suelta" },
  { id: "accesorios", label: "Accesorios" },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: FilterCategory): Product[] {
  if (category === "all") return products;
  // "polvo" includes both matcha and polvo products
  if (category === "polvo") {
    return products.filter((p) => p.category === "matcha" || p.category === "polvo");
  }
  return products.filter((p) => p.category === category);
}

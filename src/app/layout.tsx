import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Space_Mono,
  Noto_Serif_JP,
} from "next/font/google";
import "@/app/globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shizukumatchastudio.com"),

  title: {
    default: "Shizuku Matcha Studio — Matcha de Shizuoka directo a Hermosillo",
    template: "%s | Shizuku Matcha Studio",
  },

  description:
    "Matcha de especialidad en Hermosillo, importado de Shizuoka, Japón. Cultivar Okumidori. Pickup local y envíos a todo México. Desde $350 MXN.",

  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Shizuku Matcha Studio",
    url: "https://shizukumatchastudio.com",
    title: "Shizuku Matcha Studio — Matcha de Shizuoka directo a Hermosillo",
    description: "Matcha de especialidad en Hermosillo, importado de Shizuoka, Japón. Cultivar Okumidori. Pickup local y envíos a todo México. Desde $350 MXN.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Matcha latte caliente preparado con Shizu no Midori — Shizuku Matcha Studio Hermosillo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${inter.variable} ${spaceMono.variable} ${notoSerifJP.variable}`}
    >
      <head>
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />

        {/* Schema: LocalBusiness — mejora presencia en Google Maps y búsquedas locales */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "Store"],
              "@id": "https://shizukumatchastudio.com/#business",
              name: "Shizuku Matcha Studio",
              description:
                "Matcha de especialidad importado directo del productor en Shizuoka, Japón. Cultivar Okumidori, blend estacional. Envíos a Hermosillo y todo México.",
              url: "https://shizukumatchastudio.com",
              // TODO: agrega tu número real de Google Business Profile
              // telephone: "+52-662-XXX-XXXX",
              email: "hola@shizukumatchastudio.com",
              image: "https://shizukumatchastudio.com/TEA_SESSION_EMPTY.jpg",
              logo: "https://shizukumatchastudio.com/favicons/favicon-512x512.png",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hermosillo",
                addressRegion: "Sonora",
                addressCountry: "MX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 29.0729, // número, no string
                longitude: -110.9559, // número, no string
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Hermosillo",
                },
                {
                  "@type": "Country",
                  name: "México",
                },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "14:00",
                },
              ],
              sameAs: ["https://www.instagram.com/shizukumatchastudio/"],
            }),
          }}
        />

        {/* Schema: Product — activa rich snippets con precio en resultados de búsqueda */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Matcha Shizu no Midori",
              description:
                "Matcha de especialidad. Cultivar Okumidori de Shizuoka, Japón. Blend estacional, molido en piedra. Perfil balanceado para lattes y preparación tradicional.",
              image: "https://shizukumatchastudio.com/MATCHA/BAG.jpg",
              brand: {
                "@type": "Brand",
                name: "Shizuku Matcha Studio",
              },
              // Dos offers = ambas presentaciones visibles en Google Shopping
              offers: [
                {
                  "@type": "Offer",
                  name: "Lata 30g",
                  price: "350",
                  priceCurrency: "MXN",
                  availability: "https://schema.org/InStock",
                  url: "https://shizukumatchastudio.com",
                  seller: {
                    "@type": "LocalBusiness",
                    // @id vincula este producto con el LocalBusiness de arriba
                    "@id": "https://shizukumatchastudio.com/#business",
                  },
                },
                {
                  "@type": "Offer",
                  name: "Lata 100g",
                  price: "950",
                  priceCurrency: "MXN",
                  availability: "https://schema.org/InStock",
                  url: "https://shizukumatchastudio.com",
                  seller: {
                    "@type": "LocalBusiness",
                    "@id": "https://shizukumatchastudio.com/#business",
                  },
                },
              ],
              additionalProperty: [
                {
                  "@type": "PropertyValue",
                  name: "Origen",
                  value: "Shizuoka, Japón",
                },
                {
                  "@type": "PropertyValue",
                  name: "Cultivar",
                  value: "Okumidori",
                },
                {
                  "@type": "PropertyValue",
                  name: "Cosecha",
                  value: "Blend estacional (primera y segunda cosecha)",
                },
                {
                  "@type": "PropertyValue",
                  name: "Proceso",
                  value: "Molido en piedra",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans bg-washi-bg text-washi-text">{children}</body>
    </html>
  );
}

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
  // Resuelve todas las URLs relativas en el sitio
  metadataBase: new URL("https://shizukumatchastudio.com"),

  // Template para subpáginas: "Matcha para Cafeterías | Shizuku Matcha Studio"
  title: {
    default: "Shizuku Matcha Studio — Matcha de Shizuoka directo a Hermosillo",
    template: "%s | Shizuku Matcha Studio",
  },

  // Default description for pages that don't override
  description:
    "Matcha de especialidad importado directo de Shizuoka, Japón. Cultivar Okumidori con trazabilidad completa. Talleres y venta en Hermosillo, Sonora.",

  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://shizukumatchastudio.com",
    siteName: "Shizuku Matcha Studio",
    images: {
      url: "https://shizukumatchastudio.com/thumbnail.jpg",
      width: 800,
      height: 800,
      alt: "Matcha latte preparado con Shizu no Midori - Matcha Hermosillo",
    },
  },

  // Reglas de indexación globales
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
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />

        {/* RSS Feed — Faster indexing for Google and Bing */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Shizuku Matcha Studio Blog"
          href="https://shizukumatchastudio.com/feed.xml"
        />

        {/* Schema: Organization — Brand identity signal for AI engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://shizukumatchastudio.com/#organization",
              name: "Shizuku Matcha Studio",
              url: "https://shizukumatchastudio.com",
              logo: "https://shizukumatchastudio.com/favicons/favicon-512x512.png",
              description:
                "Matcha de especialidad importado directo de Shizuoka, Japón. Cultivar Okumidori con trazabilidad completa. Talleres y venta en Hermosillo, Sonora.",
              foundingDate: "2025",
              sameAs: ["https://www.instagram.com/shizukumatchastudio/"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "hola@shizukumatchastudio.com",
                url: "https://shizukumatchastudio.com",
                availableLanguage: ["Spanish"],
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
            }),
          }}
        />

        {/* Schema: WebSite — Enables sitelinks search box in Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://shizukumatchastudio.com/#website",
              name: "Shizuku Matcha Studio",
              url: "https://shizukumatchastudio.com",
              description:
                "Tienda de matcha de especialidad en Hermosillo, Sonora. Importación directa de Shizuoka, Japón.",
              inLanguage: "es-MX",
              publisher: {
                "@id": "https://shizukumatchastudio.com/#organization",
              },
            }),
          }}
        />

        {/* Schema: LocalBusiness — mejora presencia en Google Maps y búsquedas locales */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "Store", "TeaHouse"],
              "@id": "https://shizukumatchastudio.com/#business",
              name: "Shizuku Matcha Studio",
              alternateName: "Matcha Hermosillo",
              description:
                "Tienda de matcha de especialidad en Hermosillo, Sonora. Matcha importado directo de Shizuoka, Japón. Cultivar Okumidori con trazabilidad completa. Talleres de preparación de matcha, venta de matcha ceremonial, hojicha, sencha, y accesorios japoneses. Envíos a todo México.",
              url: "https://shizukumatchastudio.com",
              email: "hola@shizukumatchastudio.com",
              currenciesAccepted: "MXN",
              paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
              knowsLanguage: ["es", "en"],
              keywords:
                "matcha hermosillo, matcha sonora, te verde hermosillo, matcha ceremonial mexico, comprar matcha, matcha latte hermosillo",
              image: [
                "https://shizukumatchastudio.com/matcha-latte-hermosillo-1-1.jpg",
                "https://shizukumatchastudio.com/og.jpg",
                "https://shizukumatchastudio.com/TEA_SESSION_EMPTY_LOW.jpg",
              ],
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
                latitude: 29.0729,
                longitude: -110.9559,
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
                  opens: "10:00",
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
      </head>
      <body className="font-sans bg-washi-bg text-washi-text">{children}</body>
    </html>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  partnerCafes,
  partnerCafesMapEmbedUrl,
  type PartnerCafe,
} from "@/data/cafes";

const pageTitle = "Dónde Tomar Matcha en Hermosillo | Shizuku Matcha Studio";
const pageDescription =
  "Cafeterías en Hermosillo que sirven matcha de Shizuku Matcha Studio, importado de Shizuoka, Japón. Encuentra tu bebida favorita cerca de ti.";
const pageUrl = "https://shizukumatchastudio.com/donde-tomar-matcha-hermosillo";
const instagramDmUrl = "https://ig.me/m/shizukumatchastudio";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    locale: "es_MX",
    siteName: "Shizuku Matcha Studio",
    images: [
      {
        url: "https://shizukumatchastudio.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Matcha de Shizuku Matcha Studio en cafeterías de Hermosillo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["https://shizukumatchastudio.com/og.jpg"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

const buttonClassName =
  "group inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-charcoal text-washi-bg px-8 py-4 font-mono text-[11px] uppercase rounded-sm hover:bg-charcoal-light transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-washi-bg";

const textLinkClassName =
  "font-mono text-[10px] uppercase text-neutral-600 hover:text-neutral-900 underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm";

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

function CafeCard({ cafe }: { cafe: PartnerCafe }) {
  const instagramUrl = `https://www.instagram.com/${cafe.instagramHandle.replace("@", "")}/`;

  return (
    <article className="bg-white border border-neutral-200/60 rounded-sm p-6">
      <h3
        className="font-serif text-xl text-neutral-900"
        style={{ letterSpacing: "-0.01em" }}
      >
        {cafe.name}
      </h3>
      <p
        className="font-mono text-[9px] uppercase text-neutral-500 mt-1"
        style={{ letterSpacing: "0.15em" }}
      >
        {cafe.neighborhood}
      </p>
      <p className="text-base text-neutral-600 font-light leading-relaxed mt-4">
        {cafe.recommendedDrink}
      </p>
      <div className="flex flex-wrap gap-6 mt-6" style={{ letterSpacing: "0.1em" }}>
        <a href={instagramUrl} target="_blank" rel="noopener" className={textLinkClassName}>
          {cafe.instagramHandle}
        </a>
        <a href={cafe.mapsUrl} target="_blank" rel="noopener" className={textLinkClassName}>
          Cómo llegar
        </a>
      </div>
    </article>
  );
}

export default function DondeTomarMatchaPage() {
  const hasCafes = partnerCafes.length > 0;

  return (
    <div className="min-h-screen bg-washi-bg">
      <Navbar />

      <main>
        <section
          aria-labelledby="where-heading"
          className="py-20 md:py-28 border-b border-neutral-200/40"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p
                className="font-mono text-[9px] uppercase text-neutral-500"
                style={{ letterSpacing: "0.25em" }}
              >
                Hermosillo, Sonora
              </p>
              <h1
                id="where-heading"
                className="mt-4 text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-serif font-light text-neutral-900 leading-[1.1]"
                style={{ letterSpacing: "-0.02em" }}
              >
                Dónde tomar matcha en Hermosillo
              </h1>
              <p className="mt-6 text-base md:text-lg text-neutral-600 font-light leading-[1.8]">
                Suministramos matcha de especialidad a cafeterías de Sonora.
                Estos son los lugares donde puedes probar nuestro matcha
                preparado por baristas, además de nuestros talleres y envíos.
              </p>
            </div>

            {hasCafes ? (
              <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partnerCafes.map((cafe) => (
                  <CafeCard key={cafe.name} cafe={cafe} />
                ))}
              </div>
            ) : (
              <div className="mt-12 max-w-3xl border-t border-neutral-200 pt-8">
                <p className="text-base md:text-lg text-neutral-700 font-light leading-[1.8]">
                  Pronto publicaremos las cafeterías aliadas. ¿Tienes una
                  cafetería? Escríbenos por Instagram.
                </p>
                <a
                  href={instagramDmUrl}
                  target="_blank"
                  rel="noopener"
                  className={`${buttonClassName} mt-6`}
                  style={{ letterSpacing: "0.08em" }}
                >
                  <Instagram size={16} strokeWidth={1.5} aria-hidden="true" />
                  Escríbenos por Instagram
                  <ArrowIcon />
                </a>
              </div>
            )}

            {hasCafes && partnerCafesMapEmbedUrl && (
              <div className="mt-12 aspect-[16/9] bg-neutral-100 rounded-sm overflow-hidden">
                <iframe
                  src={partnerCafesMapEmbedUrl}
                  title="Mapa de cafeterías en Hermosillo con matcha de Shizuku Matcha Studio"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>
            )}
          </div>
        </section>

        <section
          aria-labelledby="cafe-heading"
          className="py-20 md:py-28 border-b border-neutral-200/40"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <h2
                id="cafe-heading"
                className="text-[1.75rem] md:text-[2.25rem] font-serif font-light text-neutral-900 leading-[1.12]"
                style={{ letterSpacing: "-0.02em" }}
              >
                ¿Quieres matcha en tu cafetería?
              </h2>
              <p className="mt-6 text-base md:text-lg text-neutral-600 font-light leading-[1.8]">
                Te ayudamos a elegir el matcha y la receta ideal para tu barra.
              </p>
              <a
                href={instagramDmUrl}
                target="_blank"
                rel="noopener"
                className={`${buttonClassName} mt-8`}
                style={{ letterSpacing: "0.08em" }}
              >
                <Instagram size={16} strokeWidth={1.5} aria-hidden="true" />
                Escríbenos por Instagram
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="home-heading" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <h2
                id="home-heading"
                className="text-[1.75rem] md:text-[2.25rem] font-serif font-light text-neutral-900 leading-[1.12]"
                style={{ letterSpacing: "-0.02em" }}
              >
                Compra para llevar a casa
              </h2>
              <p className="mt-6 text-base md:text-lg text-neutral-600 font-light leading-[1.8]">
                Matcha, hojicha y sencha de Shizuoka con envío a todo México.
              </p>
              <Link
                href="/productos"
                className={`${buttonClassName} mt-8`}
                style={{ letterSpacing: "0.08em" }}
              >
                Ver productos
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

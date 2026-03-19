import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprar Matcha en Hermosillo | Shizuku Matcha Studio",
  description:
    "Compra matcha de especialidad en Hermosillo, Sonora. Matcha, hojicha y sencha importados de Shizuoka, Japón. Envío a todo México. Trazabilidad completa.",
  openGraph: {
    title: "Comprar Matcha en Hermosillo | Shizuku Matcha Studio",
    description:
      "Compra matcha de especialidad en Hermosillo. Importación directa de Shizuoka, Japón.",
    url: "https://shizukumatchastudio.com/productos",
  },
  alternates: {
    canonical: "https://shizukumatchastudio.com/productos",
  },
  other: {
    "geo.region": "MX-SON",
    "geo.placename": "Hermosillo",
    "geo.position": "29.0729;-110.9559",
    ICBM: "29.0729, -110.9559",
  },
};

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

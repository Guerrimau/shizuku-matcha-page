import { Metadata } from 'next';
import CafeteriasPageClient from './CafeteriasPageClient';

export const metadata: Metadata = {
  title: 'Matcha para Cafeterías de Especialidad | Shizuku Matcha Studio',
  description: 'Matcha de primera cosecha de Shizuoka para cafeterías en Hermosillo. Cultivar Okumidori, precio directo de importador, sin pedido mínimo. Envíos nacionales.',
  keywords: 'matcha para cafeterías hermosillo, matcha mayoreo hermosillo, matcha b2b hermosillo, matcha primera cosecha cafeterías, matcha okumidori, matcha shizuoka mayorista',
  openGraph: {
    title: 'Matcha para Cafeterías de Especialidad | Shizuku Matcha Studio',
    description: 'Matcha de primera cosecha de Shizuoka. Precio directo de importador. Sin pedido mínimo. Asesoría técnica incluida.',
    images: [
      {
        url: '/MATCHA_LATTE_HOT.jpg',
        width: 1200,
        height: 630,
        alt: 'Matcha Shizuku para cafeterías de especialidad',
      },
    ],
  },
  alternates: {
    canonical: 'https://shizukumatchastudio.com/matcha-cafeterias',
  },
  other: {
    'geo.region': 'MX-SON',
    'geo.placename': 'Hermosillo',
  },
};

export default function CafeteriasPage() {
  return <CafeteriasPageClient />;
}

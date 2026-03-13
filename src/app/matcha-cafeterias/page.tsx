import { Metadata } from 'next';
import CafeteriasPageClient from './CafeteriasPageClient';

export const metadata: Metadata = {
  title: 'Matcha para Cafeterías de Especialidad',
  description: 'Matcha de especialidad de Shizuoka para cafeterías en Hermosillo. Cultivar Okumidori, blend estacional, precio directo de importador, sin pedido mínimo. Envíos nacionales.',
  openGraph: {
    title: 'Matcha para Cafeterías de Especialidad | Shizuku Matcha Studio',
    description: 'Matcha de especialidad de Shizuoka. Cultivar Okumidori, blend estacional. Precio directo de importador. Sin pedido mínimo.',
    url: 'https://shizukumatchastudio.com/matcha-cafeterias',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Shizuku Matcha Studio — Matcha de especialidad para cafeterías en Hermosillo',
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

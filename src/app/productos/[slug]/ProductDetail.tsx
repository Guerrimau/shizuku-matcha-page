"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product, ProductSpecs, FlavorProfile } from "@/data/products";

function SpecsTable({ specs }: { specs: ProductSpecs }) {
  if (specs.type === "tea") {
    return (
      <dl className="space-y-3">
        <SpecRow label="Tipo" value={specs.tipo} />
        <SpecRow label="Origen" value={specs.origen} />
        <SpecRow label="Proceso" value={specs.proceso} />
        <SpecRow label="Perfil" value={specs.perfil} />
      </dl>
    );
  }

  if (specs.type === "accessory") {
    return (
      <dl className="space-y-3">
        <SpecRow label="Material" value={specs.material} />
        <SpecRow label="Capacidad" value={specs.capacidad} />
        <SpecRow label="Origen" value={specs.origen} />
        <SpecRow label="Artesano" value={specs.artesano} />
      </dl>
    );
  }

  if (specs.type === "kit") {
    return (
      <dl className="space-y-3">
        <SpecRow label="Contenido" value={specs.contenido} />
        <SpecRow label="Nivel" value={specs.nivel} />
        <SpecRow label="Té Incluido" value={specs.teIncluido} />
        <SpecRow label="Perfil" value={specs.perfil} />
      </dl>
    );
  }

  return null;
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-baseline gap-4 py-2 border-b border-neutral-100">
      <dt
        className="font-mono text-[10px] uppercase text-neutral-400 shrink-0"
        style={{ letterSpacing: "0.15em" }}
      >
        {label}
      </dt>
      <dd className="text-sm text-neutral-700 font-light text-right">
        {value}
      </dd>
    </div>
  );
}

function FlavorBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline">
        <span
          className="font-mono text-[9px] uppercase text-neutral-500"
          style={{ letterSpacing: "0.12em" }}
        >
          {label}
        </span>
        <span className="font-mono text-[10px] text-neutral-400">
          {value}/10
        </span>
      </div>
      <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#2d5a3d] rounded-full transition-all duration-500"
          style={{ width: `${value * 10}%` }}
        />
      </div>
    </div>
  );
}

function FlavorProfileGrid({ profile }: { profile: FlavorProfile }) {
  return (
    <div className="max-w-2xl mx-auto grid grid-cols-2 gap-8 lg:gap-12">
      <FlavorBar label="Dulzor" value={profile.dulzor} />
      <FlavorBar label="Umami" value={profile.umami} />
      <FlavorBar label="Amargor" value={profile.amargor} />
      <FlavorBar label="Cuerpo" value={profile.cuerpo} />
    </div>
  );
}

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  const currentPrice = product.sizes[selectedSize]?.price || product.sizes[0].price;

  return (
    <>
      {/* Breadcrumb */}
      <div
        className="border-b border-neutral-100"
        style={{ backgroundColor: "#F9F8F3" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 overflow-hidden">
          <nav className="flex items-center gap-2 text-sm min-w-0">
            <Link
              href="/"
              className="text-neutral-400 hover:text-neutral-600 transition-colors shrink-0"
            >
              Inicio
            </Link>
            <span className="text-neutral-300 shrink-0">/</span>
            <Link
              href="/productos"
              className="text-neutral-400 hover:text-neutral-600 transition-colors shrink-0"
            >
              Productos
            </Link>
            <span className="text-neutral-300 shrink-0">/</span>
            <span className="text-neutral-600 font-light truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section — 60/40 Split */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-20 overflow-hidden">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Image Gallery (60%) */}
          <div className="lg:col-span-3 space-y-4 min-w-0">
            {/* Main Image */}
            <div className="aspect-square bg-white border border-neutral-100 overflow-hidden w-full relative">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 border overflow-hidden transition-all duration-200 relative ${
                      selectedImage === idx
                        ? "border-neutral-900"
                        : "border-neutral-200 hover:border-neutral-400"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - Vista ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right — Product Info (40%) — Sticky */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24 xl:top-28 space-y-8">
              {/* Labels */}
              <div className="flex flex-wrap gap-2">
                {product.labels.map((label, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[9px] uppercase text-neutral-500 px-2.5 py-1.5 bg-neutral-50 rounded-sm"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-2">
                <h1
                  className="text-2xl lg:text-3xl font-serif font-light text-neutral-900"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {product.name}{" "}
                  <span className="font-script text-xl lg:text-2xl text-neutral-300 ml-1">
                    {product.kanji}
                  </span>
                </h1>
                <p className="text-sm text-neutral-500 font-light">
                  {product.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span
                  className="text-2xl lg:text-3xl font-light text-neutral-900"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  ${currentPrice.toLocaleString("es-MX")}
                </span>
                <span className="text-sm text-neutral-400 font-mono uppercase">
                  MXN
                </span>
              </div>

              {/* Size Selector */}
              {product.sizes.length > 1 && (
                <div className="space-y-3">
                  <span
                    className="font-mono text-[10px] uppercase text-neutral-400 block"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    Tamaño
                  </span>
                  <div className="flex gap-3">
                    {product.sizes.map((size, idx) => (
                      <button
                        key={size.sku}
                        onClick={() => setSelectedSize(idx)}
                        className={`
                          px-6 py-3 font-mono text-[11px] uppercase transition-all duration-200 rounded-sm
                          ${
                            selectedSize === idx
                              ? "bg-neutral-900 text-white"
                              : "bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-400"
                          }
                        `}
                        style={{ letterSpacing: "0.08em" }}
                      >
                        {size.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-base text-neutral-600 font-light leading-relaxed">
                {product.description}
              </p>

              {/* Order via Instagram CTA (temporary) */}
              <a
                href={`https://ig.me/m/shizukumatchastudio?text=${encodeURIComponent(`Hola, me interesa ordenar: ${product.name} (${product.sizes[selectedSize]?.label})`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-neutral-900 text-white py-4 font-mono text-[11px] uppercase hover:bg-neutral-800 transition-colors duration-200 rounded-sm flex items-center justify-center gap-2"
                style={{ letterSpacing: "0.1em" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Pedir por Instagram
              </a>

              {/* Technical Specs */}
              <div
                className="pt-8 border-t border-neutral-100"
                style={{ marginTop: "2rem" }}
              >
                <h3
                  className="font-mono text-[10px] uppercase text-neutral-400 mb-6"
                  style={{ letterSpacing: "0.2em" }}
                >
                  Ficha Técnica
                </h3>
                <SpecsTable specs={product.specs} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flavor Profile — Only for Tea Products */}
      {product.flavorProfile && (
        <section
          className="border-t border-neutral-100"
          style={{ backgroundColor: "#F9F8F3" }}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
            <h2
              className="font-mono text-[10px] uppercase text-neutral-400 mb-10 text-center"
              style={{ letterSpacing: "0.25em" }}
            >
              Perfil de Sabor
            </h2>
            <FlavorProfileGrid profile={product.flavorProfile} />
          </div>
        </section>
      )}

      {/* Brewing Guide — Only for Tea Products */}
      {product.brewingGuide && (
        <section className="bg-white border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
            <h2
              className="font-mono text-[10px] uppercase text-neutral-400 mb-12 text-center"
              style={{ letterSpacing: "0.25em" }}
            >
              Guía de Preparación
            </h2>

            <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              {/* Temperature */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-neutral-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.2" />
                  </svg>
                </div>
                <div>
                  <p
                    className="font-mono text-[9px] uppercase text-neutral-400 mb-2"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    Temperatura
                  </p>
                  <p
                    className="text-lg font-light text-neutral-900"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {product.brewingGuide.temperatura}
                  </p>
                </div>
              </div>

              {/* Ratio */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-neutral-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="font-mono text-[9px] uppercase text-neutral-400 mb-2"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    Ratio
                  </p>
                  <p
                    className="text-lg font-light text-neutral-900"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {product.brewingGuide.ratio}
                  </p>
                </div>
              </div>

              {/* Time/Method */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-neutral-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="font-mono text-[9px] uppercase text-neutral-400 mb-2"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    Tiempo / Método
                  </p>
                  <p
                    className="text-lg font-light text-neutral-900"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {product.brewingGuide.tiempo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Products */}
      <section
        className="border-t border-neutral-100"
        style={{ backgroundColor: "#F9F8F3" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
            style={{ letterSpacing: "0.1em" }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Volver a Productos
          </Link>
        </div>
      </section>
    </>
  );
}

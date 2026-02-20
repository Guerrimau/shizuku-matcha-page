# Shizuku Matcha Studio — Design System

Documento de referencia para mantener coherencia visual en toda la aplicación.  
Tono: especialidad japonesa. Preciso, minimalista, con autoridad técnica.

---

## Paleta de Colores

### Primarios

| Token | Valor | Uso |
|-------|-------|-----|
| `washi-bg` | `#F9F8F4` | Fondo principal de secciones |
| `washi-text` | `#1A1C1A` | Texto principal |
| `cream` | `#F9F8F4` | Fondo alternante (igual que washi-bg) |
| `cream-dark` | `#F0EDE8` | Fondo alternante más oscuro |

### Forest Green (acento de marca)

| Token | Valor | Uso |
|-------|-------|-----|
| `forest-green` | `#3E4A3C` | Iconos, labels, borders de acento |
| `forest-green-light` | `#5A6658` | Variante clara |
| `forest-green-dark` | `#2A332A` | Hover states |
| `forest-green-pale` | `#E8EBE7` | Fondos de iconos, fondo suave |

> ⚠️ Usar `forest-green` / `text-forest-green` — **nunca** `matcha` o `text-matcha` directamente.

### Charcoal (textos y neutros)

| Token | Valor | Uso |
|-------|-------|-----|
| `charcoal` | `#1A1C1A` | Texto oscuro |
| `charcoal-light` | `#3A3C3A` | Texto secundario, descripciones |

### Apoyo

| Token | Valor | Uso |
|-------|-------|-----|
| `gold` | `#d1ad60` | Acento dorado (uso muy limitado) |
| `wood` | `#B8A082` | Madera/terracota (uso decorativo) |

---

## Tipografía

### Familias

| Clase | Variable | Uso |
|-------|----------|-----|
| `font-serif` | `--font-cormorant` | H1, H2, títulos de sección, product names |
| `font-sans` | `--font-inter` | Cuerpo de texto, párrafos, UI |
| `font-mono` | `--font-space-mono` | Labels, navegación, CTAs, datos técnicos |
| `font-script` | `--font-noto-serif-jp` | Caracteres japoneses (kanji) |

### Jerarquía

**H1 Hero**
```
text-5xl lg:text-6xl xl:text-7xl font-serif font-light tracking-tight leading-[1.1]
```

**H2 Sección** (`.studio-subheading`)
```
font-serif text-2xl lg:text-4xl font-light tracking-tight
```

**H3 Subsección**
```
font-serif text-xl md:text-2xl font-light tracking-tight
```

**Label de sección** (`.studio-label`)
```
font-mono text-xs uppercase tracking-[0.2em] text-forest-green
```

**Cuerpo principal**
```
text-base md:text-lg text-charcoal-light font-light leading-relaxed
```

**Cuerpo compacto**
```
text-sm text-charcoal-light font-light leading-relaxed
```

**Dato técnico / ficha**
```
font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-light/70
```

---

## Espaciado y Layout

### Contenedor

```
.container-custom → max-w-7xl mx-auto px-6 sm:px-8 lg:px-12
```

### Padding de sección

```
.section-padding         → py-24 lg:py-32
.section-padding-compact → py-16 lg:py-20
```

### Grids frecuentes

| Uso | Clase |
|-----|-------|
| Split 2 columnas | `grid md:grid-cols-2 gap-12 lg:gap-20 items-start` |
| Grid 3 columnas | `grid md:grid-cols-3 gap-8 lg:gap-12` |
| Grid 4 columnas | `grid md:grid-cols-4 gap-px bg-charcoal/10` |
| Split sin gap (bloques) | `grid md:grid-cols-2 gap-0` |

---

## Patrones de Componentes

### Header de sección (patrón canónico)

```tsx
<div className="text-center mb-16 lg:mb-20 space-y-6">
  <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest-green">
    Label
  </p>
  <h2 className="studio-subheading text-washi-text">
    Título de la sección
  </h2>
  <div className="w-20 h-px bg-forest-green/30 mx-auto"></div>
  <p className="text-base md:text-lg text-charcoal-light max-w-xl mx-auto font-light leading-relaxed">
    Descripción opcional
  </p>
</div>
```

**Reglas:**
- Label: siempre `font-mono text-xs uppercase tracking-[0.2em] text-forest-green`
- Línea divisora: siempre `h-px bg-forest-green/30`, ancho `w-16` a `w-24`
- Heading: siempre `studio-subheading text-washi-text`

---

### Botones

**Ghost (primario)**
```tsx
<a className="inline-flex items-center gap-2 border border-forest-green text-forest-green 
  px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] 
  hover:bg-forest-green hover:text-washi-bg transition-all duration-500">
  Texto del botón
</a>
```

**Text link (secundario)**
```tsx
<button className="group inline-flex items-center gap-3 text-sm lowercase 
  tracking-wide text-washi-text transition-all duration-500 hover:gap-5">
  <span>texto lowercase</span>
  <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
</button>
```

> ⚠️ **Nunca** usar `bg-matcha text-white` como botón principal. El estilo de marca es siempre el ghost bordeado.

---

### Tarjetas de beneficio / feature

```tsx
<div className="bg-cream p-8 space-y-4">
  <div className="w-12 h-12 bg-forest-green-pale flex items-center justify-center">
    <Icon className="text-forest-green" size={24} />
  </div>
  <h3 className="font-serif text-xl text-washi-text font-light tracking-tight">
    Título
  </h3>
  <p className="text-sm text-charcoal-light font-light leading-relaxed">
    Descripción
  </p>
</div>
```

---

### Cards flotantes (floating detail)

```tsx
<div className="absolute -bottom-8 -left-8 bg-washi-bg border border-forest-green/20 
  p-6 md:p-8 max-w-xs shadow-lg">
  <p className="font-mono text-xs uppercase tracking-[0.15em] text-forest-green mb-2">
    Label
  </p>
  <p className="text-sm text-charcoal-light leading-relaxed font-light">
    Descripción técnica
  </p>
</div>
```

---

### FAQ Accordion

```tsx
<div className="border-b border-charcoal/10">
  <button className="w-full py-8 flex items-center justify-between text-left 
    hover:opacity-70 transition-opacity duration-300">
    <h3 className="font-serif text-xl md:text-2xl text-washi-text font-light tracking-tight pr-8">
      Pregunta
    </h3>
    <ChevronDown className="text-forest-green flex-shrink-0" size={20} />
  </button>
  <div className="pb-8 pr-12">
    <p className="text-charcoal-light font-light leading-relaxed">
      Respuesta
    </p>
  </div>
</div>
```

---

### Separador de sección (`SectionDivider`)

```tsx
<div className="flex items-center justify-center py-2">
  <div className="w-12 h-px bg-forest-green/20"></div>
  <div className="mx-4 w-1 h-1 rounded-full bg-forest-green/30"></div>
  <div className="w-12 h-px bg-forest-green/20"></div>
</div>
```

---

### Contenedor de imagen

```tsx
<div className="aspect-[4/3] relative overflow-hidden bg-cream">
  <Image
    src="/IMAGE.jpg"
    alt="Descripción"
    fill
    className="object-cover transition-transform duration-700 hover:scale-105"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
```

**Ratios frecuentes:**
- `aspect-[3/4]` — Portrait hero
- `aspect-[4/5]` — Portrait producto
- `aspect-[4/3]` — Landscape feature
- `aspect-square` — Grid items cuadrados

---

## Assets de Imagen disponibles (`/public/`)

### Raíz

| Archivo | Uso sugerido |
|---------|-------------|
| `HERO.jpg` | OG image, fondos |
| `WISK.jpg` | Hero principal |
| `MATCHA_LATTE_HOT.jpg` | Cafeterías hero, OG |
| `MATCHA_LATTE.jpg` | Preparaciones |
| `MATCHA_BOWL.jpg` | Preparaciones |
| `MATCHA_BAG.jpg` | Producto, B2B |
| `MATCHA_WISK.jpg` | Proceso de preparación |
| `TEA_FIELD.jpg` | Origen, plantaciones |
| `TEA_PLANT.jpg` | Origen, propiedades |
| `TEA_SESSION_EMPTY.jpg` | Origen, proceso |
| `SENCHA_SERVE.jpg` | Sencha serving |
| `EKI.jpg` | Shizuoka, origen |

### Productos (por variedad)

| Directorio | Archivos |
|------------|----------|
| `/MATCHA/` | `PRODUCT.jpg`, `FULL.jpg`, `BAG.jpg` |
| `/HOJICHA/` | `PRODUCT.jpg`, `FULL.jpg`, `BAG.jpg` |
| `/SENCHA/` | `PRODUCT.jpg`, `FULL.jpg`, `BAG.jpg` |

---

## Reglas de Voz Visual

| ✅ Hacer | ❌ Evitar |
|---------|----------|
| Labels en `font-mono uppercase` | Labels en `font-sans font-medium` |
| CTAs en `lowercase` o `uppercase font-mono` | CTAs en `font-medium text-lg` |
| Botones ghost bordeados con `forest-green` | Botones `bg-matcha text-white` sólidos |
| Fondos `bg-washi-bg` y `bg-cream` | Fondos `bg-white` o gradientes |
| Separadores `h-px bg-forest-green/30` | Separadores `w-24 h-px bg-matcha` |
| Iconos en `text-forest-green` | Iconos en `text-matcha` |
| `font-light` en headings y cuerpo | `font-medium` o `font-bold` en textos largos |
| `next/image` con `fill` y `sizes` | `<img>` tags |
| Imágenes de `/public/` existentes | Imágenes inexistentes como `MatchaLatte.png` |

---

## Fondos alternantes por sección

Para dar ritmo visual sin bordes:

```
Hero          → bg-washi-bg
Experience    → bg-washi-bg
Products      → bg-washi-bg
Story         → bg-cream
FAQ           → bg-cream
BusinessSection → bg-washi-bg
Footer        → bg-washi-text (dark)
```

Para la página de cafeterías:
```
Hero          → bg-washi-bg
Benefits      → bg-cream
Products      → bg-washi-bg
Process       → bg-cream
FAQ           → bg-washi-bg
CTA           → bg-cream
```

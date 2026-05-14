# Hero / Landing Section (XI-4)

Drop-in above-the-fold hero for the portfolio. Pure React + CSS Modules — no
runtime dependency on Framer Motion. Designed to integrate with the Next.js 14
app router scaffold being set up under XI-2, and to be re-themed against the
design tokens delivered by XI-3.

## Files

- `Hero.tsx` — the React component (server-component safe).
- `Hero.module.css` — scoped styles, animations, reduced-motion handling.
- `index.ts` — barrel export.
- `../../data/profile.ts` — structured content (name, title, bio, CTAs).

## Usage

```tsx
// app/page.tsx
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* experience, projects, contact ... */}
    </main>
  );
}
```

The `@/*` alias must resolve to the project root (the Next.js 14 + TS default).

## Acceptance criteria coverage

| Criterion | How it's met |
| --- | --- |
| Renders cleanly on all viewports | `clamp()`-based typography, fluid padding, `100svh`, mobile media query, no fixed widths. |
| Animation completes within 1.5s | Last staggered element (CTAs) starts at 0.8s and finishes at 1.4s (`0.8s delay + 0.6s duration`). Ambient drifts are infinite ambience, not part of the "intro animation". |
| Clear CTA to experience/contact sections | Two CTAs (`#experience`, `#contact`) plus a scroll hint anchored to `#experience`. |
| No layout shift | Section reserves `100svh` from first paint; all animated transforms/opacity, no width/height transitions; no async font/image swaps in this component. |

## Accessibility

- Single `<h1>` with `aria-labelledby` on the section.
- Decorative SVG/divs marked `aria-hidden`.
- `prefers-reduced-motion` short-circuits all animations and reveals content immediately.
- CTAs have visible `:focus-visible` outlines.
- Color contrast: gradient text falls back to white-on-near-black; the bio/title use ≥4.5:1 against `#07080d`.

## Customization hooks for XI-3 (design system)

The CSS module reads two CSS custom properties:

- `--hero-fg` (default `#f5f7fa`)
- `--hero-bg` (default `#07080d`)

Once XI-3 lands tokens, set them on `:root` (or a theme wrapper) and the hero
will pick them up. Gradient stops are local for now; happy to migrate to tokens
in a follow-up once the palette is finalized.

## Dependencies

None beyond React. The component is server-component compatible (no `"use client"`).

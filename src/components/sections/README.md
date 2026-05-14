# Experience section (XI-5)

Self-contained primary content section for the portfolio. Drop into the Next.js app router page once XI-2 (scaffold) and XI-3 (design tokens) land.

## Files

- `src/data/experience.json` — structured source of truth (work history, skills, education).
- `src/types/portfolio.ts` — TS types for the data shape.
- `src/lib/experience.ts` — loader + date/duration helpers.
- `src/components/sections/WorkHistory.tsx` — chronological timeline.
- `src/components/sections/Skills.tsx` — grouped skills with level meter.
- `src/components/sections/Education.tsx` — education list (renders nothing if empty).
- `src/components/sections/ExperienceSection.tsx` — composed section.

## Usage

```tsx
// app/page.tsx
import { ExperienceSection } from "@/components/sections/ExperienceSection";

export default function HomePage() {
  return (
    <main>
      {/* <Hero /> from XI-4 */}
      <ExperienceSection />
      {/* <SideProjects /> from XI-7 */}
    </main>
  );
}
```

## Editing content

Open `src/data/experience.json` and replace the `REPLACE_ME` placeholders. The file is the single source of truth — components rebuild automatically. Schema is enforced by `ExperienceData` in `src/types/portfolio.ts`.

Conventions:

- `startDate` / `endDate` are `YYYY-MM` strings; `endDate: null` means "Present".
- `skillItem.level` is `"expert" | "proficient" | "familiar"` (renders 3/2/1 dots).
- `highlights` should be quantified outcomes — recruiters scan these first.

## Acceptance criteria mapping (XI-5)

- ✅ Work history displayed chronologically — `sortRolesByRecency` in `WorkHistory.tsx`.
- ✅ Skills section with visual treatment — grouped cards + level meter in `Skills.tsx`.
- ✅ Scannable in <30s — bold role/company, period/duration as monospace meta, one-line summary, bullet highlights, stack chips.
- ✅ Structured data source — `src/data/experience.json` typed by `ExperienceData`.

## Integration notes for parallel issues

- **XI-3 (design tokens):** components use raw Tailwind utility classes for neutrals. If XI-3 publishes semantic tokens (e.g. `text-fg-muted`), swap the literal neutral classes — the structure won't change.
- **XI-6 (SEO):** the `WorkHistory` markup is plain `<ol>/<li>` with `<time dateTime>` and is friendly to JSON-LD `Person` / `Role` enrichment.
- **XI-8 (perf):** the section is a server component (no `"use client"`), zero JS shipped. Add `<motion.*>` wrappers only if XI-3 ships animation primitives.
- **XI-9 (a11y):** semantic headings, `aria-label`s on lists, `role="img"` on the level meter, `time` element with `dateTime`. Color contrast uses neutral-700/300 on neutral backgrounds.

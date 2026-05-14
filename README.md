# Portfolio

Personal portfolio site. Built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, and **ESLint**. Deployed on **Vercel**, with **Lighthouse CI** gating pull requests.

## Stack

- **Framework:** Next.js 14 (App Router, RSC)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS, CSS variables for theming
- **Fonts:** `next/font` (Inter, JetBrains Mono — self-hosted, no FOUT)
- **Lint:** ESLint (`next/core-web-vitals`, `next/typescript`)
- **Hosting:** Vercel (auto-deploy from GitHub `main`, preview deploys per PR)
- **CI:** GitHub Actions — lint + typecheck + build + Lighthouse audit

## Prerequisites

- Node.js 20+ (`.nvmrc` pins major version 20)
- npm 10+

## Local setup

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:3000>. Hot reload is enabled by default.

## Scripts

| Script              | What it does                              |
| ------------------- | ----------------------------------------- |
| `npm run dev`       | Start the Next.js dev server              |
| `npm run build`     | Production build (`.next/`)               |
| `npm run start`     | Serve the production build                |
| `npm run lint`      | Run ESLint                                |
| `npm run typecheck` | Run `tsc --noEmit`                        |
| `npm run lhci`      | Run Lighthouse CI locally (requires build)|

## Project structure

```
app/                # Next.js App Router routes
  layout.tsx        # Root layout, fonts, metadata
  page.tsx          # Home
  not-found.tsx     # 404
  globals.css       # Tailwind entrypoint + CSS vars
components/         # (added as features land)
public/             # Static assets
.github/workflows/  # CI + Lighthouse pipelines
lighthouserc.json   # Lighthouse CI config
vercel.json         # Vercel headers + framework hints
tailwind.config.ts
tsconfig.json
next.config.mjs
```

## Deployment (Vercel)

1. Create a Vercel project linked to this GitHub repo.
2. Framework auto-detects as **Next.js**; no extra build settings needed (also pinned in `vercel.json`).
3. Pushes to `main` deploy to production; every PR gets a preview deployment.
4. (Optional) Set `NEXT_PUBLIC_SITE_URL` in Vercel env vars for correct OG/SEO `metadataBase`.

No Vercel secrets are required for the basic GitHub integration — Vercel's GitHub app handles it.

## Lighthouse CI

Configured in `lighthouserc.json`. CI thresholds:

- Performance ≥ 0.90
- Accessibility ≥ 0.95
- Best Practices ≥ 0.95
- SEO ≥ 0.95

Run locally:

```bash
npm run build
npm run lhci
```

In CI it runs on every PR and push to `main` via `.github/workflows/lighthouse.yml`. Results upload to temporary public storage; to get PR status checks, install the [Lighthouse CI GitHub App](https://github.com/apps/lighthouse-ci) and add `LHCI_GITHUB_APP_TOKEN` as a repo secret.

## Environment variables

| Variable               | Where     | Purpose                                          |
| ---------------------- | --------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Vercel    | Canonical site URL for OG tags / `metadataBase`  |
| `LHCI_GITHUB_APP_TOKEN`| GH Actions| Lets Lighthouse CI post PR status checks         |

Copy `.env.local` from `.env.example` if/when one is added.

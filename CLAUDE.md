# CLAUDE.md

This repo is the public site for **Marble Labs** — a React +
TypeScript + Vite SPA, styled with Tailwind v4 and shadcn-style components,
deployed to GitHub Pages from `main` via `.github/workflows/host.yml`.

## Who does what — get this right in every word of site copy

Two separate things share the Marble name:

- **Marble** (the company) builds the learning software and platform. It runs
  in classrooms and is where course data comes from.
- **Marble Labs** (this site) is an academic research lab. It does **not** build
  the platform, ship product, or write learning software. The lab works with
  data collected through Marble, with participant consent, and publishes open
  research — data and findings both.

The lab **analyzes learning analytics**. It applies AI and computer science
analytical methods to understand how learning happens. It is not a product
team and does not build Marble or any other learning software.

The site presents a research lab, not a student-led group. There is no
students/alumni page, no student recruiting, and no university affiliation;
that content moved to a separate academic lab site.

Write the site so a reader lands on this understanding on their own. Do **not**
state the distinction outright — no disclaimer sentence, no "we don't build the
platform", no paragraph explaining the relationship. It should simply never be
contradicted.

In practice that means the verbs matter. The lab **studies, analyzes, models,
measures, and publishes**. Avoid *build*, *ship*, *deploy*, *design the tool*,
*we make software*, and anything describing the lab as the author of the
platform. Describing the lab's own analysis code, models, or released datasets
is fine — that is research output, not product.

## Brand

- Ink / indigo: `#560591` (hero gradient runs to `#3a0263`). Keep this exact
  shade; asset files that arrive in another indigo get recolored to it.
- The mark is the **marble vane** — `public/marble-vane.svg`, with the
  heavier-ring variant `public/marble-favicon.svg` for the favicon.
  `public/logo-192x192.png` and `public/favicon.ico` are rasterized from those.

## Layout of the site

- `src/pages/` — `Home`, `Research`; routes in `src/main.tsx`.
- `src/components/ui/` — shadcn-style primitives plus `research-visual.tsx`
  (SVG category animations). The home hero is text on the indigo gradient
  with a static dot-grid and ring background; keep it minimal.
- Content lives in plain arrays at the top of each page file — edit those
  rather than the JSX below them.

## Conventions

- `npm run build` must pass. `npm run lint` has three pre-existing errors
  (`button.tsx`, `navigation-menu.tsx`, `project-card.tsx`); don't add more.
- Keep copy plain and short. No triads of parallel phrases, no marketing
  superlatives, no em-dash pileups.

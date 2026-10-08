# ZZZ OPTIMIZER — Zenless Zone Zero toolkit (Astro)

Unofficial fan-made calculator site for **Zenless Zone Zero**. Domain: **https://zzzoptimizer.top**.

## Stack & commands
Astro 5, static output, vanilla JS islands. `npm install` → `npm run dev` / `npm run build` → deploy `dist/`.

## Pages (17)
`/` · `/tools/` · tools: `/disc-scorer/`, `/damage-calculator/`, `/crit-ratio/`, `/pull-planner/` ·
guides: `/guides/how-disc-rolls-work/`, `/guides/crit-value-explained/`, `/guides/pull-economy/` ·
trust: `/about/`, `/contact/`, `/methodology/`, `/privacy/`, `/terms/`, `/changelog/`, `/sitemap/` (all generated from `src/data/site.ts` via `src/pages/[slug].astro`) · `404`.

## Single source of truth
`src/data/site.ts` — brand, nav, tools, guides, trust pages, game values ([VERIFY] flags). Update after patches, bump `lastVerified`, note in changelog, rebuild.

## [NEEDS DATA] before launch
1. Verify S-rank roll caps + soft-pity values in `site.ts` against the current patch.
2. About page operator bio (placeholder comment in `site.ts`).
3. Mailbox for `hello@zzzoptimizer.top`.
4. Design: neon street theme (acid green/magenta, notched panels, Chakra Petch italic) — intentionally distinct per game.

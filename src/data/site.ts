/**
 * ZZZ OPTIMIZER — site data. Everything page-agnostic lives here.
 * Game values are community-reported and patch-sensitive [VERIFY].
 */

export const SITE = {
  brand: 'ZZZ OPTIMIZER',
  domain: 'zzzoptimizer.top',
  game: 'Zenless Zone Zero',
  kicker: 'Unofficial toolkit // data reviewed',
  lastVerified: '2026-10-08',
  disclaimer:
    'Unofficial fan-made toolkit. Not affiliated with or endorsed by HoYoverse / miHoYo. Zenless Zone Zero and related marks belong to their respective owners.',
};

export const NAV = [
  { href: '/tools/', label: 'Tools' },
  { href: '/disc-scorer/', label: 'Disc Scorer' },
  { href: '/guides/how-disc-rolls-work/', label: 'Guides' },
  { href: '/about/', label: 'About' },
];

export const TOOLS = [
  { href: '/disc-scorer/', ico: '💿', name: 'Drive Disc Scorer', desc: 'Grade any disc: roll value %, crit value, and which substats are dragging it down.', tag: 'Flagship' },
  { href: '/damage-calculator/', ico: '💥', name: 'Damage Calculator', desc: 'Expected hit, crit and non-crit numbers from your ATK, bonuses and crit stats.', tag: 'Calculator' },
  { href: '/crit-ratio/', ico: '⚖️', name: 'Crit Ratio Analyzer', desc: 'Is 70/140 better than 55/180? Expected-value math with next-substat advice.', tag: 'Calculator' },
  { href: '/pull-planner/', ico: '🎰', name: 'Pull Planner', desc: 'Pity, guarantee and polychrome budget — odds for your next ten-pull and beyond.', tag: 'Calculator' },
];

export const GUIDES = [
  { href: '/guides/how-disc-rolls-work/', ico: '📘', name: 'How disc rolls work', desc: 'Substat pools, roll counts, and why a "bad" disc can still be god-tier for one agent.' },
  { href: '/guides/crit-value-explained/', ico: '📗', name: 'Crit value explained', desc: 'The 2×CR + CD convention, the 1:2 rule, and when to break it.' },
  { href: '/guides/pull-economy/', ico: '📙', name: 'Pull economy basics', desc: 'What f2p income really is per patch, and how to budget for a guarantee.' },
];

const y = '2026-10-08';

export const TRUST: { slug: string; title: string; desc: string; html: string }[] = [
  {
    slug: 'about',
    title: 'About ZZZ OPTIMIZER – Free Zenless Zone Zero Tools',
    desc: 'Who builds ZZZ OPTIMIZER, why it exists, how the tools are made and kept current. An unofficial, ad-free Zenless Zone Zero toolkit.',
    html: `
<h2>Why this site exists</h2>
<p>Zenless Zone Zero players rebuild the same math every day — disc roll values, crit ratios, pull budgets — and the answers lived in spreadsheets and scattered forum posts. ZZZ OPTIMIZER turns that math into fast, free tools: the <a href="/disc-scorer/">disc scorer</a>, <a href="/damage-calculator/">damage calculator</a>, <a href="/crit-ratio/">crit ratio analyzer</a> and <a href="/pull-planner/">pull planner</a>.</p>
<h2>How the tools are built</h2>
<ul>
<li>Every calculation runs client-side in your browser. Nothing you type is uploaded — see <a href="/privacy/">privacy</a>.</li>
<li>Mechanics (roll caps, pity curves, damage order) are modeled from community-documented sources and listed on the <a href="/methodology/">methodology page</a>.</li>
<li>Data is re-reviewed after notable patches; the review date appears on every page.</li>
</ul>
<h2>How the site is funded</h2>
<p>Currently: out of pocket, no ads, no affiliate links, no paywall. If that ever changes it will be disclosed here first.</p>
<h2>Who is behind it</h2>
<p>Maintained by an independent fan of HoYo games. <!-- [NEEDS DATA]: add your name/bio before publishing. --> Corrections and data updates: <a href="/contact/">contact</a>.</p>
<h2>Affiliation notice</h2>
<p>${SITE.disclaimer}</p>`,
  },
  {
    slug: 'contact',
    title: 'Contact ZZZ OPTIMIZER – Report a Data Error',
    desc: 'Contact ZZZ OPTIMIZER: report wrong roll caps or pity values, request a tool, or ask about methodology.',
    html: `
<h2>Email</h2>
<p><strong>hello@zzzoptimizer.top</strong><br />
<!-- [NEEDS DATA]: set up this mailbox before launch. --> Typical response time: a few days. For data reports, include the page URL and the patch you tested on.</p>
<h2>What to include in a data report</h2>
<ol class="steps">
<li>The page and the exact value you think is wrong (e.g. "disc scorer, S-rank crit rate max roll").</li>
<li>How you tested — in-game, patch notes, community source.</li>
<li>The game version you observed it on.</li>
</ol>
<h2>Requests</h2>
<p>Tool ideas are welcome. The roadmap lives on the <a href="/changelog/">changelog</a>.</p>`,
  },
  {
    slug: 'methodology',
    title: 'Methodology – Formulas & Data Policy | ZZZ OPTIMIZER',
    desc: 'Every formula behind ZZZ OPTIMIZER: disc roll values, crit value, damage order, the pity model, data sources and the [VERIFY] policy.',
    html: `
<h2>Disc roll values (RV)</h2>
<p>An S-rank disc has 4 substats; each substat has a maximum single-roll value. Roll value is the share of perfect rolls your disc achieved:</p>
<pre class="formula">RV% = 100 × Σ(valueᵢ ÷ maxRollᵢ) ÷ 4</pre>
<p>Default max single-roll values (S-rank) [VERIFY per patch]: ATK% 3%, Flat ATK 19, HP% 3%, DEF% 4.8%, Crit Rate 2.4%, Crit DMG 4.8%, PEN 9, PEN Ratio 2.4%, Anomaly Proficiency 9.</p>
<h2>Crit value (CV)</h2>
<pre class="formula">CV = 2 × Crit Rate% + Crit DMG%</pre>
<p>The standard community convention for comparing crit sticks. Double-weighting crit rate reflects its scarcity on discs.</p>
<h2>Damage model</h2>
<pre class="formula">hit  = ATK × multiplier × (1 + DMG bonus) × (1 − RES)
crit = hit × (1 + Crit DMG)
expected = hit × (1 + CR × CD)</pre>
<p>Penetration, anomaly and stun-window multipliers are deliberately out of scope v1 — the model documents what it includes so results stay auditable.</p>
<h2>Pull / pity model</h2>
<p>Shared HoYo-style model [VERIFY]: base 5★ rate 0.6%, soft pity ramp from ~pull 74 (+6%/pull, community estimate), hard pity 90, 50/50 with carried guarantee. The pull planner exposes every parameter so you can adjust to your game's current behavior.</p>
<h2>The [VERIFY] policy</h2>
<p>Every game value carries a verification flag and the dataset carries a review date (currently <span class="mono">${y}</span>). We label uncertainty instead of presenting guesses as fact. Patch-day updates: re-check sources → update <code>src/data/site.ts</code> → bump the date → note in the <a href="/changelog/">changelog</a>.</p>
<h2>AI-assist disclosure</h2>
<p>Pages were drafted with AI assistance and reviewed by the site operator before publishing. All math is deterministic, auditable client-side code.</p>`,
  },
  {
    slug: 'privacy',
    title: 'Privacy Policy | ZZZ OPTIMIZER',
    desc: 'ZZZ OPTIMIZER privacy in plain language: calculators run in your browser, the wish tracker stays in your browser storage, no tracking cookies.',
    html: `
<p class="note">Last updated: ${y}</p>
<h2>The short version</h2>
<ul>
<li>All calculators run in your browser. <strong>Nothing you type is sent to any server.</strong></li>
<li>The <a href="/pull-planner/">pull planner</a> saves your setup in your browser's localStorage — it never leaves your device, and clearing site data erases it.</li>
<li>No advertising or tracking cookies; no analytics by default; no accounts.</li>
</ul>
<h2>Third parties</h2>
<p>Fonts load from Google Fonts; that is the only external request. If analytics are ever added, this page updates first, with a dated <a href="/changelog/">changelog</a> note.</p>`,
  },
  {
    slug: 'terms',
    title: 'Terms of Use | ZZZ OPTIMIZER',
    desc: 'Terms of use for ZZZ OPTIMIZER: free unofficial Zenless Zone Zero tools provided as-is, no warranty of accuracy.',
    html: `
<p class="note">Last updated: ${y}</p>
<h2>What this site is</h2>
<p>${SITE.disclaimer}</p>
<h2>Accuracy</h2>
<p>Tools are provided <strong>as is, with no warranty of accuracy</strong>. Mechanics are modeled from community sources and estimates; patches change values without notice. Verify anything that matters before pulling or spending on it.</p>
<h2>Acceptable use</h2>
<ul><li>Personal use, freely. Don't resell or rebrand the tools.</li><li>Linking to any page is welcome and needs no permission.</li></ul>
<h2>Limitation of liability</h2>
<p>To the maximum extent permitted by law, the operator is not liable for losses arising from use of the tools — including currency spent on the strength of a calculation.</p>`,
  },
  {
    slug: 'changelog',
    title: "Changelog – What's New | ZZZ OPTIMIZER",
    desc: 'Every real update to ZZZ OPTIMIZER: new tools, patch data reviews, fixes. Dated and honest.',
    html: `
<h2>2026-10-08 — Launch</h2>
<ul>
<li>Shipped four tools: <a href="/disc-scorer/">disc scorer</a>, <a href="/damage-calculator/">damage calculator</a>, <a href="/crit-ratio/">crit ratio analyzer</a>, <a href="/pull-planner/">pull planner</a>.</li>
<li>Roll-cap table and pity model initialized from community sources, marked [VERIFY] pending first patch-day review — see <a href="/methodology/">methodology</a>.</li>
<li>Three guides published: <a href="/guides/how-disc-rolls-work/">disc rolls</a>, <a href="/guides/crit-value-explained/">crit value</a>, <a href="/guides/pull-economy/">pull economy</a>.</li>
</ul>
<h2>Planned</h2>
<ul><li>Agent preset weights for the disc scorer (demand-driven — request yours via <a href="/contact/">contact</a>).</li><li>Inventory scanner research (OCR import).</li></ul>`,
  },
  {
    slug: 'sitemap',
    title: 'HTML Sitemap – All Pages | ZZZ OPTIMIZER',
    desc: 'Every page on ZZZ OPTIMIZER: disc scorer, damage calculator, crit tools, pull planner, guides and site information.',
    html: '',
  },
];

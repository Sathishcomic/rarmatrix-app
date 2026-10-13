# RARMATRIX Technologies — Website

A complete B2B marketing website built with React, JavaScript and Vite, matching the RARMATRIX brand
(navy/blue/purple palette, "Your IT. Our Responsibility.").

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build       # production build → dist/
npm run preview     # preview the production build locally
```

## Pages / Routes

| Route                | Page                                   |
|-----------------------|----------------------------------------|
| `/`                   | Home                                    |
| `/about`               | About RARMATRIX + company journey       |
| `/services`            | All service categories                  |
| `/solutions`           | Resource models, roles, engagement models |
| `/industries`          | Industries served + target client profile |
| `/projects`            | Project categories, delivery process, case studies |
| `/careers`             | Open roles + resume submission          |
| `/resources`           | Knowledge center articles               |
| `/contact`             | Business enquiry form                   |
| `/request-resource`    | Dedicated "Request IT Resource" form    |
| `/start-project`       | Dedicated "Start a Project" form        |

## Structure

```
src/
  components/
    layout/     Header (with dropdown nav + mobile menu), Footer, SocialSidebar
    hero/       Hero, WireSphere (real 3D canvas mesh), ParticleField
    ui/         PillarCard, RoleCard, ServiceBandCard, IndustryCard,
                ProcessTimeline, JourneyTimeline, StatsBar/TrustBar,
                WhyUs, CTASection, ModelDiagram, PageHero
    forms/      ContactForm, ResourceRequestForm, ProjectRequestForm
  data/         navigation.js, services.js, content.js — all editable copy/content
  pages/        One file per route (see table above)
  hooks/        useReveal.js — scroll reveal animation
  index.css     Design tokens (colors, fonts) + shared layout/section styles
```

## Editing content

Almost all text content lives in `src/data/*.js` — edit those files rather than
digging through component JSX for routine copy changes (service descriptions,
industries list, career roles, resource articles, etc).

**Placeholders to replace before launch:**
- `src/data/content.js` → `STATS` (currently sample numbers: 500+ projects, 300+ clients, etc.)
- `src/data/content.js` → `JOURNEY` (currently `[Year]` placeholders)
- `src/data/content.js` → `CASE_STUDIES` (marked "Case Study Coming Soon" until real ones exist)
- `src/components/layout/Footer.jsx` → company address, phone, email
- `src/components/layout/SocialSidebar.jsx` → WhatsApp number, Instagram/LinkedIn URLs
- `src/components/hero/Hero.jsx` → background video URLs (currently stock placeholders)

## Forms — backend integration

All three forms (`ContactForm`, `ResourceRequestForm`, `ProjectRequestForm`) are fully
functional controlled components that currently simulate a submission. Each has a
`// TODO` comment marking exactly where to add a real `fetch()` call once a backend
endpoint exists, e.g.:

```js
await fetch('/api/enquiries', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

This matches the backend-ready architecture called for in the brief (Node.js/Express,
REST API, PostgreSQL/MySQL) — the frontend is already structured to plug into it.

## Deployment

Since this is a client-side single-page app, direct navigation to a route like
`/about` needs a server rewrite to `index.html`. Ready-made configs are included:
- `public/_redirects` — Netlify
- `vercel.json` — Vercel

For other hosts (nginx, Apache, S3+CloudFront), add an equivalent SPA fallback rule.

## Notes

- The hero background video is hotlinked from Pixabay (royalty-free, no attribution
  required). If it's ever blocked by network policy, it fails silently and the
  particle canvas + gradient still render correctly.
- The "3D mesh" spheres in the hero are drawn with real rotation matrices + perspective
  projection on `<canvas>` (see `WireSphere.jsx`) — not a CSS transform illusion.

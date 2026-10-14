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

Service descriptions, role categories, industries and company details are maintained in
`src/data/`. Per-service detail pages are generated from `src/data/services.js`.

## Forms — backend integration

The contact, careers, resource and project forms submit through
`src/services/sheetsService.js` to the configured Google Apps Script web app. Set
`VITE_GOOGLE_SHEET_URL` at build time to override the repository default endpoint.
The service also retains a small local browser backup of submissions.

## Deployment

Since this is a client-side single-page app, direct navigation to a route like
`/about` needs a server rewrite to `index.html`. Ready-made configs are included:
- `public/_redirects` — Netlify
- `public/404.html` — GitHub Pages client-side route fallback
- `vercel.json` — Vercel

For other hosts (nginx, Apache, S3+CloudFront), add an equivalent SPA fallback rule.

## Notes

- The hero uses a particle canvas and wireframe animation.
- The "3D mesh" spheres in the hero are drawn with real rotation matrices + perspective
  projection on `<canvas>` (see `WireSphere.jsx`) — not a CSS transform illusion.

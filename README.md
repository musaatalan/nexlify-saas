# Nexlify — Modern Next.js 14 SaaS Landing Page Template

**Live Demo:** https://nexlify-saas.vercel.app/  
**Buy (Commercial License):** https://musaata.gumroad.com/l/stjrok

Ship a high-converting SaaS landing page in minutes — not weeks.

Built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, **Lucide**, **Framer Motion**, and **Dark / Light** themes (dark by default).

---

## What's included

- Hero with soft neon glow + dashboard mockup
- Social proof / logo strip
- 6-card features grid (hover states)
- Z-pattern interactive product highlight
- Pricing table with Monthly / Yearly toggle (Starter · Pro · Enterprise)
- Testimonials with ratings
- FAQ accordion (Radix)
- Final CTA banner + full footer
- Theme toggle (Dark / Light)
- Fully typed, modular `/components` architecture
- Vercel-ready (zero env vars)

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Customize

1. Open `src/lib/data.ts` — change brand, pricing, FAQs, testimonials
2. Tweak colors in `src/app/globals.css`
3. Deploy: `npx vercel`

Full walkthrough → [`CUSTOMIZE.md`](./CUSTOMIZE.md)  
License terms → [`LICENSE.md`](./LICENSE.md)

## Stack

| Layer | Choice |
|--------|--------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Shadcn-style primitives |
| Icons | Lucide React |
| Motion | Framer Motion |
| Theme | next-themes |

## Project structure

```
src/
  app/           # layout, page, globals
  components/    # landing sections + ui/
  lib/           # data.ts + utils
  types/         # shared TypeScript types
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## License

Commercial use allowed after purchase. See [`LICENSE.md`](./LICENSE.md).  
Resale / redistribution of the template itself is not permitted.

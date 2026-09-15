# Nexlify — SaaS Landing Page Template

Modern, high-converting Next.js SaaS landing page template ready for Vercel.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (Shadcn-style UI primitives)
- Lucide React icons
- Framer Motion animations
- Dark / Light mode (`next-themes`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repository to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Deploy — no extra env vars required

Or use the Vercel CLI:

```bash
npx vercel
```

## Structure

```
src/
  app/                 # App Router entry (layout + page)
  components/          # Landing sections + UI primitives
  lib/                 # Utilities + content data
  types/               # Shared TypeScript types
```

## Scripts

| Command         | Description              |
|-----------------|--------------------------|
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

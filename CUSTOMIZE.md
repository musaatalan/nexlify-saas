# Customize Nexlify in 10 Minutes

All customer-facing copy lives in one file.

## 1. Brand & copy

Edit: `src/lib/data.ts`

| Field | What to change |
|--------|----------------|
| `siteConfig.name` | Your product name |
| `siteConfig.tagline` | Main headline support line |
| `siteConfig.description` | Hero + SEO description |
| `navLinks` | Menu anchors |
| `logos` | Social-proof brand placeholders |
| `features` | Feature grid cards |
| `pricingPlans` | Prices, features, CTAs |
| `testimonials` | Quotes and names |
| `faqs` | FAQ accordion |
| `footerColumns` | Footer link groups |

## 2. Colors

Edit CSS variables in `src/app/globals.css`:

- `--accent` — primary CTA / highlights (teal by default)
- `--secondary` — gradient companion
- `--background` / `--foreground` — page canvas

Light and dark tokens are both defined (`:root` and `.dark`).

## 3. Fonts

Configured in `src/app/layout.tsx` via `next/font`:

- Display: **Syne** (`--font-syne`)
- Body: **Outfit** (`--font-outfit`)

Swap for any Google Font and update `tailwind.config.ts` if needed.

## 4. Sections

Toggle or rearrange sections in `src/app/page.tsx`:

```tsx
<Hero />
<SocialProof />
<Features />
<FeatureHighlight />
<Pricing />
<Testimonials />
<Faq />
<CtaBanner />
```

## 5. Deploy

```bash
npm install
npm run build
npx vercel --prod
```

No environment variables required for the demo template.

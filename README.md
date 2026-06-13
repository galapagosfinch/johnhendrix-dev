# John Hendrix Memorial Prayer Walk — Website

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed on [Cloudflare Pages](https://pages.cloudflare.com).

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:4321 in your browser.

## Project Structure

```
src/
├── data/
│   └── trail-markers.json     ← Edit trail marker content here
├── layouts/
│   └── Layout.astro           ← Global header, footer, sticky mobile bar
├── pages/
│   ├── index.astro            ← Homepage (Meet John Hendrix)
│   ├── prayerwalk.astro       ← Prayer Walk trail guide
│   ├── books.astro            ← Books resource page
│   ├── geocaching.astro       ← Geocaching page
│   ├── find-us.astro          ← Directions and map
│   └── donate.astro           ← Donation page
└── styles/
    └── global.css             ← Global styles and Tailwind config

public/
└── .well-known/
    └── apple-developer-merchantid-domain-association  ← Apple Pay domain file
```

## Content Updates

### Trail markers
Edit `src/data/trail-markers.json` — no code changes needed.

### Stripe donation link
In `src/pages/donate.astro`, replace the `stripeUrl` placeholder with your Stripe Payment Link URL.

### Geocaching cache URL
In `src/pages/geocaching.astro`, replace `geocachingUrl: "#"` with the real Geocaching.com cache listing URL.

### Apple Pay setup
1. Create a Stripe account and register your domain for Apple Pay
2. Download the domain verification file from Stripe
3. Replace the contents of `public/.well-known/apple-developer-merchantid-domain-association`

## Deploying to Cloudflare Pages

1. Push this repository to GitHub
2. Log in to Cloudflare Pages → Create a project → Connect to Git
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Done — Cloudflare handles SSL, CDN, and deployment automatically.

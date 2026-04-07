# PeptideRx Direct

Prescription Peptide Therapy — Delivered. A production-ready Next.js 14 telehealth website for direct-to-consumer peptide therapy.

## Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (marketing)/        # Pages with Header/Footer layout
│   │   ├── page.tsx        # Homepage
│   │   ├── peptides/       # Peptide detail pages
│   │   ├── pricing/        # Pricing page
│   │   ├── how-it-works/   # How it works
│   │   ├── about/          # About page
│   │   ├── blog/           # Blog listing + posts
│   │   ├── faq/            # FAQ page
│   │   ├── contact/        # Contact page
│   │   ├── terms/          # Terms of Service
│   │   ├── privacy/        # Privacy Policy
│   │   └── telehealth-consent/
│   ├── lp/                 # Landing pages (minimal layout)
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── ui/                 # Reusable UI primitives
│   ├── sections/           # Page section composites
│   ├── conversion/         # CRO/conversion elements
│   ├── layout/             # Header, Footer, Breadcrumbs
│   └── motion/             # Framer Motion wrappers
├── data/                   # Static content data
├── lib/                    # Utilities (GTM, UTM, schema, etc.)
└── types/                  # TypeScript type definitions
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/peptides/[slug]` | Individual peptide pages (6 peptides) |
| `/pricing` | Pricing comparison |
| `/how-it-works` | Process overview |
| `/about` | About & team |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog posts (5 articles) |
| `/faq` | FAQ page |
| `/contact` | Contact form |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |
| `/telehealth-consent` | Telehealth Consent |
| `/lp/[slug]` | Paid traffic landing pages |

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager ID |
| `NEXT_PUBLIC_SITE_URL` | Production site URL |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Support email address |

## Deployment

This project is optimized for Vercel deployment:

```bash
npx vercel
```

## Content Editing

All content is stored as TypeScript objects in `src/data/`:

- `peptides.ts` — Peptide information and pages
- `blog-posts.ts` — Blog articles
- `pricing.ts` — Pricing tiers
- `faqs.ts` — FAQ content
- `testimonials.ts` — Patient testimonials
- `team.ts` — Medical advisory board
- `landing-pages.ts` — Landing page configurations
- `navigation.ts` — Navigation structure

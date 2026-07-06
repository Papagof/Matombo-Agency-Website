# Matombo Agency

A modern marketing agency website for **Matombo Agency** — a growth studio specializing in the hospitality space: hotels & shortlets, restaurants & lounges, and real estate.

Built with a warm, upscale, editorial aesthetic (deep charcoal / emerald / gold) and full dark-mode support.

## Tech stack

- **Next.js 14** (App Router, Server Components)
- **TypeScript**
- **Tailwind CSS** with a custom hospitality palette + CSS variables
- **Framer Motion** for scroll reveals, counters, and carousels
- **shadcn/ui** primitives (Button, Card, Accordion, Input, Select, …)
- **Lucide React** icons
- **next/font** — Fraunces (serif headlines) + Inter (body)
- **next/image** for optimized imagery (Unsplash)
- **next-mdx-remote** for the MDX-powered blog
- **react-hook-form + zod** for validated forms

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open the site
# http://localhost:3000
```

### Other scripts

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Project structure

```
app/
  layout.tsx            # Root layout: fonts, theme, header/footer, metadata
  page.tsx              # Homepage (all sections)
  loading.tsx           # Global loading state
  error.tsx             # Global error boundary
  not-found.tsx         # 404 page
  sitemap.ts            # Dynamic sitemap.xml
  robots.ts             # robots.txt
  api/contact/route.ts  # Contact form endpoint (logs submissions)
  about/                # About page
  industries/           # Industries detail page
  work/                 # Case study index + [slug] detail
  pricing/              # Pricing page
  blog/                 # Blog index + [slug] MDX post pages
  contact/              # Contact page + form

components/
  ui/                   # shadcn primitives (button, card, accordion, …)
  layout/               # header, footer, logo, theme provider/toggle
  sections/             # Homepage sections (hero, services, pricing, …)
  forms/                # contact-form, newsletter-form
  reveal.tsx            # Framer Motion scroll-reveal helpers
  animated-counter.tsx  # Animated stat counters
  mdx-content.tsx       # MDX renderer + prose styling
  section-heading.tsx   # Shared section heading
  page-hero.tsx         # Shared secondary-page hero

content/blog/           # MDX blog posts (frontmatter + markdown)

lib/
  content.ts            # All non-blog site copy (edit here to update the site)
  blog.ts               # MDX loading, frontmatter, reading time
  utils.ts              # cn() + date helpers
```

## Editing content

- **Marketing copy** (hero, services, industries, case studies, pricing, FAQ,
  testimonials, stats, nav): edit [`lib/content.ts`](lib/content.ts). Everything
  is typed and centralized.
- **Blog posts**: add a `.mdx` file to [`content/blog/`](content/blog) with the
  frontmatter fields `title`, `excerpt`, `date`, `author`, `tags`, `cover`,
  `coverAlt`. Reading time is calculated automatically.
- **Colors / theme**: edit the CSS variables in
  [`app/globals.css`](app/globals.css) (light + `.dark`).

## Forms

The contact form (`react-hook-form` + `zod`) posts to `POST /api/contact`,
which validates and **logs** the submission to the server console. Wire this
route up to your CRM, an email service (e.g. Resend/SendGrid), or a database to
go live. The footer newsletter form is a client-side placeholder that logs the
email — connect it to your ESP when ready.

## SEO

- Per-page metadata via the Next.js Metadata API, with Open Graph + Twitter tags.
- Dynamic `sitemap.xml` (static routes + case studies + blog posts).
- `robots.txt` allowing crawl of everything except `/api`.
- Set the production domain in `siteConfig.url` (`lib/content.ts`) so absolute
  URLs and `metadataBase` resolve correctly.

## Notes

- Imagery uses Unsplash URLs as placeholders. Swap them for your own shoots via
  `lib/content.ts` and the blog frontmatter.
- Dark mode uses `next-themes` with a header toggle; it respects system
  preference and persists the choice.
- Animations respect `prefers-reduced-motion`.

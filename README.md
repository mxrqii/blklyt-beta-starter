
# BLKLYT — beta site

Modern, dark, and fast. Next.js 14 + Tailwind. Deployed to Vercel at **beta.blklyt.org**.

## Quick start
```bash
npm i
npm run dev
```
Visit http://localhost:3000

## Deploy (Vercel)
1. Create a new Vercel project, import this repo.
2. Framework preset: Next.js. Build command: `next build`, Output: `.next`.
3. Add domain alias: `beta.blklyt.org` in Vercel -> Domains.
4. In your DNS (where blklyt.org is managed), add a **CNAME** for `beta` -> `cname.vercel-dns.com` (Vercel shows the exact target).

## Content
- **/app** — App Router pages.
- **/data/events.json** — edit your shows here (or wire to Notion later).
- **/app/store** — temporarily links to your existing Squarespace shop.

## Customize
- Brand color lives in `tailwind.config.js` (`brand`).
- Global meta inside `app/layout.tsx` (`metadata`). Replace social links in JSON-LD.
- Replace `/public/logo.svg` and `/public/og.png`.

## Roadmap
- Swap `events.json` for a Notion or Google Sheet source.
- Add analytics (e.g., Plausible): drop script in `app/layout.tsx`.
- Migrate store to Shopify or embed Squarespace collections via linkouts.

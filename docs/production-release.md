# Production release checklist

This project is a static marketing website. Phase 5A is pre-release only; it does not deploy, change DNS, commit, or push changes.

## Requirements

- Node.js 20.9+ and a compatible npm version.
- `NEXT_PUBLIC_SITE_URL=https://nuocdongchaio2.com` in the production build environment.
- No production secrets are required by this site.

## Build and run

```text
npm install
npm run lint
npm run typecheck
npm run build
npm run start
```

The production URL configuration is required so canonical URLs, Open Graph URLs, JSON-LD, `robots.txt`, and `sitemap.xml` use the real domain. A production build fails clearly if the variable is missing or invalid.

## Canonical routes

- `/`
- `/gioi-thieu`
- `/san-pham`
- `/lien-he`
- `/san-pham/binh-20l-tieu-chuan`
- `/san-pham/combo-4-binh-20l`
- `/san-pham/chai-250ml-tien-loi`
- `/robots.txt`
- `/sitemap.xml`

Legacy permanent redirects are `/about` → `/gioi-thieu` and `/products` → `/san-pham`.

## Post-deploy verification

- [ ] Homepage, About, Products, Contact, and all product detail routes return 200.
- [ ] `/about` and `/products` return permanent redirects to their new routes.
- [ ] An unknown page and an invalid product slug return the branded 404 response.
- [ ] `robots.txt` is plain text and points to the production sitemap.
- [ ] `sitemap.xml` contains only canonical indexable routes.
- [ ] Canonical, Open Graph, Twitter, and JSON-LD URLs use `https://nuocdongchaio2.com`.
- [ ] Mobile navigation and the mobile action bar do not obstruct content.
- [ ] Phone and email links work.
- [ ] HTTPS is active and the chosen www/non-www behavior is confirmed.
- [ ] Only after the site is confirmed healthy: verify indexing and submit the sitemap through the chosen search tooling.

No news, process, quality, blog, testimonial, FAQ, database, API, authentication, or order-persistence feature is part of this release.

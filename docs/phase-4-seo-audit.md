# Phase 4 — SEO audit and content foundation

Ngày audit: 2026-09-28  
Scope: static marketing website only. Không có backend, database, authentication, order API hoặc persistence.

## SEO_OK

### Canonical routes

| Route | Title | Description | Canonical | OG URL | Indexability |
|---|---|---|---|---|---|
| `/` | Nước đóng chai O2 \| Tinh khiết cho mọi nhu cầu | Site-wide factual brand/product introduction | `/` | `/` | Indexable |
| `/gioi-thieu` | Giới thiệu O2 \| Nước tinh khiết i-on kiềm | Company and product-context introduction | `/gioi-thieu` | `/gioi-thieu` | Indexable |
| `/san-pham` | Sản phẩm \| Nước tinh khiết O2 | Product catalog description | `/san-pham` | `/san-pham` | Indexable |
| `/lien-he` | Liên hệ \| Đặt nước O2 | Contact and static conversion information | `/lien-he` | `/lien-he` | Indexable |
| `/san-pham/[slug]` | Product-specific title | Product short description | Product URL | Product URL | Indexable |

All production URLs are generated from `NEXT_PUBLIC_SITE_URL`. No canonical uses `ionkiemo2.vn`.

### Structured data

- One centralized Organization JSON-LD from `src/app/layout.tsx`.
- Product detail pages include one minimal Product JSON-LD with name, description, image, brand and canonical URL.
- Product JSON-LD does not include offers, price, availability, review or aggregateRating.
- Product detail and `/gioi-thieu` include BreadcrumbList JSON-LD with absolute URLs.
- No certification, medical, review or rating schema exists.

### Open Graph / Twitter

- `og:title`, `og:description`, `og:url`, `og:type` exist per page.
- Default OG image is the real `big-bottle.png` asset at 421×593.
- Product pages use their actual product image and source dimensions.
- Twitter uses `summary_large_image` with the same valid image URL.
- No Twitter account is declared.

## SEO_FIXED

- Added page-specific OG image options to metadata helper.
- Corrected OG dimensions to match the source assets.
- Added product-specific OG image metadata.
- Added centralized Organization address from verified site config.
- Added custom `/not-found` branded page.
- Added internal `/lien-he` → `/san-pham` link.
- Added SEO content plan without creating fake articles.
- Confirmed sitemap includes only canonical routes and product detail pages.

## SEO_LIMITATIONS

- No news/article pages exist because no real articles, dates or authors are available.
- No `/quy-trinh-san-xuat` or `/chat-luong` routes exist because Phase 3 content audit found insufficient verified data.
- The source product image for the 20L bottle is only 421×593; it is not upscaled in the UI.
- Browser/screenshot visual QA is unavailable; responsive validation is code-level.

## Internal linking map

```text
Homepage → Giới thiệu
Homepage → Sản phẩm
Homepage → Liên hệ/order CTA
Sản phẩm → Product detail
Product detail → Related products
Product detail → Liên hệ?product=<slug>
Giới thiệu → Sản phẩm
Giới thiệu → Hotline / Email
Liên hệ → Sản phẩm
```

No links are created to `/quy-trinh-san-xuat`, `/chat-luong` or future news routes.

## Heading audit

- Each canonical page has one logical H1.
- Product cards use H3 under product listing/detail sections.
- Section titles use H2.
- 404 has one H1.
- No heading is used only for visual styling.

## Image SEO audit

- All product/brand images use `next/image`.
- All content images have descriptive alt text.
- Product images use explicit source dimensions and responsive `sizes`.
- Decorative backgrounds are CSS-only and do not need alt text.
- No image path references a missing asset.

## Health claim audit

### VERIFIED_SOURCE_CLAIM

- Existing source language identifies O2 as a provider of i-on alkaline drinking water.
- Product/use-context content describes family, office, long-term use and portable 250ml use.

### UNVERIFIED_HEALTH_CLAIM

No production-visible claims about curing, treating, preventing disease, cancer, detox, body alkalization, pH balancing or therapeutic effects were added or found in current production page copy.

`UNVERIFIED_HEALTH_CLAIMS=0`

## Future CONTENT_PLAN

Ideas only; no articles have been created or exposed:

1. `Nước i-on kiềm là gì?` — only after the brand provides approved factual educational content; avoid medical claims.
2. `Chọn bình nước 20L cho gia đình và văn phòng` — product/use-context article based on the existing 20L product.
3. `Khi nào nên chọn chai nước 250ml?` — practical use-context article based on the existing 250ml product.
4. `Các lựa chọn nước uống O2 theo nhu cầu sử dụng` — catalog-oriented guide without health claims.

Before publishing, each article needs verified copy, author policy, publication date and approved image assets. No fake author/date is present.

## Static architecture review

- No `src/app/api` route.
- No database client, ORM, authentication or third-party persistence dependency.
- Contact form remains client-only and explicitly tells users to call the verified hotline.
- No article data file is created because there is no current content to represent.

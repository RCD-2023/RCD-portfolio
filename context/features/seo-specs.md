# Improve SEO

## Overview

Implement fundamental technical SEO improvements to `index.html` and the project root, based on the SEO audit findings below. Keep changes simple and production-ready — no content marketing, keyword stuffing, or backlink strategies.

The site is deployed at two domains:
- https://rcd-portfolio.netlify.app/
- https://webdevstart.com/

A canonical domain at:  `webdevstart.com` for canonical/OG/sitemap URLs.

## Requirements

### High priority

1. **`<title>`** — replace the generic `RCD-webdev` with a unique, descriptive, keyword-rich title (e.g. "Codreanu Daniel | Web Developer Portfolio").
2. **Meta description** — add a `<meta name="description">` summarizing the site (~150–160 chars).
3. **Canonical URL** — add `<link rel="canonical">` pointing to the chosen primary domain to avoid duplicate-content issues across the two deployments.
4. **Open Graph tags** — add `og:title`, `og:description`, `og:image`, `og:url`, `og:type` for link previews (LinkedIn, Discord, etc.).
5. **Twitter Card tags** — add `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.
6. **`robots.txt`** — create at project root with `Allow: /` and a reference to `sitemap.xml`.
7. **`sitemap.xml`** — create at project root listing the canonical homepage URL.
8. **Favicon `<link>` tags** — add explicit `<link rel="icon">` (and related) tags in `<head>` referencing the existing `images/favicon-48.png`.

### Medium priority

9. **Schema.org structured data** — add a `Person` or `WebSite` JSON-LD block in `<head>` to help search engines understand this is a developer portfolio/personal brand page.

### Out of scope

- Alt attributes — keep all `alt` attributes empty (`alt=""`), including the placeholder `alt="..."` on the carousel images in modals 2, 3, and 4. Do not add descriptive alt text anywhere.
- Image dimensions — adding `width`/`height` attributes to `<img>` elements broke the card/carousel layout (Bootstrap relies on intrinsic sizing for `img-fluid`/`w-100`). Reverted; not pursuing.
- Image compression/optimization (performance audit).
- `theme-color` / manifest tags.
- Heading hierarchy changes (already addressed in a prior pass).

## For each change

1. Explain why it is needed.
2. Show the exact files modified.
3. Keep the implementation simple and production-ready.

## References

- @context/project-overview.md

## Expected results

- `index.html` updated with title, meta description, canonical, OG/Twitter tags, favicon links, structured data, and image dimensions
- New `robots.txt` and `sitemap.xml` at project root
- Site verified in the browser after changes

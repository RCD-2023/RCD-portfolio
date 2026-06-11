# Current Feature

## Status

Completed

## Goals

## Notes

## History

<!-- Keep this Updated after every feature completion. Earliest to Latest. -->

- 2026-06-08: Fix Html Semantic issues — completed on branch `fix/html-semantic-issues`. Fixed heading hierarchy, converted modal-trigger `<a>` to `<button>`, added `aria-label`/`aria-hidden` attributes, replaced carousel placeholder alt text (modals 1-4), moved contact form into its own `<section>`, removed dead/commented-out markup, and removed redundant project-type badges from project cards. `npm run sass:build` passes.
- 2026-06-11: Reorder Project Cards — completed on branch `feature/cards-reordering`. Reordered the 6 project cards to the new sequence (Row 1: `#modal1`, `#modal6`, `#modal5`; Row 2: `#modal3`, `#modal4`, `#modal2`), updated card and modal `<h3>` titles to match the spec wording, and fixed tech-stack badge typos ("Phyton" → "Python", "Tailwind Css" → "Tailwind CSS", "Claude Sonet" → "Claude Sonnet"). `npm run sass:build` passes.
- 2026-06-11: Improve SEO — completed on branch `feature/seo-improvements`. Added `<title>`, meta description, canonical URL (`webdevstart.com`), Open Graph and Twitter Card tags, favicon `<link>` tags, and a `Person` JSON-LD schema to `index.html`'s `<head>`. Created `robots.txt` and `sitemap.xml` at project root. `alt` attributes left empty as-is; `width`/`height` on `<img>` elements was tried but reverted (broke Bootstrap card/carousel layout).

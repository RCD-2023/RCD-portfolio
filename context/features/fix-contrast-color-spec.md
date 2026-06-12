# Fix Color Contrast Accessibility Issues

## Overview

Lighthouse reports "Background and foreground colors do not have a sufficient contrast ratio." Apply minimal color tweaks to the affected elements so they meet WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large/bold text), without significantly altering the current design.

## Audit Findings

| # | Element | Color combination | Current ratio | Required |
|---|---------|--------------------|----------------|----------|
| 1 | `.navbar .nav-link` (Services, Projects, About Me, Contact) | `rgba(0,0,0,0.65)` on `bg-primary` (`#39c`) | ~4.0:1 | 4.5:1 |
| 2 | Footer `<h2>Contact me</h2>` and `#copy-right` | `text-info-text-emphasis` (`#055160`) on `.footer` (`#217dbb`) | ~2.0:1 | 4.5:1 |
| 3 | Hero `<p class="fs-5 text-white mt-5">` | `text-white` on `.header` (`#3498db`) | ~3.15:1 | 4.5:1 |
| 4 | "Services" / "Projects" section badges | white badge text on `bg-primary` (`#39c`) | ~3.2:1 | 4.5:1 |

Optional/borderline:

| # | Element | Color combination | Current ratio | Required |
|---|---------|--------------------|----------------|----------|
| 5 | `.modal-content.bg-secondary .text-muted` (project descriptions) | `rgba(33,37,41,0.75)` on `bg-secondary` (`#10bcee`) | ~4.3:1 | 4.5:1 |

## Requirements for phase 1

- Bootstrap version 5.3.8
- Fix issues #1-4 (clear AA failures)
- Keep changes minimal: small color/opacity tweaks only, no layout or markup structure changes
- Preserve existing color families (blue header/footer stay blue, badges stay `bg-primary`, etc.)

## Proposed changes

1. **Navbar links** — increase `.nav-link` color opacity from default `rgba(0,0,0,0.65)` to `rgba(0,0,0,0.75)` (~4.9:1)
2. **Footer heading & copyright** — change `text-info-text-emphasis` to `text-white` on both elements (consistent with existing footer form labels), and darken `.footer` background from `#217dbb` to `#1f78b4` (~4.8:1)
3. **Hero paragraph** — darken `.header` background from `#3498db` to `#2678ad` (~4.8:1 for white text)
4. **Section badges** — override `.badge.bg-primary` text color from white to `#212529` (~4.8:1)

## Optional (phase 2, if requested)

5. Increase `.modal-content.bg-secondary .text-muted` color opacity from `0.75` to `0.85` (~5.3:1)

## References

- @context/project-overview.md

## Expected results

- `index.html` / `scss/styles.scss` updated with the agreed contrast fixes
- `npm run sass:build` passes
- Lighthouse accessibility "color contrast" issue resolved
- Site verified in the browser after changes (visual check of navbar, hero, footer, badges)

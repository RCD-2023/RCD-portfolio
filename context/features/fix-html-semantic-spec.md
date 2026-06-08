# Fix Html Semantic issues

## Overview

Apply the suggested changes from the HTML semantic audit (@context/features/html-semantic-spec.md) to `index.html`.

## Requirements for phase 1

- Bootstrap version 5.3.8
- Fix heading hierarchy issues (skipped/inverted heading levels, duplicate `<h1>`)
- Replace `<a>` elements without `href` that trigger modals with `<button type="button">`
- Add accessible names (`aria-label`) to icon-only controls (modal close buttons, scroll-to-top button)
- Add `aria-hidden="true"` to purely decorative icons
- Replace placeholder `alt="..."` text on carousel images with descriptive alt text
- Review sectioning of the contact form (currently nested inside `<footer>`)
- Remove dead/commented-out markup

## References

- @context/project-overview.md
- @context/features/html-semantic-spec.md (original audit spec and findings)

## Expected results

- `index.html` updated with the agreed semantic fixes
- `npm run sass:build` passes
- Site verified in the browser after changes

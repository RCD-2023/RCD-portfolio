# Current Feature

Fix Html Semantic issues - Apply the suggested changes from the HTML semantic audit to index.html.

## Status

Completed

## Goals

- Fix heading hierarchy issues (skipped/inverted heading levels, duplicate `<h1>`)
- Replace `<a>` elements without `href` that trigger modals with `<button type="button">`
- Add accessible names (`aria-label`) to icon-only controls
- Add `aria-hidden="true"` to purely decorative icons
- Replace placeholder `alt="..."` text on carousel images with descriptive alt text
- Review sectioning of the contact form (currently nested inside `<footer>`)
- Remove dead/commented-out markup
- Ensure compatibility with Bootstrap version 5.3.8

## Notes

- Spec: @context/features/fix-html-semantic-spec.md
- Original audit: @context/features/html-semantic-spec.md
- Reference: @context/project-overview.md
- Reference: @context/ai-interaction.md
- Reference: @context/coding-standards.md

## History

<!-- Keep this Updated after every feature completion. Earliest to Latest. -->

- 2026-06-08: Fix Html Semantic issues — completed on branch `fix/html-semantic-issues`. Fixed heading hierarchy, converted modal-trigger `<a>` to `<button>`, added `aria-label`/`aria-hidden` attributes, replaced carousel placeholder alt text (modals 1-4), moved contact form into its own `<section>`, removed dead/commented-out markup, and removed redundant project-type badges from project cards. `npm run sass:build` passes.
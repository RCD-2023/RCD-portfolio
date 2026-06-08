## Project overview

This is **Codreanu Daniel's (RCD) personal portfolio website** — a static, single-page site built with plain HTML, SCSS/CSS, and vanilla JavaScript (no framework, no build pipeline beyond Sass compilation, no backend). It's deployed at https://rcd-portfolio.netlify.app/ and https://webdevstart.com/

The site presents the author as an aspiring/entry-level web developer: a hero header, a services section, a showcase of selected projects (opened via Bootstrap modals/carousels), an "About Me" section with a tech-skill list, and a contact form.

## Tech stack

- **HTML5** — single page, `index.html` (~800 lines) contains the entire site markup including all project modals
- **SCSS/CSS** — authored in `scss/`, compiled to `css/` via Dart Sass
- **JavaScript (ES6+)** — vanilla JS in `js/script.js`; no module bundler
- **Bootstrap 5.3+** — layout, navbar, cards, modals, carousels (`js/bootstrap.bundle.min.js`, `css/bootstrap.css`)
- **Bootstrap Icons** and **Font Awesome 7** — icon sets
- **Formspree** — handles contact-form email delivery (form POSTs via `fetch`, no backend of our own)
- **Google Fonts** — "Open Sans" loaded via `<link>` in `<head>`

## Repository layout

```
index.html          Entire page markup: navbar, header, services, projects, modals, about-me, footer, contact form
js/
  script.js         All custom JS: scroll/navbar effects, scroll-to-top button, contact-form submit handler, dynamic footer year
  bootstrap.bundle.min.js   Vendored Bootstrap JS bundle
scss/
  styles.scss       Custom site styles (source of truth for css/styles.css)
  bootstrap.scss    Bootstrap source import
  fontawesome.scss  Font Awesome source import
css/                Compiled output of scss/ (do not hand-edit; regenerate via sass)
images/             All site imagery, organized into per-project subfolders (e.g. culinar-img/, crypto-img/, flixxApp-img/, nextjsproj-im/, dataCollect-images/, otherapps-img/)
assets/RCD_CV.pdf   Author's CV, linked from the About Me section
webfonts/           Font Awesome webfont files
.vscode/settings.json   Live Server port config (5501)
```

## Build & development commands

Sass is the only build step; everything else is served statically.

```bash
npm install           # install Sass/Bootstrap/FontAwesome deps
npm run sass:watch    # compile scss/ -> css/ continuously while developing
npm run sass:build    # one-off production compile (--no-source-map)
```

There is no test suite, linter script, or bundler configured. Use VS Code's Live Server (port 5501, see `.vscode/settings.json`) or any static file server to preview `index.html`.


## Working in project codebase

- **Edit SCSS, not CSS.** `css/*.css` is generated output from `scss/*.scss`; hand edits will be overwritten on the next `sass:build`/`sass:watch` run. Always change `scss/styles.scss` (or the relevant partial) and recompile.
- **Single-file HTML.** All page content — including all six project modals (`#modal1`–`#modal6`) and their carousels — lives in `index.html`. When adding/editing a project, the card in the "Projects" section (`#projects`) and its corresponding modal must be kept in sync (matching `data-bs-target` / `id`, images, and copy).
- **Project images** are grouped per-project under `images/<project>-img(es)/`. Follow the existing naming convention (`<project>_imgN.png` or `<project>-imgN.png`) when adding new screenshots.
- **`js/script.js`** is small and handles exactly four things: navbar scroll-state styling, the scroll-to-top button, the Formspree contact-form submit (via `fetch`/async-await with success/error UI feedback), and injecting the current year into the footer. Keep additions in this same lightweight, dependency-free style — don't introduce a framework or bundler for this site.
- **Cache-busting**: `script.js` is referenced with a query string (`js/script.js?v=2`); bump this version string when shipping JS changes so returning visitors get the fresh file.
- **Contact form**: submission is intercepted in JS and POSTed to Formspree with `Accept: application/json`; success/error states are shown in `#formState` and auto-hidden after a delay (`hideMessage`). There is no server-side code in this repo to modify for form behavior — only the client-side handler and Formspree endpoint configured in the form's `action`.
- **Accessibility/compat hints**: `.hintrc` configures `webhint` (extends `development`) with specific overrides (ignores `-webkit-text-size-adjust`/`user-select` compat warnings, disables `axe` button/link `name-role-value` checks). Be aware these checks are intentionally relaxed — don't "fix" what the config explicitly silences without discussing it.
- This is a **personal/portfolio site with no backend, database, or build pipeline beyond Sass** — keep changes proportional to that scope (no need for routing, state management, testing infra, etc. unless explicitly requested).

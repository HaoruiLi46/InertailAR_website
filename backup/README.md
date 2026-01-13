# InertialAR Project Page

This folder is a self-contained project page template (HTML/CSS/JS + local placeholders).

## Quick Start (GitHub Pages)

Recommended: create a new repository (e.g., `InertialAR`) and make this folder the repo root.

1. Copy all files under `InertialAR/` into the new repository root.
2. Push to `main`.
3. In GitHub: `Settings → Pages → Deploy from a branch → main / (root)`.

Your site will be available at:

```
https://<username>.github.io/<repo>/
```

## What to Edit

- Title/subtitle/authors/affiliations: `index.html`
- Paper/Code links: `index.html`
- Replace figures (PNG/GIF): put your files in `figures/` and update the `<img src="...">` paths in `index.html`
  - Teasers (2 rows): `figures/teaser_unconditional.svg`, `figures/teaser_conditional.svg`
  - Architecture: `figures/03_model_page-0001.jpg`
  - Unconditional results: `figures/uncond_table.png`
  - Conditional CFG visualization: `figures/case_study3_page-0001.jpg`
  - Conditional results: `figures/cond_table.png`
- BibTeX: `index.html` (`<textarea id="bibtex">`)

## Local Preview

If you keep this folder inside another repository (like the current layout), preview via:

From the repository root:

```
python3 -m http.server 8000
```

Then open:

```
http://localhost:8000/InertialAR/
```

If you copy the contents of `InertialAR/` into a new repository root (recommended for a standalone project page), open:

```
http://localhost:8000/
```

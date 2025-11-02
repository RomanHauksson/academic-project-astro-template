# AI agent guide for this repo

This repo is an Astro 5 + MDX site with optional React "islands," Tailwind CSS v4, KaTeX, and a small PDF→image pipeline. It renders a single-page research project site from `src/paper.mdx` using `src/pages/index.astro` as the layout and a curated set of components.

## Architecture and key files

- Astro + MDX content
  - Entry content: `src/paper.mdx` (MDX with YAML frontmatter). Frontmatter keys: `title`, `authors`, `conference`, `notes`, `links`, `description`, `favicon`, `thumbnail`, `theme`.
  - Layout: `src/pages/index.astro` imports the content and frontmatter from `src/paper.mdx`, sets `<html data-theme>`, OpenGraph tags, favicon, and uses `import.meta.env.BASE_URL` to prefix public assets for GitHub Pages.
- Components (examples)
  - `Figure.astro` provides a consistent figure/caption pattern via named slots `figure` and `caption`.
  - `Picture.astro` wraps `astro:assets` with PDF support via `src/lib/render-pdf.ts`. `src` accepts either an `ImageMetadata` import or a string path ending with `.pdf` (path is resolved relative to `./src/pages/`).
  - `Video.astro`, `YouTubeVideo.astro`, `LaTeX.astro` (server-side KaTeX), `ModelViewer.astro` (`<model-viewer>`), `Comparison.tsx` (React compare slider). React components require a `client:*` hydration directive when used inside MDX/`.astro`.
- Styling
  - Tailwind v4 via `@tailwindcss/vite`; global styles in `src/styles/global.css` with a custom `dark` variant keyed off `data-theme`.
  - Code blocks themed with `astro-expressive-code` (see `astro.config.ts` styleOverrides and theme selector).
- TypeScript & paths
  - TS strict config with JSX set to React; alias `@/*` → `./src/*` in `tsconfig.json`.

## Developer workflows

- Node.js: Local docs recommend Node 24+. CI uses Node 20 (see `.github/workflows/astro.yml`). If you adopt Node 24-only features, update the workflow accordingly.
- Install & run
  - `npm install`
  - `npm run dev` → http://localhost:4321
  - `npm run build` runs typecheck (`astro check`) then `astro build`
  - `npm run preview` serves the built site
- Lint/format (configured but no npm scripts):
  - ESLint: `eslint.config.ts` covers JS/TS/TSX, Astro, JSON, Markdown, and CSS (Tailwind v4 syntax). Run with `npx eslint .`.
  - Prettier: `prettier.config.ts` with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`. Run with `npx prettier -w .`.
- Deploy
  - GitHub Pages is the default. Pushing to `main` builds and deploys via `.github/workflows/astro.yml`. The workflow passes `--site`/`--base`, so use `import.meta.env.BASE_URL` for public URLs (the layout in `src/pages/index.astro` already handles favicon/OG). Vercel/Netlify buttons also exist in `README.md`.

## Project-specific conventions

- Content lives in `src/paper.mdx`; import components at top and optionally map MD elements (e.g., `export const components = { table: Table }`).
- Layout logic lives in `src/pages/index.astro`, which imports the content and frontmatter from `src/paper.mdx` using `import { Content, frontmatter } from "../paper.mdx"`.
- Use the provided components for consistent layout:
  - Wrap visuals in `<Figure>` with slots: `<slot name="figure"/>` and `<slot name="caption"/>`.
  - Prefer `<Picture>` for images. It accepts:
    - imported images (Astro's `ImageMetadata`) for optimized images; or
    - a relative PDF path like `"../assets/plot.pdf"` to auto-render page 1 to PNG during build/dev.
  - For React, import the component and add a hydration directive where used, e.g., `<Comparison client:idle>…</Comparison>`.
- Theme handling
  - Set `theme` in frontmatter to `device | light | dark`. The layout in `src/pages/index.astro` writes `data-theme` and Tailwind's custom `dark` variant reads it. Use class `dark:*` utilities as needed; you can invert images in dark mode via `<Picture invertInDarkMode />`.
- Assets & paths
  - Public assets in `public/` are served at the base URL; when constructing absolute URLs in the layout (`src/pages/index.astro`) or components, prefix with `import.meta.env.BASE_URL` (the layout already exposes `prefix`).
  - PDF conversion reads from `./src/pages/<path>` and writes to `dist/_astro/<name>.png`. In dev, `Picture.astro` points to `../dist/_astro/...`; in prod it points to `_astro/...`. Only the first page is rendered at 4× scale.

## Integration points and examples

- Icons via `astro-icon` using Iconify sets (see dependencies `@iconify-json/academicons`, `@iconify-json/ri`). Example: frontmatter `links` items include `icon: academicons:arxiv`.
- Code blocks are styled by `astro-expressive-code`; don't manually theme them—follow the existing configuration in `astro.config.ts`.
- To add a new interactive component:
  1. Create it under `src/components/` (Astro or React).
  2. Import it in `src/paper.mdx`.
  3. For React, add `client:*` (e.g., `client:idle`) at the usage site.

If anything here seems off or incomplete (tests aren’t defined, additional pages, alt deploys), tell me what’s missing and I’ll refine these instructions.

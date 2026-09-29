# Thando Chipango Portfolio

A responsive portfolio built with React, TypeScript, Vite, Tailwind CSS v4, Framer Motion, and Lucide icons.

## Content

- `src/data.ts` contains projects, experience, education, skills, and verified contact links.
- `src/App.tsx` composes the page from `src/components/layout` (header, footer), `src/components/sections` (hero, work, about, journey, currently, contact), `src/components/dialogs` (native-modal dialogs), and `src/components/shared` (reveal animation, section labels). Shared logic lives in `src/hooks`.
- `src/components/ProjectPreview.tsx` contains the project artwork and screenshot fallbacks.
- `src/index.css` defines the ivory-and-forest visual system and responsive layouts.
- `src/fonts.css` self-hosts Manrope and DM Mono through `@fontsource` packages, so the site makes no third-party font requests.
- `public/images/malawi-landscape.png` is the locally hosted hero landscape (with responsive `.webp` sources), inspired by the Malawian highlands. `public/resume.pdf` serves the CV download and `public/robots.txt` allows crawling.
- `scripts/optimize-images.js` regenerates the optimized `.webp` assets with sharp from sources in `scripts/source/`.

## Contact

The contact form validates the visitor's input and opens a prefilled draft in their email application. It does not send email automatically, submit data to a server, or store personal information. A copy-draft action is available as a fallback.

The original CV and website screenshots are linked to the portfolio owner's public GitHub repository, so they do not depend on the previous Vercel deployment. GitHub, LinkedIn, and email links were recovered from the original public portfolio and CV.

## Project Visuals

The network security and poultry-management previews are interface illustrations using sample data. They are identified as illustrations inside their case studies. NexaCode and the original portfolio use the owner's existing screenshots, with local CSS-rendered fallbacks if those images cannot load.

## Accessibility

The site includes native modal dialogs, keyboard-operable tabs, focus restoration, live copy feedback, labelled form inputs, visible focus states, and reduced-motion support.

## Development

Install dependencies with `npm install`, start Vite with `npm run dev`, and create a production bundle with `npm run build`. Check types with `npm run typecheck`, lint the source with `npm run lint`, and run the test suite with `npm run test`. CI (`.github/workflows/ci.yml`) runs all four gates on push and pull request.

Regenerate image assets with `npm run generate:assets` (social preview card, favicons) and `npm run optimize-images` (project screenshots).

## Deploy

The repository ships with a `https://REPLACE-ME.vercel.app` placeholder for the canonical URL, Open Graph tags, JSON-LD, `robots.txt`, and `sitemap.xml`. After the first Vercel deploy, set the real URL once and redeploy:

```sh
npm run set:url -- https://your-app.vercel.app
```

`vercel.json` adds security headers (CSP, nosniff, frame denial), immutable caching for hashed assets, and one-hour caching for the CV.
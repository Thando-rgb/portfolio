# AGENTS.md

Static portfolio site (HTML/CSS/JS) deployed on Vercel. See README.md for the full workflow.

## Commands to run before finishing work

- After editing `src/input.css`: recompile Tailwind
  ```
  npx tailwindcss -i src/input.css -o styles.css --minify
  ```
- There is no lint or typecheck for this project. Verify HTML changes render and that the
  Tailwind classes used in HTML exist in the compiled `styles.css`.

## Conventions

- JS: no semicolons, single quotes, trailing commas in multiline, `function` declarations for helpers
- HTML: 4-space indent, double quotes
- Styles: Tailwind utilities inline; custom CSS only in `src/input.css` (then recompile)
- Error handling: `console.error('[SERVICE] message:', error)`

## Deployment

- `master` auto-deploys to Vercel via the GitHub integration. After a push, verify a new
  deployment appears within ~60s:
  ```
  vercel ls
  ```
- If the integration webhook is dead (no new deployment after a push), deploy directly:
  ```
  vercel --prod
  ```

## Content edits

- Education dates, experience, projects: edit `index.html` directly
- `sitemap.xml` `lastmod` should be refreshed when content changes
- `resume.pdf`: source of truth is `Desktop\Thando\001\CV's\Improved\IT\THANDO_CHIPANGO_CV.pdf`;
  after re-export, copy over `resume.pdf`, bump the `?v=` on the download link, commit

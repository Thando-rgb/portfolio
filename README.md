# Thando Chipango — Personal Portfolio

Static portfolio site for Thando Chipango, deployed on Vercel: <https://thando-portfolio-steel.vercel.app/>

## Stack

- Plain HTML/CSS/JS — no framework, no build step for the site itself
- Tailwind CSS v4 (compiled) — source in `src/input.css`, output `styles.css`
- Vercel hosting + Web Analytics + Speed Insights
- Security headers and CSP configured via `vercel.json` and in-page meta tags

## Structure

```
index.html      main portfolio page (hero, about, experience, projects, education, skills, contact)
privacy.html    privacy policy
404.html        not-found page
styles.css      compiled Tailwind output — do NOT edit by hand
src/input.css   Tailwind source + custom CSS (edit here, then recompile)
script.js       navbar, mobile menu, scroll animations, preview tooltips, copy-email
vercel.json     security headers
sitemap.xml     XML sitemap (update lastmod when content changes)
robots.txt
images/         screenshots used in project previews
resume.pdf      CV — copy of CV's/Improved/IT/THANDO_CHIPANGO_CV.pdf
og-image.png    social sharing image (1200x630)
favicon.svg / favicon.ico / apple-touch-icon.png
```

## Commands

```powershell
# Recompile Tailwind after editing src/input.css
npx tailwindcss -i src/input.css -o styles.css --minify

# Deploy directly from CLI (fallback when git auto-deploy is not working)
vercel --prod

# Check deployment status
vercel ls
```

## Deployment workflow

Pushes to `master` should auto-deploy via the Vercel GitHub integration. If a push
does not produce a new deployment within ~60s (`vercel ls`), the integration
webhook is broken. Fix:

1. Vercel dashboard → project → Settings → Git → Connect Git Repository
2. or deploy manually with `vercel --prod`

## CV sync

The CV source of truth is `Desktop\Thando\001\CV's\Improved\IT\THANDO_CHIPANGO_CV.pdf`.
After re-exporting the CV, copy it over `resume.pdf`, bump the download link to
`resume.pdf?v=<n>` in `index.html`, and commit.

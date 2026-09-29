import fs from 'node:fs'

const url = process.argv[2]

if (!url || !/^https:\/\/[^\s/]+$/.test(url)) {
  console.error('usage: node scripts/set-site-url.js https://your-app.vercel.app')
  process.exit(1)
}

const placeholder = 'https://REPLACE-ME.vercel.app'
const files = ['index.html', 'public/robots.txt', 'public/sitemap.xml']

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8')
  if (!content.includes(placeholder)) {
    console.warn(`${file}: placeholder not found, skipping`)
    continue
  }
  fs.writeFileSync(file, content.split(placeholder).join(url))
  console.log(`${file}: ${placeholder} -> ${url}`)
}

console.log('site url updated')

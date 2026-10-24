import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const jobs = [
  { input: 'public/images/malawi-landscape.png', base: 'public/images/malawi-landscape', widths: [992, 1984] },
  { input: 'scripts/source/nexa_code_systems_website_image.png', base: 'public/images/nexa_code_systems_website_image', widths: [1440] },
  { input: 'scripts/source/personal_portfolio_website_screenshot.png', base: 'public/images/personal_portfolio_website_screenshot', widths: [1440] },
]

for (const job of jobs) {
  for (const [index, width] of job.widths.entries()) {
    const name = index === job.widths.length - 1 ? `${job.base}.webp` : `${job.base}-${width}.webp`
    const info = await sharp(path.join(root, job.input))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(root, name))
    console.log(`${path.basename(name)} ${info.width}x${info.height} ${(info.size / 1024).toFixed(1)}KB`)
  }
}

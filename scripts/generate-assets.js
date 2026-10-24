import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const out = (file) => path.join(root, file)

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#132016" stop-opacity="0.9"/>
      <stop offset="0.62" stop-color="#132016" stop-opacity="0.3"/>
      <stop offset="1" stop-color="#132016" stop-opacity="0.08"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#scrim)"/>
  <text x="72" y="306" fill="#b4c79d" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="6">PORTFOLIO &#183; LILONGWE, MALAWI</text>
  <text x="72" y="396" fill="#f5f4ef" font-family="Arial, sans-serif" font-size="64" font-weight="700">Thando Chipango</text>
  <text x="72" y="458" fill="#dfe3d4" font-family="Arial, sans-serif" font-size="34" font-weight="400">Thoughtful Code. Real-World Impact.</text>
</svg>`

function log(name, info) {
  console.log(`${name} ${info.width}x${info.height} ${(info.size / 1024).toFixed(1)}KB`)
}

const og = await sharp(out('public/images/malawi-landscape.png'))
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .composite([{ input: Buffer.from(ogSvg), top: 0, left: 0 }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(out('public/images/og-card.jpg'))
log('og-card.jpg', og)

const favicon32 = await sharp(out('public/favicon.svg'), { density: 300 })
  .resize(32, 32)
  .png({ compressionLevel: 9 })
  .toFile(out('public/favicon-32.png'))
log('favicon-32.png', favicon32)

const appleTouch = await sharp(out('public/favicon.svg'), { density: 300 })
  .resize(180, 180)
  .png({ compressionLevel: 9 })
  .toFile(out('public/apple-touch-icon.png'))
log('apple-touch-icon.png', appleTouch)

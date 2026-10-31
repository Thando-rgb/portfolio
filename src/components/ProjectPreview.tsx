import { useId, useState } from 'react'
import { Activity, ArrowUpRight, LayoutDashboard, Settings, ShieldCheck, SlidersHorizontal } from 'lucide-react'
import type { PreviewKind } from '../data'

function NetworkPreview() {
  const gradientId = useId()
  return (
    <div className="project-art nids-art" aria-hidden="true">
      <div className="art-grid" />
      <div className="network-window preview-window">
        <div className="preview-browser"><i /><i /><i /><span>localhost:5000 / dashboard</span></div>
        <div className="network-shell">
          <aside className="network-sidebar"><ShieldCheck aria-hidden="true" className="network-brand" /><LayoutDashboard aria-hidden="true" /><Activity aria-hidden="true" /><ShieldCheck aria-hidden="true" /><Settings aria-hidden="true" className="sidebar-bottom" /></aside>
          <div className="network-main">
            <div className="network-top"><span>NIDS<span className="network-version"> / NETWORK MONITOR</span></span><span className="system-online"><i /> SYSTEM ONLINE</span></div>
            <div className="network-heading"><div><span className="preview-eyebrow">YOUR NETWORK, AT A GLANCE</span><h4>Security overview</h4></div><SlidersHorizontal aria-hidden="true" size={13} /></div>
            <div className="network-stats"><div><span>Total packets</span><strong>24,891<small>+12.8%</small></strong></div><div><span>Threats detected</span><strong>24<small className="alert-text">6 new</small></strong></div><div><span>Active monitoring</span><strong>04:32:16</strong></div></div>
            <div className="network-charts">
              <div className="network-traffic"><div className="chart-caption"><span>Network activity</span><small>Last 60 minutes</small></div><div className="traffic-chart"><div className="chart-grid-lines"><i /><i /><i /></div><svg viewBox="0 0 340 100" preserveAspectRatio="none"><defs><linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#a9c988" stopOpacity=".3" /><stop offset="100%" stopColor="#a9c988" stopOpacity="0" /></linearGradient></defs><path d="M0 80 L12 76 L24 79 L36 66 L48 72 L60 70 L70 53 L78 73 L90 69 L101 74 L109 37 L116 68 L131 61 L139 65 L146 20 L153 59 L161 53 L172 64 L182 40 L190 53 L205 45 L215 59 L224 49 L235 19 L242 45 L255 38 L266 48 L278 15 L285 42 L295 34 L307 43 L320 30 L331 38 L340 23 V100 H0Z" fill={`url(#${gradientId})`} /><path d="M0 80 L12 76 L24 79 L36 66 L48 72 L60 70 L70 53 L78 73 L90 69 L101 74 L109 37 L116 68 L131 61 L139 65 L146 20 L153 59 L161 53 L172 64 L182 40 L190 53 L205 45 L215 59 L224 49 L235 19 L242 45 L255 38 L266 48 L278 15 L285 42 L295 34 L307 43 L320 30 L331 38 L340 23" fill="none" stroke="#a9c988" strokeWidth="1.8" /></svg></div><div className="chart-axis"><span>14:00</span><span>14:15</span><span>14:30</span><span>14:45</span><span>15:00</span></div></div>
              <div className="network-breakdown"><span>Threat breakdown</span><div className="threat-donut"><div><strong>24</strong><span>EVENTS</span></div></div><div className="donut-key"><i /> Port scans <span>62%</span></div></div>
            </div>
            <div className="network-events"><div className="chart-caption"><span>Recent events</span><ArrowUpRight aria-hidden="true" size={11} /></div><div className="event-row"><span>15:02:34</span><span>192.168.1.108</span><span className="event-warning">Port scan detected</span><span>HIGH</span></div><div className="event-row"><span>15:01:12</span><span>192.168.1.104</span><span>ARP sweep detected</span><span>MEDIUM</span></div></div>
          </div>
        </div>
      </div>
      <span className="art-caption">BUILT TO SEE WHAT OTHERS MISS.</span>
    </div>
  )
}

function PoultryPreview() {
  return (
    <div className="project-art poultry-art" aria-hidden="true">
      <picture>
        <source srcSet="/images/poultry_management_system.webp" type="image/webp" />
        <img src="/images/poultry_management_system.png" alt="Poultry Management System" loading="lazy" decoding="async" width="1905" height="900" />
      </picture>
      <span className="art-caption">GROWING SOMETHING THAT MATTERS.</span>
    </div>
  )
}

function WebsitePreview({ isNexa }: { isNexa: boolean }) {
  const [imageFailed, setImageFailed] = useState(false)
  return (
    <div className={`project-art website-art ${isNexa ? 'nexa-art' : 'portfolio-art'}`} aria-hidden="true">
      <div className="website-window preview-window">
        <div className={`preview-browser ${isNexa ? 'light-browser' : ''}`}><i /><i /><i /><span>{isNexa ? 'nexacode / built for what\'s next' : 'thando.dev / the first chapter'}</span></div>
        {imageFailed ? (
          <div className="website-preview-fallback"><span className="mono">{isNexa ? 'DIGITAL SOLUTIONS, HUMAN IMPACT.' : 'IT STUDENT & DEVELOPER'}</span><strong>{isNexa ? 'NexaCode' : 'Thando'}<br />{isNexa ? 'Systems.' : 'Chipango.'}</strong><span>{isNexa ? 'Building the next chapter of your business.' : 'Building secure, purposeful digital experiences.'}</span></div>
        ) : (
          <picture>
        {!isNexa && <source srcSet="/images/portfolio.webp" type="image/webp" />}
        {isNexa && <source srcSet="/images/nexacode_website.webp" type="image/webp" />}
        <img src={`/images/${isNexa ? 'nexacode_website' : 'portfolio'}.png`} alt="" loading="lazy" decoding="async" width={1440} height={506} onError={() => setImageFailed(true)} />
          </picture>
        )}
      </div>
      <span className="art-caption">{isNexa ? 'A STRONGER DIGITAL FOUNDATION.' : 'EVERY BUILDER NEEDS A HOME.'}</span>
    </div>
  )
}
export default function ProjectPreview({ kind }: { kind: PreviewKind }) {
  if (kind === 'nids') return <NetworkPreview />
  if (kind === 'poultry') return <PoultryPreview />
  if (kind === 'data') return <DataPreview />
  return <WebsitePreview key={kind} isNexa={kind === 'nexa'} />
}

function DataPreview() {
  return (
    <div className="project-art data-art" aria-hidden="true">
      <div className="data-window preview-window">
        <div className="preview-browser"><i /><i /><i /><span>google-local / sentiment-analysis</span></div>
        <div className="data-content">
          <div className="data-badge mono">SCHOOL ASSIGNMENT</div>
          <div className="data-title">Google Local Datasets<br />Sentiment Analysis</div>
          <div className="data-meta mono">DATA SCIENCE / AI • 2026</div>
        </div>
      </div>
      <span className="art-caption">ACADEMIC PROJECT • NO PREVIEW IMAGE</span>
    </div>
  )
}

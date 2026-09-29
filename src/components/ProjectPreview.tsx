import { useId, useState } from 'react'
import { Activity, ArrowUpRight, Bell, ChartNoAxesCombined, CircleHelp, Egg, House, LayoutDashboard, Leaf, Package, Settings, ShieldCheck, SlidersHorizontal, Users } from 'lucide-react'
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
  const bars = [43, 62, 48, 75, 60, 82, 70, 88, 77, 93, 84, 96]
  return (
    <div className="project-art poultry-art" aria-hidden="true">
      <div className="poultry-window preview-window">
        <div className="preview-browser light-browser"><i /><i /><i /><span>poultry / farm overview</span></div>
        <div className="poultry-shell">
          <aside className="poultry-sidebar"><div className="poultry-brand"><Leaf aria-hidden="true" size={17} /> poultry<span>.</span></div><span className="farm-workspace">MY WORKSPACE</span><div className="farm-nav is-active"><House aria-hidden="true" />Overview</div><div className="farm-nav"><Egg aria-hidden="true" />My flock</div><div className="farm-nav"><Package aria-hidden="true" />Feed & inventory</div><div className="farm-nav"><ChartNoAxesCombined aria-hidden="true" />Reports</div><div className="farm-nav"><Users aria-hidden="true" />Farm team</div><div className="farm-nav sidebar-bottom"><CircleHelp aria-hidden="true" />Help & support</div></aside>
          <div className="poultry-main"><div className="farm-topbar"><span>Farm overview</span><div><Bell aria-hidden="true" size={11} /><span className="farmer-avatar">TC</span></div></div><div className="farm-heading"><div><span className="preview-eyebrow">A LITTLE CARE. A LOT OF GROWTH.</span><h4>A good day on the farm.</h4><p>Here's how your flock is doing today.</p></div><span className="farm-add">+ Add record</span></div>
            <div className="farm-stats"><div><span>Total birds<Egg aria-hidden="true" /></span><strong>1,240</strong><small>Across 3 flocks</small></div><div><span>Eggs collected<Leaf aria-hidden="true" /></span><strong>846</strong><small className="farm-positive">+8.2% this week</small></div><div><span>Flock health<Activity aria-hidden="true" /></span><strong>98.4<em>%</em></strong><small>Healthy & thriving</small></div></div>
            <div className="farm-production"><div className="chart-caption"><span>Egg production</span><small>This month <span className="select-caret" /></small></div><div className="production-chart"><div className="production-labels"><span>900</span><span>600</span><span>300</span></div><div className="production-bars">{bars.map((bar, i) => <i key={i} style={{ height: `${bar}%` }} />)}</div></div><div className="chart-axis"><span>01 JUL</span><span>07 JUL</span><span>14 JUL</span><span>21 JUL</span><span>28 JUL</span></div></div>
            <div className="farm-bottom"><span><i /> Your farm is looking healthy.</span><span>View flock details <ArrowUpRight aria-hidden="true" size={10} /></span></div>
          </div>
        </div>
      </div>
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
        {imageFailed ? <div className="website-preview-fallback"><span className="mono">{isNexa ? 'DIGITAL SOLUTIONS, HUMAN IMPACT.' : 'IT STUDENT & DEVELOPER'}</span><strong>{isNexa ? 'NexaCode' : 'Thando'}<br />{isNexa ? 'Systems.' : 'Chipango.'}</strong><span>{isNexa ? 'Building the next chapter of your business.' : 'Building secure, purposeful digital experiences.'}</span></div> : <img src={`/images/${isNexa ? 'nexa_code_systems_website_image' : 'personal_portfolio_website_screenshot'}.webp`} alt="" loading="lazy" width="1440" height="506" onError={() => setImageFailed(true)} />}
      </div>
      <span className="art-caption">{isNexa ? 'A STRONGER DIGITAL FOUNDATION.' : 'EVERY BUILDER NEEDS A HOME.'}</span>
    </div>
  )
}

export default function ProjectPreview({ kind }: { kind: PreviewKind }) {
  if (kind === 'nids') return <NetworkPreview />
  if (kind === 'poultry') return <PoultryPreview />
  return <WebsitePreview key={kind} isNexa={kind === 'nexa'} />
}
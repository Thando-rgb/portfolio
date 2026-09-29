import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, SectionLabel } from '../shared'
import RouteIllustration from './RouteIllustration'

const Currently: React.FC<{ onContact: () => void }> = ({ onContact }) => {
  return (
    <section className="currently-section" aria-labelledby="currently-title">
      <div className="container currently-layout">
        <Reveal className="currently-copy">
          <SectionLabel number="04" light>ON THE WORKBENCH</SectionLabel>
          <div className="progress-label mono"><i /> CURRENTLY BUILDING</div>
          <h2 className="section-title" id="currently-title">Small packages.<br />Big possibilities.</h2>
          <p>A real-time GPS tracking system for local courier services. Because knowing where your delivery is shouldn't be a luxury.</p>
          <button className="text-link text-link-light" onClick={onContact}>Let's talk about it <ArrowUpRight aria-hidden="true" size={16} /></button>
        </Reveal>
        <div className="currently-art">
          <RouteIllustration />
          <span className="map-caption mono">REAL-TIME TRACKING / IN DEVELOPMENT</span>
        </div>
      </div>
    </section>
  )
}

export default Currently

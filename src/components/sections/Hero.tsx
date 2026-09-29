import React, { useRef } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { contact } from '../../data'

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 90])

  return (
    <section className="hero" id="home" ref={heroRef} data-nav-section aria-labelledby="hero-title">
      <m.div className="hero-landscape" style={{ y: reducedMotion ? 0 : imageY }}>
        <picture>
          <source type="image/webp" srcSet="/images/malawi-landscape-992.webp 992w, /images/malawi-landscape.webp 1984w" sizes="100vw" />
          <img src="/images/malawi-landscape.png" alt="A quiet, mist-filled landscape inspired by the Malawian highlands" width="1984" height="992" fetchPriority="high" />
        </picture>
        <div className="hero-image-wash" />
      </m.div>
      <div className="container hero-content">
        <div className="hero-identity">
          <m.p className="hero-eyebrow mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.8 }}>
            <span className="green-square" /> DEVELOPER & CREATIVE PROBLEM SOLVER
          </m.p>
          <h1 id="hero-title" aria-label="Thando Chipango">
            <span className="hero-name-line"><m.span initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 0.95, delay: 0.12 }}>Thando</m.span></span>
            <span className="hero-name-line"><m.span initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 0.95, delay: 0.25 }}>Chipango<span className="name-period">.</span></m.span></span>
          </h1>
        </div>
        <m.div className="hero-intro" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.45 }}>
          <h2>Thoughtful code.<br />Real-world impact.</h2>
          <p>I build secure, purposeful digital experiences that solve real problems. Based in Lilongwe, Malawi.</p>
          <div className="hero-cta">
            <a href="#work" className="button button-dark">Explore my work <ArrowDown aria-hidden="true" size={16} /></a>
            <a href={contact.cv} target="_blank" rel="noreferrer" download="Thando_Chipango_CV.pdf" className="cv-link">Download CV <Download aria-hidden="true" size={14} /></a>
          </div>
        </m.div>
      </div>
      <a href="#work" className="hero-scroll" aria-label="Scroll to selected work"><ArrowDown aria-hidden="true" size={20} /></a>
    </section>
  )
}

export default Hero

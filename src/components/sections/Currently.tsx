import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, SectionLabel } from '../shared'

const Currently: React.FC<{ onContact: () => void }> = ({ onContact }) => {
  return (
    <section className="currently-section" aria-labelledby="currently-title">
      <div className="container currently-layout">
        <Reveal className="currently-copy">
          <SectionLabel number="04" light>ON THE WORKBENCH</SectionLabel>
          <div className="progress-label mono"><i /> CURRENTLY EXPLORING</div>
          <h2 className="section-title" id="currently-title">Data for real impact.</h2>
          <p>Exploring large-scale Google Local datasets: cleaning 66,000+ records, building NLP pipelines, and comparing sentiment models to turn unstructured reviews into actionable insights.</p>
          <button className="text-link text-link-light" onClick={onContact}>Let's talk about data &amp; AI <ArrowUpRight aria-hidden="true" size={16} /></button>
        </Reveal>
        <div className="currently-art">
          <div className="currently-data-panel">
            <div className="currently-data-row">
              <span className="mono">RECORDS CLEANED</span>
              <span>66,000+</span>
            </div>
            <div className="currently-data-row">
              <span className="mono">REVIEWS CLASSIFIED</span>
              <span>15,960</span>
            </div>
            <div className="currently-data-row">
              <span className="mono">BEST MODEL</span>
              <span>Logistic Regression (85.3%)</span>
            </div>
            <div className="currently-data-row">
              <span className="mono">STACK</span>
              <span>Python, pandas, NLTK, scikit-learn, SQLite</span>
            </div>
          </div>
          <span className="map-caption mono">SENTIMENT ANALYSIS / DATA SCIENCE</span>
        </div>
      </div>
    </section>
  )
}

export default Currently

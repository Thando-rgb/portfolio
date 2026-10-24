import React, { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { ArrowUpRight, Download, Plus } from 'lucide-react'
import { contact, education, experience } from '../../data'
import { Reveal, SectionLabel } from '../shared'

const Journey: React.FC = () => {
  const [tab, setTab] = useState<'Experience' | 'Education'>('Experience')
  const [openItem, setOpenItem] = useState<string | null>(experience[0].id)
  const items = tab === 'Experience' ? experience : education

  function changeTab(next: 'Experience' | 'Education') {
    setTab(next)
    setOpenItem((next === 'Experience' ? experience : education)[0].id)
  }

  return (
    <section className="journey-section section-space" id="experience" data-nav-section aria-labelledby="journey-title">
      <div className="container journey-layout">
        <Reveal className="journey-intro">
          <SectionLabel number="03">THE JOURNEY SO FAR</SectionLabel>
          <h2 className="section-title" id="journey-title">Always learning.<br />Always building<span className="green-period">.</span></h2>
          <p>Real projects, new perspectives, and a little more experience with every step.</p>
          <a className="text-link" href={contact.cv} target="_blank" rel="noreferrer">View full CV <Download aria-hidden="true" size={15} /></a>
        </Reveal>
        <Reveal className="journey-content" delay={0.1}>
          <div className="journey-tabs" role="tablist" aria-label="Professional journey">
            {(['Experience', 'Education'] as const).map((item) => (
              <button
                key={item}
                id={`tab-${item.toLowerCase()}`}
                role="tab"
                aria-selected={tab === item}
                aria-controls="journey-panel"
                tabIndex={tab === item ? 0 : -1}
                className={tab === item ? 'is-active' : ''}
                onClick={() => changeTab(item)}
                onKeyDown={(event) => {
                  if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
                    event.preventDefault()
                    const next = event.key === 'Home' ? 'Experience' : event.key === 'End' ? 'Education' : tab === 'Experience' ? 'Education' : 'Experience'
                    changeTab(next)
                    document.getElementById(`tab-${next.toLowerCase()}`)?.focus()
                  }
                }}
              >
                {item} <span className="mono">03</span>
              </button>
            ))}
          </div>
          <div id="journey-panel" role="tabpanel" aria-labelledby={`tab-${tab.toLowerCase()}`} tabIndex={0}>
            <AnimatePresence mode="wait" initial={false}>
              <m.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }}>
                {items.map((item) => (
                  <article key={item.id} className={`journey-item ${openItem === item.id ? 'is-open' : ''}`}>
                    <h3>
                      <button className="journey-toggle" aria-expanded={openItem === item.id} aria-controls={`${item.id}-details`} onClick={() => setOpenItem(openItem === item.id ? null : item.id)}>
                        <span className="journey-date mono">{item.period}</span>
                        <span className="journey-role"><span className="journey-role-title">{item.title}</span><span className="journey-organisation">{item.organisation}</span></span>
                        <Plus aria-hidden="true" size={20} strokeWidth={1.5} className="journey-plus" />
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {openItem === item.id && (
                        <m.div id={`${item.id}-details`} className="journey-details" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                          <div>
                            <span className="journey-type mono">{item.type}</span>
                            <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                            {item.link && <a href={item.link} target="_blank" rel="noreferrer" className="text-link">Visit NexaCode <ArrowUpRight aria-hidden="true" size={14} /></a>}
                          </div>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </article>
                ))}
              </m.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Journey

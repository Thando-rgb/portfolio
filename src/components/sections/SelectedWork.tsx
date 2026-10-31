import React, { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ProjectPreview from '../ProjectPreview'
import { contact, projects, type Project, type ProjectCategory } from '../../data'
import { Reveal, SectionLabel } from '../shared'

const SelectedWork: React.FC<{ onProject: (project: Project) => void }> = ({ onProject }) => {
  const [filter, setFilter] = useState<'All work' | ProjectCategory>('All work')
const filters: { label: string; category: ProjectCategory | 'All work' }[] = [
  { label: 'All work', category: 'All work' },
  { label: 'Web development', category: 'Web development' },
  { label: 'Cybersecurity', category: 'Cybersecurity' },
  { label: 'Data Science', category: 'Data/AI' },
]

const visibleProjects = filter === 'All work' ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="work-section section-space" id="work" data-nav-section aria-labelledby="work-title">
      <div className="container">
        <Reveal>
          <SectionLabel number="01">SELECTED WORK</SectionLabel>
          <div className="section-heading-row">
            <h2 id="work-title" className="section-title">Ideas, made real<span className="green-period">.</span></h2>
            <p>A selection of things I've built.<br />Different challenges. The same intention.</p>
          </div>
        </Reveal>
        <div className="work-toolbar">
          <div className="work-filters" aria-label="Filter projects">
          {filters.map((item) => {
            const count = item.category === 'All work' ? projects.length : projects.filter((project) => project.category === item.category).length
            return (
              <button key={item.label} onClick={() => setFilter(item.category)} aria-pressed={filter === item.category} className={`filter-button ${filter === item.category ? 'is-active' : ''}`}>
                {item.label} <span className="mono">{String(count).padStart(2, '0')}</span>
              </button>
            )
          })}
          </div>
          <a href={contact.github} target="_blank" rel="noreferrer" className="text-link github-work">More on GitHub <ArrowUpRight aria-hidden="true" size={15} /></a>
        </div>
        <span className="sr-only" aria-live="polite">Showing {visibleProjects.length} {filter === 'All work' ? '' : filter.toLowerCase()} projects.</span>
        <m.div className="project-grid" layout>
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <m.article key={project.id} className="project" layout initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.35 }}>
                <button className="project-image-button" onClick={() => onProject(project)} aria-label={`Explore ${project.title}`}>
                  <ProjectPreview kind={project.preview} />
                  <span className="preview-action">Explore project <ArrowUpRight aria-hidden="true" size={16} /></span>
                </button>
                <div className="project-meta mono"><span>{project.discipline}</span><span>{project.year}</span></div>
                <h3><button className="project-title-button" onClick={() => onProject(project)}>{project.title}<ArrowUpRight aria-hidden="true" size={23} strokeWidth={1.5} /></button></h3>
                <p className="project-description">{project.description}</p>
              </m.article>
            ))}
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  )
}

export default SelectedWork

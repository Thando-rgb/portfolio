import React from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import ProjectPreview from '../ProjectPreview'
import { projects, type Project } from '../../data'
import Dialog from './Dialog'

interface ProjectDialogProps {
  project: Project
  onClose: () => void
  onChange: (project: Project) => void
  onContact: () => void
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({ project, onClose, onChange, onContact }) => {
  const index = projects.findIndex((item) => item.id === project.id)

  return (
    <Dialog onClose={onClose} labelId="project-dialog-title" className="project-modal" eyebrow={`SELECTED WORK / ${project.number}`} resetKey={project.id}>
      <div className="project-dialog-heading">
        <p className="mono">{project.discipline} <span>/</span> {project.year}</p>
        <h2 id="project-dialog-title">{project.title}<span className="green-period">.</span></h2>
        <p className="project-dialog-description">{project.description}</p>
        <div className="project-stack mono">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      </div>
      <ProjectPreview kind={project.preview} />
      {(project.preview === 'nids' || project.preview === 'poultry') && (
        <p className="preview-disclaimer">Interface illustration with sample data, representing the project's core functionality.</p>
      )}
      <div className="case-study-layout">
        <div className="case-study-narrative">
          <section>
            <h3>The challenge</h3>
            <p>{project.challenge}</p>
          </section>
          <section>
            <h3>The approach</h3>
            <p>{project.approach}</p>
          </section>
          <section>
            <h3>The outcome</h3>
            <p>{project.outcome}</p>
          </section>
        </div>
        <aside className="case-study-scope">
          <h3>Under the hood</h3>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}><Check aria-hidden="true" size={14} /><span>{feature}</span></li>
            ))}
          </ul>
          <div className="case-study-links">
            {project.live && <a className="button button-dark" href={project.live} target="_blank" rel="noreferrer">Visit live website <ArrowUpRight aria-hidden="true" size={15} /></a>}
            {project.github && <a className="button button-outline" href={project.github} target="_blank" rel="noreferrer">View source code <ArrowUpRight aria-hidden="true" size={15} /></a>}
            <button className="text-link" onClick={onContact}>Discuss this project <ArrowUpRight aria-hidden="true" size={14} /></button>
          </div>
        </aside>
      </div>
      <div className="project-dialog-pagination">
        <button onClick={() => onChange(projects[(index - 1 + projects.length) % projects.length])}>
          <ArrowLeft aria-hidden="true" size={17} />Previous project
        </button>
        <span className="mono">{project.number} / {String(projects.length).padStart(2, '0')}</span>
        <button onClick={() => onChange(projects[(index + 1) % projects.length])}>
          Next project<ArrowRight aria-hidden="true" size={17} />
        </button>
      </div>
    </Dialog>
  )
}

export default ProjectDialog

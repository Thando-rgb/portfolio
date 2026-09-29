import React, { useState } from 'react'
import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion'
import { Footer, Header } from './components/layout'
import { About, Contact, Currently, Hero, Journey, SelectedWork } from './components/sections'
import { ContactDialog, ProjectDialog } from './components/dialogs'
import type { Project } from './data'

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [contactOpen, setContactOpen] = useState(false)
  const [contactSubject, setContactSubject] = useState("Let's build something good")

  function openContact(subject = "Let's build something good") {
    setSelectedProject(null)
    setContactSubject(subject)
    setContactOpen(true)
  }

  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
      <LazyMotion features={domAnimation}>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header onContact={() => openContact()} />
      <main id="main" tabIndex={-1}>
        <Hero />
        <SelectedWork onProject={setSelectedProject} />
        <About />
        <Journey />
        <Currently onContact={() => openContact('Let\'s talk about your GPS tracking project')} />
        <Contact onContact={() => openContact()} />
      </main>
      <Footer />
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onChange={setSelectedProject}
          onContact={() => openContact(`Let's talk about ${selectedProject.title}`)}
        />
      )}
      {contactOpen && <ContactDialog onClose={() => setContactOpen(false)} subject={contactSubject} />}
      </LazyMotion>
    </MotionConfig>
  )
}

export default App

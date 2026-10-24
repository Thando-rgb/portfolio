import React from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { contact } from '../../data'
import { useCopy } from '../../hooks'
import { Reveal, SectionLabel } from '../shared'

const Contact: React.FC<{ onContact: () => void }> = ({ onContact }) => {
  const { copy, copyState } = useCopy()

  return (
    <section className="contact-section section-space" id="contact" data-nav-section aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <SectionLabel number="05">LET'S MAKE SOMETHING HAPPEN</SectionLabel>
          <div className="contact-layout">
            <div>
              <h2 id="contact-title">Let's build<br />something good<span className="green-period">.</span></h2>
              <div className="email-line">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <button className="copy-button" onClick={() => void copy(contact.email)} aria-label={copyState === 'copied' ? 'Email address copied' : 'Copy email address'} title="Copy email address">
                  {copyState === 'copied' ? <Check aria-hidden="true" size={17} /> : <Copy aria-hidden="true" size={17} />}
                </button>
              </div>
              <span className="copy-feedback" role="status">{copyState === 'copied' ? 'Email address copied.' : copyState === 'error' ? 'Select the address above to copy it.' : '\u00a0'}</span>
            </div>
            <div className="contact-aside">
              <p>Have an interesting problem, a project in mind, or an opportunity to share? I'd love to hear from you.</p>
              <button className="button button-dark" onClick={onContact}>Start a conversation <ArrowUpRight aria-hidden="true" size={17} /></button>
              <span className="contact-note mono"><i /> OPEN TO GOOD CONVERSATIONS</span>
            </div>
          </div>
        </Reveal>
        <div className="social-row">
          <span className="mono">FIND ME ELSEWHERE</span>
          <div>
            <a href={contact.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" size={15} /></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" size={15} /></a>
            <a href={contact.cv} target="_blank" rel="noreferrer">My CV <ArrowUpRight aria-hidden="true" size={15} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

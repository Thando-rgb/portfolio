import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { ArrowUpRight, Download, Menu, X } from 'lucide-react'
import { contact } from '../../data'

const navigation = [
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

const Header: React.FC<{ onContact: () => void }> = ({ onContact }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      })
    }, { rootMargin: '-15% 0px -65% 0px' })
    document.querySelectorAll('[data-nav-section]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        headerRef.current?.querySelector<HTMLButtonElement>('.menu-toggle')?.focus()
      }
    }
    function handleOutside(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false)
    }
    function handleResize() {
      if (window.innerWidth > 760) setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    document.addEventListener('pointerdown', handleOutside)
    window.addEventListener('resize', handleResize)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('pointerdown', handleOutside)
      window.removeEventListener('resize', handleResize)
    }
  }, [menuOpen])

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container header-inner">
        <a href="#home" className="wordmark" aria-label="Thando Chipango, back to home" onClick={() => setMenuOpen(false)}>tc<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? 'is-active' : ''} aria-current={activeSection === item.id ? 'location' : undefined}>{item.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="header-contact" onClick={() => {
            setMenuOpen(false)
            onContact()
          }}>Let's talk <ArrowUpRight aria-hidden="true" size={15} /></button>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <m.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            <div>
              {navigation.map((item, index) => (
                <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                  <span className="mono">0{index + 1}</span>{item.label}<ArrowUpRight aria-hidden="true" size={23} />
                </a>
              ))}
              <a className="mobile-cv" href={contact.cv} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>View my CV <Download aria-hidden="true" size={16} /></a>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

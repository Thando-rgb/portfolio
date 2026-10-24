import React from 'react'
import { ArrowUp } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href="#home" className="wordmark" aria-label="Thando Chipango, back to top">tc<span>.</span></a>
        <span>&copy; {new Date().getFullYear()} Thando Chipango</span>
        <span className="footer-made">Made with intention. Rooted in Malawi.</span>
        <a href="#home" className="back-to-top">Back to top <ArrowUp aria-hidden="true" size={15} /></a>
      </div>
    </footer>
  )
}

export default Footer

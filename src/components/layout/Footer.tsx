import React from 'react'
import { ArrowUp, ExternalLink, Mail } from 'lucide-react'
import { contact } from '../../data'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        {/* Column 1: Brand */}
        <div className="footer-col footer-brand">
          <a href="#home" className="wordmark" aria-label="Thando Chipango, back to top">
            tc<span>.</span>
          </a>
          <p className="footer-copyright">&copy; {year} Thando Chipango</p>
          <p className="footer-made">Made with intention. Rooted in Malawi.</p>
        </div>

        {/* Column 2: Quick action */}
        <div className="footer-col footer-action">
          <a href="#home" className="back-to-top">Back to top <ArrowUp aria-hidden="true" size={15} /></a>
        </div>

        {/* Column 3: Privacy & Legal */}
        <div className="footer-col footer-privacy">
          <h4 className="footer-heading">Privacy &amp; Legal</h4>
          <ul className="footer-links">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-use">Terms of Use</a></li>
            <li><a href="/cookie-policy">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Column 4: Connect */}
        <div className="footer-col footer-connect">
          <h4 className="footer-heading">Keep in touch</h4>
          <ul className="footer-links footer-social">
            <li>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} aria-label="Email Thando">
                <Mail size={14} aria-hidden="true" /><span>Email</span>
              </a>
            </li>
            <li>
              <a href={contact.cv} target="_blank" rel="noopener noreferrer" aria-label="Download CV">
                CV <ExternalLink size={12} aria-hidden="true" />
              </a>
            </li>
          </ul>
          <div className="footer-newsletter">
            <label htmlFor="footer-newsletter" className="footer-newsletter-label">
              Newsletter
            </label>
            <a
              href={`mailto:${contact.email}?subject=Newsletter%20signup&body=Hi%20Thando%2C%20I%27d%20like%20to%20join%20your%20newsletter.`}
              className="footer-newsletter-link"
              aria-label="Join the newsletter"
            >
              Join the list <Mail size={12} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

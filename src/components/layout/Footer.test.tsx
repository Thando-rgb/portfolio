import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the brand wordmark linking back to home', () => {
    render(<Footer />)
    const wordmark = screen.getByRole('link', { name: /thando chipango, back to top/i })
    expect(wordmark).toHaveAttribute('href', '#home')
    expect(wordmark).toHaveTextContent('tc.')
  })

  it('renders the current copyright year', () => {
    render(<Footer />)
    const copyright = screen.getByText(/Thando Chipango/, { selector: '.footer-copyright' })
    expect(copyright.textContent).toContain(new Date().getFullYear().toString())
  })

  it('renders the Privacy & Legal column with the three legal links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /privacy & legal/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /privacy policy/i })).toHaveAttribute('href', '/privacy-policy')
    expect(screen.getByRole('link', { name: /terms of use/i })).toHaveAttribute('href', '/terms-of-use')
    expect(screen.getByRole('link', { name: /cookie policy/i })).toHaveAttribute('href', '/cookie-policy')
  })

  it('renders the Keep in touch column with social and contact links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /keep in touch/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', 'https://github.com/Thando-rgb')
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/thando-chipango',
    )
    expect(screen.getByRole('link', { name: /email thando/i })).toHaveAttribute(
      'href',
      'mailto:thandochipango316@gmail.com',
    )
    expect(screen.getByRole('link', { name: /download cv/i })).toHaveAttribute('href', '/resume.pdf')
  })

  it('renders a mailto-based newsletter signup', () => {
    render(<Footer />)
    const newsletter = screen.getByRole('link', { name: /join the newsletter/i })
    expect(newsletter).toHaveAttribute('href', expect.stringMatching(/^mailto:/))
    expect(newsletter).toHaveAttribute('href', expect.stringContaining('Newsletter%20signup'))
  })

  it('renders a back to top link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Back to top' })).toHaveAttribute('href', '#home')
  })
})

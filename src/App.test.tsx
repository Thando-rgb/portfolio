import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders every page section with correct heading hierarchy', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Thando Chipango' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /thoughtful code/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /ideas, made real/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /a curious mind/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /always learning/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /small packages/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /let's build/i })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('exposes the skip link and the noscript-free primary nav anchors', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /skip to main content/i })).toHaveAttribute('href', '#main')
    const navLinks = screen.getAllByRole('link', { name: /experience/i })
    expect(navLinks.some((link) => link.getAttribute('href') === '#experience')).toBe(true)
  })

  it('renders all four projects in the work section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 3, name: 'Network Intrusion Detection' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Poultry Management System' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'NexaCode' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Personal Portfolio' })).toBeInTheDocument()
  })
})

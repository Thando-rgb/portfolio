import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the hero section with the name heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: 'Thando Chipango' })).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 2, name: /thoughtful code/i })).toBeInTheDocument()
  })

  it('renders the explore my work CTA linking to work section', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /explore my work/i })).toHaveAttribute('href', '#work')
  })

  it('renders the CV download link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /download cv/i })).toHaveAttribute('href', '/resume.pdf')
  })

  it('renders the scroll-to-work arrow', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /scroll to selected work/i })).toHaveAttribute('href', '#work')
  })
})

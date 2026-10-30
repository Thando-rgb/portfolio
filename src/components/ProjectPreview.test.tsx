import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ProjectPreview from './ProjectPreview'

describe('ProjectPreview', () => {
  it('renders the network intrusion detection preview', () => {
    render(<ProjectPreview kind="nids" />)
    expect(screen.getByText(/localhost:5000\s*\/\s*dashboard/i)).toBeInTheDocument()
    expect(screen.getByText(/built to see what others miss/i)).toBeInTheDocument()
  })

  it('renders the poultry management preview', () => {
    render(<ProjectPreview kind="poultry" />)
    expect(screen.getByText(/growing something that matters/i)).toBeInTheDocument()
  })

  it('renders the data preview', () => {
    render(<ProjectPreview kind="data" />)
    expect(screen.getByText(/google-local\s*\/\s*sentiment-analysis/i)).toBeInTheDocument()
    expect(screen.getByText(/academic project/i)).toBeInTheDocument()
  })

  it('renders the nexacode website preview', () => {
    render(<ProjectPreview kind="nexa" />)
    expect(screen.getByText(/nexacode\s*\/\s*built for what's next/i)).toBeInTheDocument()
  })

  it('renders the personal portfolio website preview', () => {
    render(<ProjectPreview kind="portfolio" />)
    expect(screen.getByText(/thando\.dev\s*\/\s*the first chapter/i)).toBeInTheDocument()
  })
})

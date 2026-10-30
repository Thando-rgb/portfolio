import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Header from './Header'

describe('Header', () => {
  it('renders the wordmark linking back to home', () => {
    render(<Header onContact={vi.fn()} />)
    const wordmark = screen.getByRole('link', { name: /thando chipango, back to home/i })
    expect(wordmark).toHaveAttribute('href', '#home')
  })

  it('renders the main navigation links', () => {
    render(<Header onContact={vi.fn()} />)
    expect(screen.getByRole('link', { name: /work/i })).toHaveAttribute('href', '#work')
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: /experience/i })).toHaveAttribute('href', '#experience')
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '#contact')
  })

  it('renders the let\'s talk contact button', () => {
    const onContact = vi.fn()
    render(<Header onContact={onContact} />)
    fireEvent.click(screen.getByRole('button', { name: /let's talk/i }))
    expect(onContact).toHaveBeenCalledTimes(1)
  })

  it('renders the menu toggle button', () => {
    render(<Header onContact={vi.fn()} />)
    expect(screen.getByRole('button', { name: /open navigation/i })).toBeInTheDocument()
  })
})

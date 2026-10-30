import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import Contact from './Contact'

function mockClipboard(writeText = vi.fn().mockResolvedValue(undefined)) {
  Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true })
  return writeText
}

describe('Contact', () => {
  beforeEach(() => {
    mockClipboard()
  })

  it('renders the contact section heading', () => {
    render(<Contact onContact={vi.fn()} />)
    expect(screen.getByRole('heading', { level: 2, name: /let's build/i })).toBeInTheDocument()
  })

  it('renders the email mailto link', () => {
    render(<Contact onContact={vi.fn()} />)
    expect(screen.getByRole('link', { name: /thandochipango316@gmail.com/i })).toHaveAttribute(
      'href',
      'mailto:thandochipango316@gmail.com',
    )
  })

  it('renders the copy email button', () => {
    render(<Contact onContact={vi.fn()} />)
    expect(screen.getByRole('button', { name: /copy email address/i })).toBeInTheDocument()
  })

  it('renders the social row with github, linkedin, and cv links', () => {
    render(<Contact onContact={vi.fn()} />)
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      'https://github.com/Thando-rgb',
    )
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/thando-chipango',
    )
    expect(screen.getByRole('link', { name: /my cv/i })).toHaveAttribute('href', '/resume.pdf')
  })

  it('calls onContact when start a conversation is clicked', () => {
    const onContact = vi.fn()
    render(<Contact onContact={onContact} />)
    fireEvent.click(screen.getByRole('button', { name: /start a conversation/i }))
    expect(onContact).toHaveBeenCalledTimes(1)
  })
})

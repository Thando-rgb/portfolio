import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Journey from './Journey'

describe('Journey', () => {
  it('starts on the Experience tab with the first entry expanded', () => {
    render(<Journey />)
    const experienceTab = screen.getByRole('tab', { name: /experience/i })
    expect(experienceTab).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: /education/i })).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByRole('button', { name: /web developer/i })).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/designed and built the company's primary marketing platform/i)).toBeInTheDocument()
  })

  it('switches to the Education tab and shows education entries', async () => {
    render(<Journey />)
    fireEvent.click(screen.getByRole('tab', { name: /education/i }))

    expect(screen.getByRole('tab', { name: /education/i })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: /experience/i })).toHaveAttribute('aria-selected', 'false')
    expect(await screen.findByRole('button', { name: /level 5 diploma/i })).toHaveAttribute('aria-expanded', 'true')
    expect(await screen.findByText(/national college of information technology/i)).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.queryByRole('button', { name: /web developer/i })).not.toBeInTheDocument()
    })
  })

  it('supports arrow, Home, and End keys on the tab list', () => {
    render(<Journey />)
    const experienceTab = screen.getByRole('tab', { name: /experience/i })

    fireEvent.keyDown(experienceTab, { key: 'ArrowRight' })
    expect(screen.getByRole('tab', { name: /education/i })).toHaveAttribute('aria-selected', 'true')

    fireEvent.keyDown(screen.getByRole('tab', { name: /education/i }), { key: 'Home' })
    expect(screen.getByRole('tab', { name: /experience/i })).toHaveAttribute('aria-selected', 'true')

    fireEvent.keyDown(screen.getByRole('tab', { name: /experience/i }), { key: 'End' })
    expect(screen.getByRole('tab', { name: /education/i })).toHaveAttribute('aria-selected', 'true')
  })

  it('keeps a single journey entry open at a time', async () => {
    render(<Journey />)
    const first = screen.getByRole('button', { name: /web developer/i })
    const second = screen.getByRole('button', { name: /systems & ux audit consultant/i })
    expect(second).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(await screen.findByText(/audited a functional mvp/i)).toBeInTheDocument()

    expect(first).toHaveAttribute('aria-expanded', 'false')
    await waitFor(() => {
      expect(screen.queryByText(/designed and built the company's primary marketing platform/i)).not.toBeInTheDocument()
    })
  })

  it('collapses an open entry when clicked again', async () => {
    render(<Journey />)
    const first = screen.getByRole('button', { name: /web developer/i })
    fireEvent.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    await waitFor(() => {
      expect(screen.queryByText(/designed and built the company's primary marketing platform/i)).not.toBeInTheDocument()
    })
  })
})

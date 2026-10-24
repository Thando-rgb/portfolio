import React from 'react'
import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ErrorBoundary from './ErrorBoundary'

const Boom: React.FC = () => {
  throw new Error('boom from test child')
}

describe('ErrorBoundary', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the fallback UI when a child throws', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    render(
      <ErrorBoundary>
        <Boom />
      </ErrorBoundary>,
    )
    expect(screen.getByRole('alert')).toHaveTextContent(/something went wrong/i)
    expect(screen.getByRole('button', { name: /reload the page/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /email me directly/i })).toHaveAttribute(
      'href',
      'mailto:thandochipango316@gmail.com',
    )
    expect(console.error).toHaveBeenCalled()
  })

  it('renders children when nothing throws', () => {
    render(
      <ErrorBoundary>
        <p>all good</p>
      </ErrorBoundary>,
    )
    expect(screen.getByText('all good')).toBeInTheDocument()
  })
})

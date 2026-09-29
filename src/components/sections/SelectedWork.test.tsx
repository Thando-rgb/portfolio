import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import SelectedWork from './SelectedWork'

describe('SelectedWork', () => {
  it('shows all four projects with the All work filter active', () => {
    render(<SelectedWork onProject={vi.fn()} />)
    expect(screen.getByRole('button', { name: /all work/i })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('heading', { level: 3, name: 'Network Intrusion Detection' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'NexaCode' })).toBeInTheDocument()
    expect(screen.getByText(/showing 4\s+projects/i)).toBeInTheDocument()
  })

  it('filters projects when a category button is pressed', async () => {
    render(<SelectedWork onProject={vi.fn()} />)
    const cybersecurity = screen.getByRole('button', { name: /cybersecurity/i })
    fireEvent.click(cybersecurity)

    expect(cybersecurity).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: /all work/i })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByRole('heading', { level: 3, name: 'Network Intrusion Detection' })).toBeInTheDocument()
    expect(screen.getByText(/showing 1 cybersecurity projects/i)).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.queryByRole('heading', { level: 3, name: 'NexaCode' })).not.toBeInTheDocument()
    })
  })

  it('returns to the full list when All work is re-selected', async () => {
    render(<SelectedWork onProject={vi.fn()} />)
    fireEvent.click(screen.getByRole('button', { name: /cybersecurity/i }))
    fireEvent.click(screen.getByRole('button', { name: /all work/i }))

    expect(screen.getByText(/showing 4\s+projects/i)).toBeInTheDocument()
    expect(await screen.findByRole('heading', { level: 3, name: 'NexaCode' })).toBeInTheDocument()
  })

  it('opens a project dialog through both the image and the title button', () => {
    const onProject = vi.fn()
    render(<SelectedWork onProject={onProject} />)
    fireEvent.click(screen.getByRole('button', { name: 'Explore Network Intrusion Detection' }))
    expect(onProject).toHaveBeenCalledWith(expect.objectContaining({ id: 'network-intrusion-detection' }))

    fireEvent.click(screen.getByRole('button', { name: 'NexaCode' }))
    expect(onProject).toHaveBeenCalledWith(expect.objectContaining({ id: 'nexacode' }))
  })

  it('renders per-category counts in the filter badges', () => {
    render(<SelectedWork onProject={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'All work 04' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Web development 03' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cybersecurity 01' })).toBeInTheDocument()
  })
})

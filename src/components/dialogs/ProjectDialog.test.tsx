import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { projects } from '../../data'
import ProjectDialog from './ProjectDialog'

function renderDialog(overrides: Partial<Parameters<typeof ProjectDialog>[0]> = {}) {
  const props = {
    project: projects[0],
    onClose: vi.fn(),
    onChange: vi.fn(),
    onContact: vi.fn(),
    ...overrides,
  }
  const view = render(<ProjectDialog {...props} />)
  return { ...view, ...props }
}

describe('ProjectDialog', () => {
  it('renders the case study for the selected project', () => {
    renderDialog()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /network intrusion detection/i })).toBeInTheDocument()
    expect(screen.getByText('01 / 04')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'The challenge' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'The approach' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'The outcome' })).toBeInTheDocument()
    expect(screen.getByText(/port scan, syn flood, arp sweep/i)).toBeInTheDocument()
  })

  it('shows source links that exist for the project only', () => {
    renderDialog()
    expect(screen.getByRole('link', { name: /view source code/i })).toHaveAttribute(
      'href',
      'https://github.com/Thando-rgb/NIDS',
    )
    expect(screen.queryByRole('link', { name: /visit live website/i })).not.toBeInTheDocument()
  })

  it('paginates forwards with wrap-around and backwards with wrap-around', () => {
    const { onChange } = renderDialog()
    fireEvent.click(screen.getByRole('button', { name: /next project/i }))
    expect(onChange).toHaveBeenCalledWith(projects[1])

    fireEvent.click(screen.getByRole('button', { name: /previous project/i }))
    expect(onChange).toHaveBeenCalledWith(projects[3])
  })

  it('focuses the case-study heading when opened', () => {
    renderDialog()
    expect(screen.getByRole('heading', { level: 2 })).toHaveFocus()
  })

  it('closes on Escape, backdrop click, and the close button', () => {
    const { onClose } = renderDialog()
    fireEvent(screen.getByRole('dialog'), new Event('cancel', { bubbles: true, cancelable: true }))
    expect(onClose).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByRole('dialog'))
    expect(onClose).toHaveBeenCalledTimes(2)

    fireEvent.click(screen.getByRole('button', { name: /close dialog/i }))
    expect(onClose).toHaveBeenCalledTimes(3)
  })

  it('hands off to the contact dialog via the discuss link', () => {
    const { onContact } = renderDialog()
    fireEvent.click(screen.getByRole('button', { name: /discuss this project/i }))
    expect(onContact).toHaveBeenCalledTimes(1)
  })

  it('restores focus to the previously focused element on unmount', () => {
    const trigger = document.createElement('button')
    document.body.appendChild(trigger)
    trigger.focus()
    const { unmount } = renderDialog()
    unmount()
    expect(document.activeElement).toBe(trigger)
    trigger.remove()
  })

  it('renders the illustration disclaimer for interface-illustration projects only', () => {
    const { rerender } = renderDialog()
    expect(screen.getByText(/interface illustration with sample data/i)).toBeInTheDocument()
    rerender(<ProjectDialog project={projects[2]} onClose={vi.fn()} onChange={vi.fn()} onContact={vi.fn()} />)
    expect(screen.queryByText(/interface illustration with sample data/i)).not.toBeInTheDocument()
  })
})

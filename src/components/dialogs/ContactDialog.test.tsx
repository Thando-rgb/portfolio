import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ContactDialog from './ContactDialog'

function mockClipboard(writeText = vi.fn().mockResolvedValue(undefined)) {
  Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true })
  return writeText
}

function fillForm() {
  fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Alex Smith' } })
  fireEvent.change(screen.getByLabelText('A little about it'), {
    target: { value: 'I would love to work together on a project.' },
  })
}

describe('ContactDialog', () => {
  beforeEach(() => {
    mockClipboard()
  })

  it('prefills the subject from the trigger context', () => {
    render(<ContactDialog onClose={vi.fn()} subject="Let's talk about NexaCode" />)
    expect(screen.getByLabelText("What's on your mind?")).toHaveValue("Let's talk about NexaCode")
  })

  it('shows per-field validation alerts when required fields are missing', () => {
    render(<ContactDialog onClose={vi.fn()} subject="Hello" />)
    fireEvent.submit(document.querySelector('form') as HTMLFormElement)

    const alerts = screen.getAllByRole('alert')
    expect(alerts.map((node) => node.textContent).join(' ')).toMatch(/please add your name/i)
    expect(alerts.map((node) => node.textContent).join(' ')).toMatch(/at least 10 characters/i)

    const nameInput = screen.getByLabelText('Your name')
    expect(nameInput).toHaveAttribute('aria-invalid', 'true')
    expect(nameInput).toHaveAttribute('aria-describedby', 'contact-name-error')

    fireEvent.change(nameInput, { target: { value: 'Alex' } })
    expect(screen.queryByText(/please add your name/i)).not.toBeInTheDocument()
    expect(nameInput).not.toHaveAttribute('aria-invalid')
  })

  it('requires a message of at least ten characters', () => {
    render(<ContactDialog onClose={vi.fn()} subject="Hello" />)
    fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Alex' } })
    fireEvent.change(screen.getByLabelText('A little about it'), { target: { value: 'too short' } })
    fireEvent.submit(document.querySelector('form') as HTMLFormElement)

    expect(screen.getAllByRole('alert')).toHaveLength(1)
    expect(screen.getByRole('alert')).toHaveTextContent(/at least 10 characters/i)
  })

  it('rejects a malformed optional email', () => {
    render(<ContactDialog onClose={vi.fn()} subject="Collaboration" />)
    fillForm()
    fireEvent.change(screen.getByLabelText('Your email'), { target: { value: 'not-an-email' } })
    fireEvent.submit(document.querySelector('form') as HTMLFormElement)

    expect(screen.getByRole('alert')).toHaveTextContent(/valid email address/i)
    expect(screen.queryByText('Your email draft is ready.')).not.toBeInTheDocument()
  })

  it('produces a draft after a valid submission and can copy it', async () => {
    const writeText = mockClipboard()
    render(<ContactDialog onClose={vi.fn()} subject="Collaboration" />)
    fillForm()
    fireEvent.submit(document.querySelector('form') as HTMLFormElement)

    expect(await screen.findByText('Your email draft is ready.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /open email draft/i }).getAttribute('href')).toMatch(/^mailto:/)

    fireEvent.click(screen.getByRole('button', { name: /copy draft/i }))
    expect(writeText).toHaveBeenCalledWith(expect.stringContaining('To: thandochipango316@gmail.com'))
    expect(await screen.findByRole('button', { name: /draft copied/i })).toBeInTheDocument()
  })

  it('returns to the form through Edit your message', async () => {
    render(<ContactDialog onClose={vi.fn()} subject="Collaboration" />)
    fillForm()
    fireEvent.submit(document.querySelector('form') as HTMLFormElement)
    await screen.findByText('Your email draft is ready.')

    fireEvent.click(screen.getByRole('button', { name: /edit your message/i }))
    expect(screen.getByLabelText('Your name')).toHaveValue('Alex Smith')
    expect(screen.queryByText('Your email draft is ready.')).not.toBeInTheDocument()
  })

  it('offers a direct mailto link alongside the form', () => {
    render(<ContactDialog onClose={vi.fn()} subject="Hello" />)
    expect(screen.getByRole('link', { name: /email me directly/i })).toHaveAttribute(
      'href',
      'mailto:thandochipango316@gmail.com',
    )
  })

  it('closes when Escape is pressed', () => {
    const onClose = vi.fn()
    render(<ContactDialog onClose={onClose} subject="Hello" />)
    fireEvent(screen.getByRole('dialog'), new Event('cancel', { bubbles: true, cancelable: true }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})

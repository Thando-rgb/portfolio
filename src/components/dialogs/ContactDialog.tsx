import React, { useState, type FormEvent } from 'react'
import { ArrowLeft, ArrowUpRight, Check, Copy } from 'lucide-react'
import { contact } from '../../data'
import { useCopy } from '../../hooks'
import Dialog from './Dialog'

interface FieldErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const ContactDialog: React.FC<{ onClose: () => void; subject: string }> = ({ onClose, subject }) => {
  const [form, setForm] = useState({ name: '', email: '', subject, message: '' })
  const [draft, setDraft] = useState<{ url: string; body: string } | null>(null)
  const [errors, setErrors] = useState<FieldErrors>({})
  const { copy, copyState } = useCopy()

  function update(field: keyof typeof form, value: string) {
    setForm((previous) => ({ ...previous, [field]: value }))
    if (errors[field as keyof FieldErrors]) {
      setErrors((previous) => ({ ...previous, [field]: undefined }))
    }
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {}
    if (!form.name.trim()) next.name = 'Please add your name.'
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please use a valid email address, or leave it blank.'
    }
    if (!form.subject.trim()) next.subject = 'Please add a subject.'
    if (form.message.trim().length < 10) next.message = 'Please write at least 10 characters.'
    return next
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.values(next).some(Boolean)) return
    const body = `Hi Thando,\n\n${form.message.trim()}\n\nBest,\n${form.name.trim()}\n${form.email.trim()}`
    const url = `mailto:${contact.email}?subject=${encodeURIComponent(form.subject.trim())}&body=${encodeURIComponent(body)}`
    setDraft({ url, body: `To: ${contact.email}\nSubject: ${form.subject.trim()}\n\n${body}` })
    window.location.href = url
  }

  return (
    <Dialog onClose={onClose} labelId="contact-dialog-title" className="contact-modal" eyebrow="A GOOD PLACE TO START">
      <h2 id="contact-dialog-title">Tell me what<br />you have in mind<span className="green-period">.</span></h2>
      <p className="contact-dialog-intro">A project, an opportunity, or just a hello. I'm listening.</p>
      {draft ? (
        <div className="draft-state" role="status">
          <div className="draft-check"><Check aria-hidden="true" size={25} /></div>
          <h3>Your email draft is ready.</h3>
          <p>Finish sending it in your email app. Nothing is sent automatically, and your message isn't stored on this website.</p>
          <div className="draft-actions">
            <a className="button button-dark" href={draft.url}>Open email draft <ArrowUpRight aria-hidden="true" size={16} /></a>
            <button className="button button-outline" onClick={() => void copy(draft.body)}>
              {copyState === 'copied' ? 'Draft copied' : 'Copy draft'}{copyState === 'copied' ? <Check aria-hidden="true" size={16} /> : <Copy aria-hidden="true" size={16} />}
            </button>
          </div>
          {copyState === 'error' && <p>Copy isn't available in this browser. Use the email draft link or email me directly at {contact.email}.</p>}
          <button className="text-link edit-message" onClick={() => setDraft(null)}><ArrowLeft aria-hidden="true" size={15} />Edit your message</button>
        </div>
      ) : (
        <form onSubmit={submit} className="contact-form" noValidate>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" autoComplete="name" placeholder="Alex Smith" value={form.name} onChange={(event) => update('name', event.target.value)} aria-invalid={errors.name ? true : undefined} aria-describedby={errors.name ? 'contact-name-error' : undefined} required maxLength={100} />
              {errors.name && <p id="contact-name-error" className="form-error" role="alert">{errors.name}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Your email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="alex@example.com" value={form.email} onChange={(event) => update('email', event.target.value)} aria-invalid={errors.email ? true : undefined} aria-describedby={errors.email ? 'contact-email-error' : undefined} maxLength={200} />
              {errors.email && <p id="contact-email-error" className="form-error" role="alert">{errors.email}</p>}
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="contact-subject">What's on your mind?</label>
            <input id="contact-subject" name="subject" value={form.subject} onChange={(event) => update('subject', event.target.value)} aria-invalid={errors.subject ? true : undefined} aria-describedby={errors.subject ? 'contact-subject-error' : undefined} required maxLength={160} />
            {errors.subject && <p id="contact-subject-error" className="form-error" role="alert">{errors.subject}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">A little about it</label>
            <textarea id="contact-message" name="message" rows={4} placeholder="The idea, the challenge, or what you'd like to explore..." value={form.message} onChange={(event) => update('message', event.target.value)} aria-invalid={errors.message ? true : undefined} aria-describedby={errors.message ? 'contact-message-error' : undefined} required minLength={10} maxLength={4000} />
            {errors.message && <p id="contact-message-error" className="form-error" role="alert">{errors.message}</p>}
          </div>
          <div className="form-submit-row">
            <button className="button button-dark" type="submit">Create email draft <ArrowUpRight aria-hidden="true" size={16} /></button>
            <p>Opens your email app.<br />You choose when to send.</p>
          </div>
        </form>
      )}
      <div className="contact-dialog-direct">Prefer to keep it simple? <a href={`mailto:${contact.email}`}>Email me directly <ArrowUpRight aria-hidden="true" size={13} /></a></div>
    </Dialog>
  )
}

export default ContactDialog

import React, { useEffect, useRef } from 'react'
import { m } from 'framer-motion'
import { X } from 'lucide-react'

interface DialogProps {
  children: React.ReactNode
  onClose: () => void
  labelId: string
  className?: string
  eyebrow: string
  resetKey?: string
}

const Dialog: React.FC<DialogProps> = ({ children, onClose, labelId, className = '', eyebrow, resetKey }) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    dialog?.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog?.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus({ preventScroll: true })
    }
  }, [])

  useEffect(() => {
    dialogRef.current?.scrollTo({ top: 0, behavior: 'instant' })
    if (resetKey) {
      const heading = dialogRef.current?.querySelector<HTMLElement>('h2')
      heading?.setAttribute('tabindex', '-1')
      heading?.focus({ preventScroll: true })
    }
  }, [resetKey])

  return (
    <dialog
      ref={dialogRef}
      className={`modal ${className}`}
      aria-labelledby={labelId}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="modal-topbar">
        <span className="mono">{eyebrow}</span>
        <button className="modal-close" aria-label="Close dialog" onClick={onClose}>
          <X aria-hidden="true" size={22} />
        </button>
      </div>
      <m.div className="modal-content" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        {children}
      </m.div>
    </dialog>
  )
}

export default Dialog

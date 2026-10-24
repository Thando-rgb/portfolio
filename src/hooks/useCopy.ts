import { useEffect, useRef, useState } from 'react'

export type CopyState = 'idle' | 'copied' | 'error'

export function useCopy() {
  const [copyState, setCopyState] = useState<CopyState>('idle')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current)
  }, [])

  async function copy(value: string) {
    try {
      let copied = false
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(value)
          copied = true
        }
      } catch {
        // Embedded previews can restrict the Clipboard API even on HTTPS.
      }
      if (!copied) {
        const previousFocus = document.activeElement as HTMLElement | null
        const textarea = document.createElement('textarea')
        textarea.value = value
        textarea.style.cssText = 'position:fixed;left:-9999px;top:0'
        const host = document.querySelector('dialog[open]') ?? document.body
        host.appendChild(textarea)
        textarea.select()
        try {
          copied = document.execCommand('copy')
        } finally {
          textarea.remove()
          previousFocus?.focus({ preventScroll: true })
        }
        if (!copied) throw new Error('Copy unavailable')
      }
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopyState('idle'), 3500)
  }

  return { copy, copyState }
}

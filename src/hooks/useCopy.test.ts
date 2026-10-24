import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useCopy } from './useCopy'

function setClipboard(value: Clipboard | undefined) {
  Object.defineProperty(navigator, 'clipboard', { value, configurable: true })
}

describe('useCopy', () => {
  afterEach(() => {
    setClipboard(undefined)
    Reflect.deleteProperty(document, 'execCommand')
  })

  it('copies through the Clipboard API when available', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    setClipboard({ writeText } as unknown as Clipboard)

    const { result, unmount } = renderHook(() => useCopy())
    await act(async () => {
      await result.current.copy('hello@example.com')
    })

    expect(writeText).toHaveBeenCalledWith('hello@example.com')
    expect(result.current.copyState).toBe('copied')
    unmount()
  })

  it('falls back to a hidden textarea and execCommand', async () => {
    setClipboard(undefined)
    const execCommand = vi.fn().mockReturnValue(true)
    Object.defineProperty(document, 'execCommand', { value: execCommand, configurable: true })

    const { result, unmount } = renderHook(() => useCopy())
    await act(async () => {
      await result.current.copy('fallback value')
    })

    expect(execCommand).toHaveBeenCalledWith('copy')
    expect(result.current.copyState).toBe('copied')
    expect(document.querySelector('textarea')).toBeNull()
    unmount()
  })

  it('reports an error when no copy mechanism works', async () => {
    setClipboard(undefined)

    const { result, unmount } = renderHook(() => useCopy())
    await act(async () => {
      await result.current.copy('unavailable')
    })

    expect(result.current.copyState).toBe('error')
    expect(document.querySelector('textarea')).toBeNull()
    unmount()
  })

  it('resets back to idle after the feedback window', async () => {
    vi.useFakeTimers()
    const writeText = vi.fn().mockResolvedValue(undefined)
    setClipboard({ writeText } as unknown as Clipboard)

    const { result, unmount } = renderHook(() => useCopy())
    await act(async () => {
      await result.current.copy('temp')
    })
    expect(result.current.copyState).toBe('copied')

    act(() => {
      vi.advanceTimersByTime(3600)
    })
    expect(result.current.copyState).toBe('idle')

    vi.useRealTimers()
    unmount()
  })
})

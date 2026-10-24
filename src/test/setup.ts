import '@testing-library/jest-dom/vitest'

class ObserverStub {
  root = null
  rootMargin = ''
  thresholds: number[] = []
  observe() {
    // noop stub for jsdom
  }
  unobserve() {
    // noop stub for jsdom
  }
  disconnect() {
    // noop stub for jsdom
  }
  takeRecords() {
    return []
  }
}

window.IntersectionObserver = ObserverStub as unknown as typeof IntersectionObserver
window.ResizeObserver = ObserverStub as unknown as typeof ResizeObserver

window.matchMedia = (query: string): MediaQueryList =>
  ({
    matches: false,
    media: query,
    onchange: null,
    addListener() {
      // noop stub for jsdom
    },
    removeListener() {
      // noop stub for jsdom
    },
    addEventListener() {
      // noop stub for jsdom
    },
    removeEventListener() {
      // noop stub for jsdom
    },
    dispatchEvent() {
      return false
    },
  }) as unknown as MediaQueryList

Element.prototype.scrollTo = () => {
  // noop stub for jsdom
}

HTMLDialogElement.prototype.showModal = function () {
  this.setAttribute('open', '')
}

HTMLDialogElement.prototype.close = function () {
  this.removeAttribute('open')
}

import React from 'react'
import { contact } from '../../data'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error('[ERRORBOUNDARY] unhandled render error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-fallback" role="alert">
          <p className="mono error-fallback-label">UNEXPECTED ERROR</p>
          <h1>Something went wrong<span className="green-period">.</span></h1>
          <p>This page hit an unexpected error. A reload usually fixes it, or you can reach me directly.</p>
          <div className="error-fallback-actions">
            <button className="button button-dark" onClick={() => window.location.reload()}>Reload the page</button>
            <a className="button button-outline" href={`mailto:${contact.email}`}>Email me directly</a>
          </div>
        </main>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary

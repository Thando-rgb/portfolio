import React from 'react'

const SectionLabel: React.FC<{ number: string; children: React.ReactNode; light?: boolean }> = ({ number, children, light = false }) => {
  return (
    <div className={`section-label mono ${light ? 'label-light' : ''}`}>
      <span>{number}</span>
      <span className="label-divider">/</span>
      {children}
    </div>
  )
}

export default SectionLabel

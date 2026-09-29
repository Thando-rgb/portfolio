import React from 'react'
import { m } from 'framer-motion'

const RouteIllustration: React.FC = () => {
  return (
    <svg className="route-illustration" viewBox="0 0 570 400" fill="none" role="img" aria-label="An illustrative GPS delivery route through Lilongwe, not live tracking data">
      <g className="map-blocks" fill="currentColor" opacity=".035"><path d="M90 0H178V95H90zM194 0H320V95H194zM338 0H418V95H338zM436 0H570V95H436zM0 112H95V200H0zM111 112H178V200H111zM194 112H320V200H194zM338 112H418V200H338zM436 112H570V200H436zM0 218H178V300H0zM194 218H320V300H194zM338 218H418V300H338zM436 218H570V300H436zM0 318H95V400H0zM111 318H178V400H111zM194 318H320V400H194zM338 318H570V400H338z" /></g>
      <g stroke="currentColor" opacity=".09" strokeWidth="1">
        <path d="M0 103H570M0 209H570M0 309H570M185 0V400M329 0V400M427 0V400M103 103V0M103 309V400" />
        <path d="M0 250L125 180L262 254L491 112L570 156M488 0V63L538 99V210" />
      </g>
      <path d="M103 338V309H185V209H329V103H427V76" stroke="#aabf94" strokeWidth="2" opacity=".2" strokeDasharray="4 6" />
      <m.path d="M103 338V309H185V209H329V103H427V76" stroke="#b7c99f" strokeWidth="2" strokeLinejoin="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2.4, ease: 'easeInOut', delay: 0.3 }} />
      <circle cx="103" cy="338" r="13" fill="#b7c99f" fillOpacity=".12" />
      <circle cx="103" cy="338" r="4" fill="#b7c99f" />
      <circle cx="427" cy="76" r="23" stroke="#b7c99f" strokeOpacity=".14" />
      <circle cx="427" cy="76" r="13" fill="#b7c99f" fillOpacity=".15" />
      <circle cx="427" cy="76" r="5" fill="#b7c99f" />
      <rect x="313" y="169" width="32" height="32" rx="16" fill="#b7c99f" />
      <path d="M329 176L336 192L329 188L322 192Z" fill="#1c2b23" />
      <text x="68" y="377" fill="#a0ac9e" fontSize="10" fontFamily="'DM Mono', monospace" letterSpacing="2.5">LILONGWE, MW</text>
      <text x="455" y="73" fill="#b7c99f" fontSize="9" fontFamily="'DM Mono', monospace" letterSpacing="1">CLOSER.</text>
      <text x="351" y="188" fill="#c5cfc1" fontSize="9" fontFamily="'DM Mono', monospace">ON THE WAY</text>
    </svg>
  )
}

export default RouteIllustration

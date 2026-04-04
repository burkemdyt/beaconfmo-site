'use client'

import { useState, useCallback } from 'react'

const nodes = [
  {
    id: 'case-design',
    style: { top: '7%', left: '50%', transform: 'translateX(-50%)' },
    title: 'Advanced Case Design',
    text: "Custom annuity strategies built around your client's specific retirement goals, tax situation, and income needs.",
    tooltipSide: 'bottom' as const,
    lineEnd: [240, 60] as const,
  },
  {
    id: 'ai-consult',
    style: { top: '20%', right: '5%' },
    title: 'AI Consultation',
    text: 'Leverage AI-powered insights for product positioning, client profiling, and competitive analysis in real time.',
    tooltipSide: 'left' as const,
    lineEnd: [410, 120] as const,
  },
  {
    id: 'lead-gen',
    style: { bottom: '28%', right: '3%' },
    title: 'Effective Lead Generation',
    text: 'AI-identified, exclusive leads delivered to your territory — pre-qualified, retirement-ready, and never shared.',
    tooltipSide: 'left' as const,
    lineEnd: [430, 310] as const,
  },
  {
    id: 'appointments',
    style: { bottom: '5%', left: '50%', transform: 'translateX(-50%)' },
    title: 'Qualified Appointment Setting',
    text: 'Pre-screened virtual appointments with asset-qualified prospects — delivered to your calendar at no cost.',
    tooltipSide: 'top' as const,
    lineEnd: [240, 430] as const,
  },
  {
    id: 'websites',
    style: { bottom: '28%', left: '3%' },
    title: 'Agent Website Design',
    text: 'Professional, compliance-ready websites with lead capture, appointment booking, and local SEO built in.',
    tooltipSide: 'right' as const,
    lineEnd: [50, 310] as const,
  },
  {
    id: 'content',
    style: { top: '20%', left: '5%' },
    title: 'Content & Marketing',
    text: 'Social media, email campaigns, client presentations, and educational materials — all compliance-reviewed.',
    tooltipSide: 'right' as const,
    lineEnd: [70, 120] as const,
  },
]

// Adjacent pairs for cross-lines
const crossPairs: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
]

export function Constellation() {
  const [activeNode, setActiveNode] = useState<string | null>(null)

  const activeIndex = activeNode ? nodes.findIndex((n) => n.id === activeNode) : -1

  const isLineActive = useCallback(
    (nodeIndex: number) => {
      if (activeIndex === -1) return false
      return nodeIndex === activeIndex
    },
    [activeIndex],
  )

  const isCrossActive = useCallback(
    (a: number, b: number) => {
      if (activeIndex === -1) return false
      return a === activeIndex || b === activeIndex
    },
    [activeIndex],
  )

  return (
    <div className="relative w-full max-w-[480px] aspect-square mx-auto constellation-container">
      {/* SVG lines */}
      <svg className="w-full h-full" viewBox="0 0 480 480" fill="none">
        {/* Orbiting rings with slow rotation */}
        <g className="animate-spin-slow origin-center" style={{ transformOrigin: '240px 240px' }}>
          <circle cx="240" cy="240" r="200" stroke="rgba(184,146,42,0.06)" strokeWidth="1" />
        </g>
        <g className="animate-spin-slower origin-center" style={{ transformOrigin: '240px 240px' }}>
          <circle cx="240" cy="240" r="150" stroke="rgba(184,146,42,0.08)" strokeWidth="1" />
        </g>
        <circle cx="240" cy="240" r="100" stroke="rgba(184,146,42,0.11)" strokeWidth="1" />

        {/* Constellation lines from center — glow on hover */}
        {nodes.map((node, i) => (
          <line
            key={`main-${i}`}
            x1="240"
            y1="240"
            x2={node.lineEnd[0]}
            y2={node.lineEnd[1]}
            stroke={isLineActive(i) ? 'rgba(184,146,42,0.5)' : 'rgba(184,146,42,0.12)'}
            strokeWidth={isLineActive(i) ? '1.5' : '0.8'}
            className="transition-all duration-500 ease-out"
          />
        ))}

        {/* Cross lines — highlight when adjacent to active */}
        {crossPairs.map(([a, b], i) => (
          <line
            key={`cross-${i}`}
            x1={nodes[a].lineEnd[0]}
            y1={nodes[a].lineEnd[1]}
            x2={nodes[b].lineEnd[0]}
            y2={nodes[b].lineEnd[1]}
            stroke={isCrossActive(a, b) ? 'rgba(184,146,42,0.18)' : 'rgba(184,146,42,0.05)'}
            strokeWidth={isCrossActive(a, b) ? '0.9' : '0.6'}
            className="transition-all duration-500 ease-out"
          />
        ))}

        {/* Center glow — multi-layer pulse */}
        <circle cx="240" cy="240" r="28" fill="rgba(184,146,42,0.08)">
          <animate attributeName="r" values="28;32;28" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.6;1" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="240" cy="240" r="14" fill="rgba(184,146,42,0.18)">
          <animate attributeName="r" values="14;16;14" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="240" cy="240" r="7" fill="#b8922a" opacity="0.95">
          <animate attributeName="r" values="7;8.5;7" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.95;0.7;0.95" dur="2.5s" repeatCount="indefinite" />
        </circle>

        {/* Active node glow ring */}
        {activeIndex >= 0 && (
          <circle
            cx={nodes[activeIndex].lineEnd[0]}
            cy={nodes[activeIndex].lineEnd[1]}
            r="18"
            fill="none"
            stroke="rgba(184,146,42,0.25)"
            strokeWidth="1"
            className="animate-ping-slow"
          />
        )}
      </svg>

      {/* Interactive nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute group"
          style={node.style}
          onMouseEnter={() => setActiveNode(node.id)}
          onMouseLeave={() => setActiveNode(null)}
        >
          {/* Node dot with ring */}
          <div className="relative">
            <div
              className={`w-[14px] h-[14px] rounded-full border cursor-pointer transition-all duration-500 ease-out ${
                activeNode === node.id
                  ? 'bg-gold border-gold scale-[1.6] shadow-[0_0_24px_rgba(184,146,42,0.5)]'
                  : 'bg-gold/20 border-gold/50 hover:bg-gold/40 hover:scale-125'
              }`}
            />
            {/* Subtle idle pulse ring */}
            <div
              className={`absolute inset-0 rounded-full border border-gold/20 transition-all duration-500 ${
                activeNode === node.id
                  ? 'scale-[2.5] opacity-0'
                  : 'scale-100 opacity-100 animate-pulse-ring'
              }`}
            />
          </div>

          {/* Tooltip */}
          <div
            className={`absolute z-10 w-[220px] bg-charcoal-mid/95 backdrop-blur-md border border-[rgba(184,146,42,0.18)] rounded-[6px] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] pointer-events-none transition-all duration-300 ease-out ${
              activeNode === node.id
                ? 'opacity-100 scale-100 visible'
                : 'opacity-0 scale-95 invisible'
            } ${
              node.tooltipSide === 'left'
                ? 'right-full mr-4 top-1/2 -translate-y-1/2'
                : node.tooltipSide === 'right'
                ? 'left-full ml-4 top-1/2 -translate-y-1/2'
                : node.tooltipSide === 'top'
                ? 'bottom-full mb-4 left-1/2 -translate-x-1/2'
                : 'top-full mt-4 left-1/2 -translate-x-1/2'
            }`}
          >
            <div className="font-serif text-[16px] font-semibold text-gold-light mb-1.5">
              {node.title}
            </div>
            <div className="text-[13px] font-light leading-[1.7] text-white/50">
              {node.text}
            </div>
          </div>
        </div>
      ))}

      {/* Center label */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
        <div className="font-serif text-[20px] font-semibold text-gold tracking-[0.06em]">
          Beacon
        </div>
        <div className="text-[10px] font-medium tracking-[0.18em] uppercase text-white/30">
          Your Growth Engine
        </div>
      </div>
    </div>
  )
}

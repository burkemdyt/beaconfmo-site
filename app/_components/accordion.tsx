'use client'

import { useState } from 'react'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className = '' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className={className}>
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className="border-b border-white/[0.06] last:border-b-0"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left bg-transparent border-none cursor-pointer group"
            >
              <span className="text-[15px] font-medium text-white/80 group-hover:text-gold-light transition-colors pr-4">
                {item.question}
              </span>
              <span
                className={`text-gold/50 text-[20px] leading-none transition-transform duration-300 shrink-0 ${
                  isOpen ? 'rotate-45' : 'rotate-0'
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-400 ease-out ${
                isOpen ? 'max-h-[300px] opacity-100 pb-5' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-[14px] font-light leading-[1.8] text-white/45 pr-8">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

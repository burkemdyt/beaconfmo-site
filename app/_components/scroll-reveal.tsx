'use client'

import { useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollReveal() {
  const pathname = usePathname()

  const observe = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
      observer.observe(el)
    })

    return observer
  }, [])

  useEffect(() => {
    // Small delay to let the new page render its elements
    const timeout = setTimeout(() => {
      const observer = observe()
      return () => observer.disconnect()
    }, 50)

    return () => clearTimeout(timeout)
  }, [pathname, observe])

  return null
}

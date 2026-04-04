'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BeaconLogo } from './beacon-logo'

const services = [
  { href: '/services/ai-leads', label: 'AI Lead Generation' },
  { href: '/services/content', label: 'Content Creation' },
  { href: '/services/appointments', label: 'Preset Appointments' },
  { href: '/services/websites', label: 'Website Design' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMobile = () => {
    const next = !mobileOpen
    setMobileOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[200] h-[72px] px-[5vw] flex items-center justify-between bg-[rgba(26,25,23,0.97)] backdrop-blur-[14px] border-b transition-[border-color] duration-300 ${
          scrolled
            ? 'border-[rgba(184,146,42,0.25)]'
            : 'border-[rgba(184,146,42,0.13)]'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[11px] text-white no-underline">
          <BeaconLogo className="w-[30px] h-[30px] shrink-0" />
          <span className="font-serif text-[21px] font-semibold tracking-[0.04em] text-white">
            Beacon<span className="text-gold-light">FMO</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-[34px] list-none">
          <li>
            <Link
              href="/about"
              className="text-[12.5px] font-normal tracking-[0.09em] uppercase text-white/60 hover:text-gold-light transition-colors"
            >
              Our Story
            </Link>
          </li>
          <li className="relative group">
            <span className="text-[12.5px] font-normal tracking-[0.09em] uppercase text-white/60 hover:text-gold-light transition-colors cursor-pointer select-none">
              Marketing Services
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-charcoal-mid border border-[rgba(184,146,42,0.15)] rounded-[4px] py-2 min-w-[220px] shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-5 py-[10px] text-[12.5px] tracking-[0.06em] uppercase text-white/55 hover:text-gold-light hover:bg-white/[0.03] transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li>
            <Link
              href="/products"
              className="text-[12.5px] font-normal tracking-[0.09em] uppercase text-white/60 hover:text-gold-light transition-colors"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="text-[12.5px] font-normal tracking-[0.09em] uppercase text-white/60 hover:text-gold-light transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Login CTA */}
        <a
          href="https://portal.beaconfmo.com"
          className="hidden lg:inline-block px-[22px] py-[9px] border border-gold text-gold-light text-[12px] font-medium tracking-[0.1em] uppercase rounded-[3px] transition-all duration-250 hover:bg-gold hover:text-charcoal no-underline"
        >
          Login
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center gap-[5px] w-[28px] h-[28px] bg-transparent border-none cursor-pointer"
          onClick={toggleMobile}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-full h-[1.5px] bg-white/70 transition-all duration-300 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
            }`}
          />
          <span
            className={`block w-full h-[1.5px] bg-white/70 transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-full h-[1.5px] bg-white/70 transition-all duration-300 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[199] bg-charcoal pt-[90px] px-[8vw] flex flex-col gap-0 transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <Link
          href="/about"
          onClick={closeMobile}
          className="block py-4 text-[14px] tracking-[0.08em] uppercase text-white/60 border-b border-white/5 hover:text-gold-light transition-colors"
        >
          Our Story
        </Link>
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            onClick={closeMobile}
            className="block py-4 text-[14px] tracking-[0.08em] uppercase text-white/60 border-b border-white/5 hover:text-gold-light transition-colors"
          >
            {s.label}
          </Link>
        ))}
        <Link
          href="/products"
          onClick={closeMobile}
          className="block py-4 text-[14px] tracking-[0.08em] uppercase text-white/60 border-b border-white/5 hover:text-gold-light transition-colors"
        >
          Products
        </Link>
        <Link
          href="/#contact"
          onClick={closeMobile}
          className="block py-4 text-[14px] tracking-[0.08em] uppercase text-white/60 border-b border-white/5 hover:text-gold-light transition-colors"
        >
          Contact Us
        </Link>
        <a
          href="https://portal.beaconfmo.com"
          className="mt-6 block text-center py-4 border border-gold text-gold-light text-[13px] font-medium tracking-[0.1em] uppercase rounded-[3px] hover:bg-gold hover:text-charcoal transition-all"
        >
          Login to Portal
        </a>
      </div>
    </>
  )
}

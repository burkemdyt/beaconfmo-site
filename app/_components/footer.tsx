import Link from 'next/link'
import { BeaconLogo } from './beacon-logo'

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-[rgba(184,146,42,0.08)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 px-[5vw] lg:px-[8vw] py-16 lg:py-20">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-flex items-center gap-[11px] no-underline mb-5">
            <BeaconLogo className="w-[30px] h-[30px]" />
            <span className="font-serif text-[21px] font-semibold tracking-[0.04em] text-white">
              Beacon<span className="text-gold-light">FMO</span>
            </span>
          </Link>
          <p className="text-[14px] font-light leading-[1.8] text-white/40 max-w-[300px]">
            Annuity distribution built for independent agents who want carrier
            access, real support, and a partner that actually shows up.
          </p>
        </div>

        {/* Company */}
        <div>
          <div className="text-[10px] font-medium tracking-[0.18em] uppercase text-gold/60 mb-5">
            Company
          </div>
          <ul className="list-none space-y-3">
            <li>
              <Link href="/#why" className="text-[14px] font-light text-white/45 hover:text-gold-light transition-colors">
                Why Beacon
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[14px] font-light text-white/45 hover:text-gold-light transition-colors">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-[14px] font-light text-white/45 hover:text-gold-light transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-[14px] font-light text-white/45 hover:text-gold-light transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Marketing Services */}
        <div>
          <div className="text-[10px] font-medium tracking-[0.18em] uppercase text-gold/60 mb-5">
            Marketing Services
          </div>
          <ul className="list-none space-y-3">
            <li>
              <Link href="/services/ai-leads" className="text-[14px] font-light text-white/45 hover:text-gold-light transition-colors">
                AI Lead Generation
              </Link>
            </li>
            <li>
              <Link href="/services/content" className="text-[14px] font-light text-white/45 hover:text-gold-light transition-colors">
                Content Creation
              </Link>
            </li>
            <li>
              <Link href="/services/appointments" className="text-[14px] font-light text-white/45 hover:text-gold-light transition-colors">
                Preset Appointments
              </Link>
            </li>
            <li>
              <Link href="/services/websites" className="text-[14px] font-light text-white/45 hover:text-gold-light transition-colors">
                Website Design
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <div className="text-[10px] font-medium tracking-[0.18em] uppercase text-gold/60 mb-5">
            Support
          </div>
          <ul className="list-none space-y-3">
            <li>
              <a
                href="https://portal.beaconfmo.com"
                className="text-[14px] font-light text-white/45 hover:text-gold-light transition-colors"
              >
                Agent Portal Login
              </a>
            </li>
            <li>
              <a
                href="https://portal.beaconfmo.com/crm"
                className="text-[14px] font-light text-white/45 hover:text-gold-light transition-colors"
              >
                Case Status
              </a>
            </li>
            <li>
              <a
                href="https://portal.beaconfmo.com/rate-comparison"
                className="text-[14px] font-light text-white/45 hover:text-gold-light transition-colors"
              >
                Rate Comparison Tool
              </a>
            </li>
            <li>
              <Link href="/#contact" className="text-[14px] font-light text-white/45 hover:text-gold-light transition-colors">
                Contact a Case Manager
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.04] px-[5vw] lg:px-[8vw] py-8">
        <p className="text-[11px] font-light leading-[1.85] text-white/25 max-w-[1000px]">
          Beacon is an independent marketing organization (IMO/FMO). Annuity
          products are issued by insurance carriers and backed solely by their
          claims-paying ability. Marketing services are offered separately and
          are not tied to insurance carrier contracts. This site is intended for
          licensed insurance professionals only. Not for consumer distribution.
          All contracting subject to carrier approval and applicable state
          licensing requirements.
        </p>
        <span className="block mt-4 text-[11px] font-light text-white/20">
          &copy; {new Date().getFullYear()} Beacon
        </span>
      </div>
    </footer>
  )
}

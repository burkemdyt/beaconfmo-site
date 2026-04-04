import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Products',
  description:
    '40+ carrier relationships. Every annuity type. One quoting desk that finds the best fit \u2014 not the biggest commission.',
}

const products = [
  {
    tag: 'Most Popular',
    title: 'Fixed Indexed Annuities',
    desc: 'Upside participation with no direct market loss. Ideal for clients transitioning from growth to protection \u2014 with index strategies spanning S&P 500, NASDAQ, and proprietary indices.',
    features: [
      'Principal protection with index-linked growth',
      'Multiple crediting strategies available',
      'Optional income riders for lifetime income',
      'Surrender periods typically 5\u201310 years',
    ],
  },
  {
    tag: 'Guaranteed Rate',
    title: 'Multi-Year Guaranteed Annuities',
    desc: 'Fixed rates across defined terms \u2014 the annuity equivalent of a CD, without the bank. Our MYGA desk monitors rates daily and pushes top-of-market options in real time.',
    features: [
      'Guaranteed fixed rate for the full term',
      'Terms from 2 to 10 years',
      'No market risk \u2014 rate locked at issue',
      'Competitive with bank CDs, tax-deferred',
    ],
  },
  {
    tag: 'Retirement Income',
    title: 'Income Riders & SPIA',
    desc: 'Guaranteed income for clients who need a paycheck in retirement. We quote across carriers for the highest payout factor relative to your client\u2019s age, health, and time horizon.',
    features: [
      'Lifetime income guarantees',
      'Single and joint-life payout options',
      'Immediate and deferred income starts',
      'We quote across carriers for best payout',
    ],
  },
  {
    tag: 'IRA / 401k Rollovers',
    title: 'Rollover & Transfer Strategies',
    desc: 'From direct IRA rollovers to 401(k)/403(b) transfers, we provide compliant templates, transfer tracking, and carrier-specific guidance for every rollover scenario.',
    features: [
      'Direct and indirect rollover support',
      'Compliant letter-of-instruction templates',
      'Transfer tracking and status updates',
      'Carrier-specific guidance for each scenario',
    ],
  },
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal min-h-[55vh] flex items-center justify-center text-center px-[7vw] pt-[140px] pb-[100px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(184,146,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(184,146,42,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="relative z-10 max-w-[800px] reveal">
          <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-gold-light mb-5">
            Annuity Products
          </div>
          <h1 className="font-serif text-[clamp(38px,4.5vw,64px)] font-medium leading-[1.12] text-white mb-6">
            The Right Product for <em className="italic text-gold-light">Every Client.</em>
          </h1>
          <p className="text-[17px] font-light leading-[1.8] text-white/55 max-w-[560px] mx-auto mb-8">
            40+ carrier relationships. Every annuity type. One quoting desk that
            finds the best fit — not the biggest commission. We sell what works.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/#contact" className="btn-primary">Get Contracted</Link>
            <a href="#philosophy" className="btn-ghost">Our Approach</a>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-[5vw] lg:px-[10vw] py-20 lg:py-[120px]" id="philosophy">
        <div className="section-label reveal">How We Do Business</div>
        <h2 className="section-headline reveal">
          We sell on <em>contractual guarantees</em> — not hypotheticals.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
          <div className="space-y-5 reveal">
            <p className="text-[16px] font-light leading-[1.85] text-[#5a5448]">
              At Beacon, our wholesalers have a specific way of doing business. We
              build every recommendation around <strong>what the contract actually
              guarantees</strong> — not inflated projections, not hypothetical
              income illustrations, and not best-case scenarios that rarely play
              out.
            </p>
            <p className="text-[16px] font-light leading-[1.85] text-[#5a5448]">
              We&rsquo;ve seen what happens when agents lean on over-inflated
              projections to close a sale. The client wins on paper and loses in
              reality. That&rsquo;s not how we operate.
            </p>
            <p className="text-[16px] font-light leading-[1.85] text-[#5a5448]">
              Whatever case may come across your desk, we&rsquo;ll have a fit for
              it. And we&rsquo;ll show you products that we believe will{' '}
              <strong>perform exactly how they say they will</strong>.
            </p>
          </div>
          <div className="space-y-6 reveal">
            {[
              {
                title: 'Contractual Guarantees First',
                text: "We lead with what the policy guarantees in writing \u2014 not what it might do in a best-case scenario.",
              },
              {
                title: 'No Inflated Projections',
                text: "We don't chase renewals with hypothetical income numbers. If it can't be counted on, we don't present it.",
              },
              {
                title: 'Client-First Fit',
                text: 'We match the product to the need \u2014 not the commission schedule. When the client wins, everybody wins.',
              },
            ].map((v) => (
              <div key={v.title} className="flex gap-4 items-start">
                <div className="w-[40px] h-[40px] rounded-full bg-gold/[0.08] flex items-center justify-center shrink-0 mt-1">
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                    <path d="M4 8L7 11L12 5" stroke="#b8922a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-[15px] font-medium text-charcoal mb-1">{v.title}</div>
                  <div className="text-[14px] font-light leading-[1.75] text-[#5a5448]">{v.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="bg-cream-dark px-[5vw] lg:px-[10vw] py-20 lg:py-[120px]" id="products">
        <div className="mb-12 reveal">
          <div className="section-label">Product Suite</div>
          <h2 className="section-headline">
            Every annuity type, <em>one quoting desk.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <div
              key={p.title}
              className={`bg-white border border-charcoal/[0.06] rounded-[6px] p-8 lg:p-10 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:translate-y-[-2px] transition-all duration-300 reveal reveal-d${Math.min(i + 1, 4)}`}
            >
              <div className="inline-block text-[10px] font-medium tracking-[0.1em] uppercase text-gold bg-gold/[0.08] rounded-[2px] px-2 py-[3px] mb-4">
                {p.tag}
              </div>
              <h3 className="font-serif text-[26px] font-medium text-charcoal leading-[1.2] mb-3">
                {p.title}
              </h3>
              <p className="text-[15px] font-light text-[#5a5448] leading-[1.75] mb-5">
                {p.desc}
              </p>
              <ul className="space-y-2 mb-6">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="text-[13.5px] text-[#5a5448] leading-[1.6] pl-[18px] relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-gold/60"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-[6px] text-[12.5px] font-medium tracking-[0.08em] uppercase text-gold hover:gap-[10px] transition-all duration-200 no-underline"
              >
                Get Contracted <span>&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gold py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-[5vw] lg:px-[10vw]">
          {[
            { value: '40+', label: 'Carrier relationships' },
            { value: '100%', label: 'Independent \u2014 no proprietary products' },
            { value: '15 min', label: 'Avg. response from our quoting desk' },
            { value: '$2.6M', label: 'Avg. agent annual production' },
          ].map((s) => (
            <div key={s.value} className="reveal">
              <div className="font-serif text-[clamp(36px,4vw,52px)] font-bold text-charcoal leading-none mb-1">
                {s.value}
              </div>
              <div className="text-[14px] font-medium text-charcoal-mid">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-center px-[7vw] py-[100px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(184,146,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(184,146,42,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="relative z-10 reveal">
          <h2 className="font-serif text-[clamp(34px,4vw,52px)] font-semibold leading-[1.15] text-white max-w-[600px] mx-auto mb-5">
            Ready to sell products that <em className="italic text-gold">actually perform?</em>
          </h2>
          <p className="text-[17px] text-white/55 max-w-[520px] mx-auto mb-9 leading-[1.7]">
            Contract with Beacon and get access to 40+ carriers, a dedicated
            quoting desk, and a team that puts the client first.
          </p>
          <div className="flex gap-4 justify-center flex-wrap items-center">
            <Link href="/#contact" className="btn-primary">Contact Us</Link>
            <Link href="/" className="text-[14px] font-semibold text-gold-muted hover:text-gold transition-colors no-underline">
              Back to Home &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

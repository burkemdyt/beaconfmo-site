import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Beacon was founded to fix what\u2019s broken in annuity distribution \u2014 and to finally put independent agents first.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal min-h-[55vh] flex items-center justify-center text-center px-[7vw] pt-[140px] pb-[100px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(184,146,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(184,146,42,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="relative z-10 max-w-[800px]">
          <div className="section-label justify-center on-dark reveal" style={{ justifyContent: 'center' }}>
            Our Story
          </div>
          <h1 className="font-serif text-[clamp(38px,4.5vw,64px)] font-medium leading-[1.12] text-white mb-6 reveal">
            Built Because Agents <em className="italic text-gold-light">Deserved Better.</em>
          </h1>
          <p className="text-[17px] font-light leading-[1.8] text-white/55 max-w-[560px] mx-auto reveal">
            Beacon was founded to fix what&rsquo;s broken in annuity distribution
            — and to finally put independent agents first.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-[5vw] lg:px-[10vw] py-20 lg:py-[120px]">
        <div className="section-label reveal">The Industry Problem</div>
        <h2 className="section-headline reveal">
          Most FMOs were built for <em>carriers</em>, not agents.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] mt-12 items-start">
          <div className="reveal space-y-5">
            <p className="text-[16px] font-light leading-[1.85] text-[#5a5448]">
              For decades, the FMO model has operated the same way: collect
              overrides from carriers, recruit as many agents as possible, and move
              on to the next name. Producers aren&rsquo;t partners — they&rsquo;re
              a line on a spreadsheet.
            </p>
            <p className="text-[16px] font-light leading-[1.85] text-[#5a5448]">
              The result? Agents who are genuinely trying to grow their practice
              are left without the tools to do it. No dedicated support when a case
              gets complicated. No marketing strategy tailored to their market.
            </p>
            <p className="text-[16px] font-light leading-[1.85] text-[#5a5448]">
              We built Beacon because we believe agents deserve more than a
              contract and a commission schedule. They deserve a partner
              that&rsquo;s invested in growing their brand — not just collecting
              overrides off their production.
            </p>
          </div>
          <div className="bg-charcoal rounded-[6px] p-10 reveal">
            {[
              'Voicemail-only support',
              'Producers treated as names on a spreadsheet',
              'Generic, one-size-fits-all marketing',
              'No investment in growing your brand',
            ].map((label, i) => (
              <div
                key={i}
                className={`flex gap-[18px] items-start py-[18px] ${
                  i < 3 ? 'border-b border-white/[0.06]' : ''
                }`}
              >
                <span className="font-serif text-[22px] font-medium text-gold/60 leading-none min-w-[30px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[15px] font-normal text-white/[0.78] leading-[1.5]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="bg-white px-[5vw] lg:px-[10vw] py-20 lg:py-[120px]">
        <div className="section-label reveal">Why We Started</div>
        <h2 className="section-headline reveal">
          We saw agents feeling left behind — not because they couldn&rsquo;t
          sell, but because{' '}
          <em>no one was building with them.</em>
        </h2>
        <div className="max-w-[720px] mt-12 space-y-5">
          <p className="text-[16px] font-light leading-[1.85] text-[#5a5448] reveal">
            Beacon was founded by people who lived the independent agent
            experience. We sat in the same kitchen-table appointments. We waited
            on the same hold lines. We watched talented producers feel like the
            industry was moving forward without them.
          </p>
          <div className="py-9 pl-8 border-l-[3px] border-gold my-12 reveal">
            <p className="font-serif text-[clamp(22px,2.4vw,30px)] italic font-medium text-gold leading-[1.45]">
              We didn&rsquo;t build Beacon to be the biggest. We built it to be
              the one agents actually want to stay with.
            </p>
          </div>
          <p className="text-[16px] font-light leading-[1.85] text-[#5a5448] reveal">
            The pattern was always the same: an agent would get excited about the
            annuity space, contract with an FMO, and then realize they were on
            their own. Cases would stall for weeks. Marketing meant a generic
            flyer with someone else&rsquo;s branding on it.
          </p>
          <p className="text-[16px] font-light leading-[1.85] text-[#5a5448] reveal">
            We built Beacon from the ground up to be the FMO we wished we had.
            One where every agent gets a dedicated case manager. One where carrier
            access is broad and immediate. One where marketing isn&rsquo;t an
            afterthought — it&rsquo;s a core part of how we help agents build a
            real, recognizable brand.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-dark px-[5vw] lg:px-[10vw] py-20 lg:py-[120px]">
        <div className="section-label reveal">Our Values</div>
        <h2 className="section-headline reveal">
          The principles that <em>guide everything</em> we do.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-14">
          {[
            {
              title: 'Agent Independence',
              text: "Your book is yours. Your clients are yours. We'll never hold your business hostage or push proprietary products. You stay because the partnership works — not because you're locked in.",
              icon: (
                <svg viewBox="0 0 44 44" fill="none" className="w-[44px] h-[44px]">
                  <path d="M22 4L38 12V24C38 33.3 30.8 39.6 22 42C13.2 39.6 6 33.3 6 24V12L22 4Z" stroke="#b8922a" strokeWidth="1.2" />
                  <path d="M16 22L20 26L28 18" stroke="#b8922a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
            {
              title: 'Branding Built Around You',
              text: "Your brand is the priority — not ours. We help you build a professional identity that your clients recognize and trust, from marketing materials to your online presence.",
              icon: (
                <svg viewBox="0 0 44 44" fill="none" className="w-[44px] h-[44px]">
                  <rect x="6" y="10" width="32" height="24" rx="2" stroke="#b8922a" strokeWidth="1.2" />
                  <circle cx="22" cy="22" r="6" stroke="#b8922a" strokeWidth="1.2" />
                  <circle cx="22" cy="22" r="2" fill="#b8922a" />
                </svg>
              ),
            },
            {
              title: 'Real Human Support',
              text: "When you call, a real case manager answers. Not a phone tree. Not a voicemail. A person who knows your name and your cases. Because that's how partnership is supposed to work.",
              icon: (
                <svg viewBox="0 0 44 44" fill="none" className="w-[44px] h-[44px]">
                  <path d="M22 8C15 8 10 14 10 20V28H14L16 36H28L30 28H34V20C34 14 29 8 22 8Z" stroke="#b8922a" strokeWidth="1.2" strokeLinejoin="round" />
                  <path d="M8 20C8 20 6 20 6 22C6 24 8 24 8 24" stroke="#b8922a" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M36 20C36 20 38 20 38 22C38 24 36 24 36 24" stroke="#b8922a" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              ),
            },
          ].map((v) => (
            <div
              key={v.title}
              className="bg-white border border-charcoal/[0.06] rounded-[6px] p-10 hover:translate-y-[-3px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 reveal"
            >
              <div className="mb-6">{v.icon}</div>
              <h3 className="font-serif text-[24px] font-semibold text-charcoal mb-3">
                {v.title}
              </h3>
              <p className="text-[15px] font-light leading-[1.75] text-[#5a5448]">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-center px-[7vw] py-[100px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(184,146,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(184,146,42,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="section-headline text-white reveal">
            Ready to work with an FMO that was{' '}
            <em className="text-gold-light">built for you?</em>
          </h2>
          <p className="text-[17px] font-light leading-[1.7] text-white/50 max-w-[520px] mx-auto mb-10 reveal">
            Join the agents who stopped settling and started growing. Your book,
            your clients, your business — with real support behind you.
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap reveal">
            <Link href="/#contact" className="btn-primary">
              Contact Us
            </Link>
            <Link href="/#why" className="btn-ghost">
              See How We Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

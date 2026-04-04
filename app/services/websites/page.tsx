import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Website Design',
  description:
    'Professional, compliance-ready websites for annuity agents \u2014 lead capture, appointment booking, and local SEO built in.',
}

export default function WebsitesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal min-h-[55vh] flex items-center justify-center text-center px-[7vw] pt-[140px] pb-[100px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(184,146,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(184,146,42,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="relative z-10 max-w-[800px] reveal">
          <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-gold-light mb-5">
            Marketing Services — Website Design
          </div>
          <h1 className="font-serif text-[clamp(38px,4.5vw,64px)] font-medium leading-[1.12] text-white mb-6">
            A Website That Works <em className="italic text-gold-light">As Hard As You Do.</em>
          </h1>
          <p className="text-[17px] font-light leading-[1.8] text-white/55 max-w-[560px] mx-auto mb-8">
            Your website is your first impression. We build professional, compliance-ready sites for annuity agents — designed to capture leads, educate prospects, and book appointments while you&rsquo;re focused on selling.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/#contact" className="btn-primary">Get Started</Link>
            <a href="#features" className="btn-ghost">See Features</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-[5vw] lg:px-[10vw] py-20 lg:py-[120px]" id="features">
        <div className="section-label reveal">Agent Websites</div>
        <h2 className="section-headline reveal">Not a template. A website built for <em>your practice.</em></h2>
        <p className="section-sub reveal">
          Generic website builders don&rsquo;t understand compliance, annuity language, or what motivates retirement-age prospects. We do.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            { title: 'Lead Capture Forms', text: 'Smart forms that collect prospect info and route it directly to your inbox or CRM. Every submission is a qualified lead.' },
            { title: 'Appointment Booking', text: "Integrated calendar booking. Prospects pick a time that works, you get a notification. No phone tag, no back-and-forth." },
            { title: 'Annuity Education Pages', text: 'Pre-written, compliance-reviewed content pages explaining FIAs, MYGAs, income riders, and rollover strategies.' },
            { title: 'Mobile-First Design', text: "Over 70% of your prospects will visit your site from a phone. Every site we build is mobile-first, fast-loading, and touch-optimized." },
            { title: 'SEO for Local Search', text: 'We optimize for "[your city] retirement advisor," "annuity agent near me," and similar local searches. When prospects search, you show up.' },
            { title: 'Compliance-Ready', text: 'Every page, form, and disclosure is reviewed for insurance marketing compliance. No fine print surprises, no regulatory headaches.' },
          ].map((f) => (
            <div key={f.title} className="border border-charcoal/[0.06] rounded-[6px] p-8 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:translate-y-[-2px] transition-all duration-300 reveal">
              <h3 className="font-serif text-[20px] font-semibold text-charcoal mb-2">{f.title}</h3>
              <p className="text-[14px] font-light leading-[1.75] text-[#5a5448]">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="on-dark px-[5vw] lg:px-[10vw] py-20 lg:py-[120px]">
        <div className="section-label reveal">How It Works</div>
        <h2 className="section-headline reveal">From first call to <em>live site</em> in under two weeks.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { num: '01', title: 'Discovery', text: "A 30-minute call to understand your practice, your market, and your goals. We learn who you serve and what sets you apart." },
            { num: '02', title: 'Design & Build', text: 'Our team designs and builds your site. You review a live preview, request changes, and approve. No coding on your end \u2014 ever.' },
            { num: '03', title: 'Launch & Support', text: 'We handle hosting, domain setup, SSL certificates, and ongoing maintenance. Need a change? Our support team responds within one business day.' },
          ].map((s) => (
            <div key={s.num} className="bg-charcoal-mid border border-[rgba(184,146,42,0.08)] rounded-[6px] p-8 reveal">
              <span className="font-serif text-[28px] font-semibold text-gold/30">{s.num}</span>
              <h3 className="font-serif text-[20px] font-semibold text-white mt-3 mb-2">{s.title}</h3>
              <p className="text-[14px] font-light leading-[1.8] text-white/45">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Included */}
      <section className="px-[5vw] lg:px-[10vw] py-20 lg:py-[120px]">
        <div className="section-label reveal">Your Package</div>
        <h2 className="section-headline reveal">Everything included — <em>no hidden costs.</em></h2>
        <div className="mt-10 space-y-0 max-w-[700px]">
          {[
            'Custom 5-7 page website',
            'Mobile-responsive design',
            'Lead capture forms with email routing',
            'Appointment booking integration',
            '3 compliance-reviewed content pages',
            'SEO setup for local search',
            'SSL certificate & hosting',
            'Ongoing support & edits',
          ].map((item) => (
            <div key={item} className="flex items-center justify-between py-4 border-b border-charcoal/[0.06] reveal">
              <div className="flex items-center gap-3">
                <span className="inline-block text-[10px] font-medium tracking-[0.1em] uppercase text-gold bg-gold/[0.08] rounded-[3px] px-2 py-[3px]">
                  Included
                </span>
                <span className="text-[14px] font-normal text-charcoal">{item}</span>
              </div>
              <span className="text-gold/40">&rarr;</span>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="bg-cream-dark px-[5vw] lg:px-[10vw] py-20 lg:py-[120px]">
        <div className="text-center mb-12">
          <div className="section-label justify-center reveal" style={{ justifyContent: 'center' }}>Results</div>
          <h2 className="section-headline reveal">What happens when agents get a <em>real website.</em></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
          {[
            { value: '340%', desc: 'Average increase in online lead inquiries within 90 days' },
            { value: '2.8x', desc: 'More appointment bookings vs. agents without a dedicated site' },
            { value: '< 3 sec', desc: 'Average page load time across all devices' },
          ].map((s) => (
            <div key={s.value} className="bg-white border border-charcoal/[0.06] rounded-[6px] p-8 text-center reveal">
              <div className="font-serif text-[40px] font-bold text-gold leading-none mb-3">{s.value}</div>
              <p className="text-[14px] font-light text-[#5a5448]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-center px-[7vw] py-[100px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(184,146,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(184,146,42,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="relative z-10 reveal">
          <h2 className="font-serif text-[clamp(34px,4vw,52px)] font-semibold leading-[1.15] text-white max-w-[600px] mx-auto mb-5">
            Ready for a website that <em className="italic text-gold">actually generates business?</em>
          </h2>
          <p className="text-[17px] text-white/55 max-w-[520px] mx-auto mb-9 leading-[1.7]">
            Contract with Beacon and get your professional agent website included with our marketing platform.
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

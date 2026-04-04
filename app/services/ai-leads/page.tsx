import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Lead Generation',
  description:
    'AI-powered leads that actually convert. Our AI identifies retirement-ready prospects and delivers them exclusively to your desk.',
}

export default function AILeadsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal min-h-[55vh] flex items-center justify-center text-center px-[7vw] pt-[140px] pb-[100px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(184,146,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(184,146,42,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="relative z-10 max-w-[800px] reveal">
          <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-gold-light mb-5">
            Marketing Services — AI Lead Generation
          </div>
          <h1 className="font-serif text-[clamp(38px,4.5vw,64px)] font-medium leading-[1.12] text-white mb-6">
            AI-Powered Leads That <em className="italic text-gold-light">Actually Convert.</em>
          </h1>
          <p className="text-[17px] font-light leading-[1.8] text-white/55 max-w-[560px] mx-auto mb-8">
            Stop chasing cold lists. Our AI identifies retirement-ready prospects based on real data — age, assets, life events — and delivers them exclusively to your desk.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/#contact" className="btn-primary">Get Started</Link>
            <a href="#how-it-works" className="btn-ghost">See How It Works</a>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="px-[5vw] lg:px-[10vw] py-20 lg:py-[120px]">
        <div className="section-label reveal">Why AI Leads</div>
        <h2 className="section-headline reveal">
          Old-school lead gen is <em>broken</em>. Here&rsquo;s what agents tell us.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { num: '01', title: 'Shared Leads', text: 'You pay $30 for a lead that five other agents already called. By the time you dial, the prospect is annoyed.' },
            { num: '02', title: 'Outdated Data', text: "Direct mail lists from 2019. Internet leads that bounced three inboxes ago. You're burning budget on ghosts." },
            { num: '03', title: 'No Pre-Qualification', text: 'A "lead" that turns out to be a 32-year-old with $4K in savings isn\'t a lead. It\'s a waste of your afternoon.' },
          ].map((p) => (
            <div key={p.num} className="bg-charcoal rounded-[6px] p-8 reveal">
              <span className="font-serif text-[28px] font-semibold text-gold/30">{p.num}</span>
              <h3 className="font-serif text-[22px] font-semibold text-white mt-3 mb-2">{p.title}</h3>
              <p className="text-[14px] font-light leading-[1.8] text-white/45">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="on-dark px-[5vw] lg:px-[10vw] py-20 lg:py-[120px]" id="how-it-works">
        <div className="section-label reveal">How It Works</div>
        <h2 className="section-headline reveal">From data to <em>doorstep</em> in three steps.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { step: 'Step 01', title: 'AI Identification', text: 'Our models analyze public financial data, life-event triggers, and demographic patterns to identify prospects with annuity-appropriate profiles.' },
            { step: 'Step 02', title: 'Qualification & Scoring', text: 'Each prospect is scored on readiness-to-buy. Only leads above our qualification threshold make it to your queue.' },
            { step: 'Step 03', title: 'Exclusive Delivery', text: 'Leads are delivered in real-time to your CRM or inbox. Every lead is exclusive to you \u2014 never shared, never resold.' },
          ].map((s) => (
            <div key={s.step} className="bg-charcoal-mid border border-[rgba(184,146,42,0.08)] rounded-[6px] p-8 reveal">
              <div className="text-[10px] font-medium tracking-[0.15em] uppercase text-gold/50 mb-3">{s.step}</div>
              <h3 className="font-serif text-[20px] font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-[14px] font-light leading-[1.8] text-white/45">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-[5vw] lg:px-[10vw] py-20 lg:py-[120px]">
        <div className="section-label reveal">What&rsquo;s Included</div>
        <h2 className="section-headline reveal">Everything you need to <em>start closing</em> from day one.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            { title: 'Exclusive Territory', text: 'Your leads come from your defined geography. No overlap, no competition from other agents using the same system.' },
            { title: 'Real-Time Delivery', text: 'Leads hit your inbox or CRM within minutes of qualification. Speed-to-contact is everything \u2014 we optimize for it.' },
            { title: 'Prospect Dossier', text: 'Every lead includes age, estimated assets, life event trigger, and a suggested approach script. You walk in prepared.' },
            { title: 'Performance Dashboard', text: "Track conversion rates, ROI, and pipeline value. See exactly what's working and where to double down." },
          ].map((f) => (
            <div key={f.title} className="border border-charcoal/[0.06] rounded-[6px] p-8 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:translate-y-[-2px] transition-all duration-300 reveal">
              <h3 className="font-serif text-[20px] font-semibold text-charcoal mb-2">{f.title}</h3>
              <p className="text-[14px] font-light leading-[1.75] text-[#5a5448]">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-center px-[7vw] py-[100px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(184,146,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(184,146,42,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="relative z-10 reveal">
          <h2 className="font-serif text-[clamp(34px,4vw,52px)] font-semibold leading-[1.15] text-white max-w-[600px] mx-auto mb-5">
            Ready to fill your pipeline with <em className="italic text-gold">qualified prospects?</em>
          </h2>
          <p className="text-[17px] text-white/55 max-w-[520px] mx-auto mb-9 leading-[1.7]">
            Contract with Beacon and get access to AI lead generation as part of our marketing platform.
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

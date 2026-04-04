import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Preset Appointments',
  description:
    'Qualified virtual appointments with retirement-age prospects \u2014 confirmed times, pre-qualified financials, and a reason to listen.',
}

export default function AppointmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal min-h-[55vh] flex items-center justify-center text-center px-[7vw] pt-[140px] pb-[100px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(184,146,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(184,146,42,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="relative z-10 max-w-[800px] reveal">
          <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-gold-light mb-5">
            Marketing Services — Preset Appointments
          </div>
          <h1 className="font-serif text-[clamp(38px,4.5vw,64px)] font-medium leading-[1.12] text-white mb-6">
            Qualified Virtual Appointments, <em className="italic text-gold-light">Ready to Close.</em>
          </h1>
          <p className="text-[17px] font-light leading-[1.8] text-white/55 max-w-[600px] mx-auto mb-8">
            Stop cold-calling. We connect you with retirement-age prospects via scheduled virtual meetings — confirmed times, pre-qualified financials, and a reason to listen. No windshield time. No no-shows.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/#contact" className="btn-primary">Get Started</Link>
            <a href="#how-it-works" className="btn-ghost">How It Works</a>
          </div>
        </div>
      </section>

      {/* Difference */}
      <section className="px-[5vw] lg:px-[10vw] py-20 lg:py-[120px]">
        <div className="section-label reveal">Why Preset Appointments</div>
        <h2 className="section-headline reveal">Not all appointments are <em>created equal.</em> Ours come ready.</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-5 reveal">
            <p className="text-[16px] font-light leading-[1.85] text-[#5a5448]">
              Most appointment-setting services deliver unqualified names — people who barely remember opting in, have no real assets, or simply agreed to get off the phone. The result is wasted time and a calendar full of no-shows.
            </p>
            <p className="text-[16px] font-light leading-[1.85] text-[#5a5448]">
              Beacon&rsquo;s preset virtual appointment program pre-screens every prospect for retirement timeline, investable assets, and genuine interest in income planning. When you join the call, the prospect is expecting you.
            </p>
            <p className="text-[16px] font-light leading-[1.85] text-[#5a5448]">
              <strong>And the best part: this is a production-based program, provided to our producers at no cost.</strong> We invest in your success because when you grow, we grow.
            </p>
          </div>
          <div className="bg-charcoal rounded-[6px] overflow-hidden reveal">
            <div className="grid grid-cols-2 bg-charcoal-mid px-6 py-4 text-[10px] font-medium tracking-[0.12em] uppercase">
              <span className="text-white/35">Traditional Lead</span>
              <span className="text-gold-light">Beacon Appointment</span>
            </div>
            {[
              ['Cold name from a list', 'Pre-screened, confirmed prospect'],
              ['You chase them', "They're expecting you on a scheduled video call"],
              ['No financial pre-qualification', 'Asset-qualified for annuity suitability'],
              ['25\u201340% show rate', '85%+ confirmed show rate'],
            ].map(([trad, beacon], i) => (
              <div key={i} className="grid grid-cols-2 px-6 py-4 border-t border-white/[0.04]">
                <span className="text-[13px] font-light text-white/35">{trad}</span>
                <span className="text-[13px] font-light text-gold-light/80">{beacon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="on-dark px-[5vw] lg:px-[10vw] py-20 lg:py-[120px]" id="how-it-works">
        <div className="section-label reveal">How It Works</div>
        <h2 className="section-headline reveal">From prospect identification to <em>your calendar</em> in four steps.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            { num: '01', title: 'Prospect Identification', text: 'Our team identifies retirement-age homeowners in your target area using financial, demographic, and behavioral data.' },
            { num: '02', title: 'Initial Outreach', text: 'Trained appointment setters contact prospects by phone. The conversation is educational \u2014 focused on retirement income planning, not sales.' },
            { num: '03', title: 'Qualification & Confirmation', text: 'Prospects who express interest are pre-qualified on age, timeline, and assets. Virtual appointments are confirmed with date, time, and a video meeting link.' },
            { num: '04', title: 'Delivery to You', text: 'You receive a complete prospect brief: name, age, financial snapshot, reason for interest, and a confirmed virtual meeting link.' },
          ].map((s) => (
            <div key={s.num} className="bg-charcoal-mid border border-[rgba(184,146,42,0.08)] rounded-[6px] p-8 reveal">
              <span className="font-serif text-[28px] font-semibold text-gold/30">{s.num}</span>
              <h3 className="font-serif text-[20px] font-semibold text-white mt-3 mb-2">{s.title}</h3>
              <p className="text-[14px] font-light leading-[1.8] text-white/45">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-center px-[7vw] py-[100px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(184,146,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(184,146,42,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="relative z-10 reveal">
          <h2 className="font-serif text-[clamp(34px,4vw,52px)] font-semibold leading-[1.15] text-white max-w-[600px] mx-auto mb-5">
            Ready to stop chasing and <em className="italic text-gold">start closing?</em>
          </h2>
          <p className="text-[17px] text-white/55 max-w-[520px] mx-auto mb-9 leading-[1.7]">
            Contract with Beacon and get access to our preset virtual appointment program — at no cost to you.
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

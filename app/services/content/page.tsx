import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Content Creation',
  description:
    'Professional content and marketing materials for annuity agents \u2014 social media, email campaigns, presentations, and more.',
}

export default function ContentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal min-h-[55vh] flex items-center justify-center text-center px-[7vw] pt-[140px] pb-[100px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(184,146,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(184,146,42,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="relative z-10 max-w-[800px] reveal">
          <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-gold-light mb-5">
            Marketing Services — Content Creation
          </div>
          <h1 className="font-serif text-[clamp(38px,4.5vw,64px)] font-medium leading-[1.12] text-white mb-6">
            Content That Builds Trust <em className="italic text-gold-light">Before the First Handshake.</em>
          </h1>
          <p className="text-[17px] font-light leading-[1.8] text-white/55 max-w-[560px] mx-auto mb-8">
            Social media, email campaigns, client presentations, and educational materials — all compliance-reviewed and built for your brand.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/#contact" className="btn-primary">Get Started</Link>
            <a href="#services" className="btn-ghost">See Services</a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-[5vw] lg:px-[10vw] py-20 lg:py-[120px]" id="services">
        <div className="section-label reveal">Content Services</div>
        <h2 className="section-headline reveal">
          Everything your practice needs to <em>look the part</em> — and close the deal.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            { title: 'Social Media Content', text: 'Branded posts for LinkedIn, Facebook, and Instagram. Educational content about retirement planning written to engage, not just inform.' },
            { title: 'Email Campaigns', text: 'Drip sequences that nurture prospects from curious to committed. Pre-built for common scenarios: post-seminar follow-up, birthday outreach, rollover reminders.' },
            { title: 'Client Presentations', text: 'Polished slide decks for kitchen-table meetings. Carrier-neutral, compliance-reviewed, and designed to explain FIAs, MYGAs, and income riders in plain English.' },
            { title: 'Educational Guides', text: "Downloadable PDFs your prospects actually read. Topics include 'Understanding Fixed Index Annuities,' 'IRA Rollover Checklist,' and more." },
            { title: 'Video Scripts', text: "Teleprompter-ready scripts for YouTube, social reels, and webinar intros. We handle the research and compliance \u2014 you just hit record." },
            { title: 'Print Materials', text: 'Brochures, leave-behinds, and seminar invitations. Professionally designed, print-ready, and customized with your branding.' },
          ].map((s) => (
            <div key={s.title} className="border border-charcoal/[0.06] rounded-[6px] p-8 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:translate-y-[-2px] transition-all duration-300 reveal">
              <h3 className="font-serif text-[20px] font-semibold text-charcoal mb-2">{s.title}</h3>
              <p className="text-[14px] font-light leading-[1.75] text-[#5a5448]">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Content Matters */}
      <section className="on-dark px-[5vw] lg:px-[10vw] py-20 lg:py-[120px]">
        <div className="section-label reveal">Why Content Matters</div>
        <h2 className="section-headline reveal">Agents who educate <em>close more.</em> The data proves it.</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-5 reveal">
            <p className="text-[16px] font-light leading-[1.85] text-white/55">
              Modern consumers don&rsquo;t just pick up the phone and call an agent anymore. They search. They read. They compare. If you&rsquo;re invisible, you&rsquo;re irrelevant.
            </p>
            <p className="text-[16px] font-light leading-[1.85] text-white/55">
              Agents who consistently share educational content build trust before the first handshake. They establish authority, and that authority translates directly into higher close rates and larger case sizes.
            </p>
          </div>
          <div className="space-y-6 reveal">
            {[
              { num: '400%', desc: 'increase in searches for virtual financial advice \u2014 prospects are looking online first' },
              { num: '74%', desc: 'of prospects research an advisor online before scheduling a meeting' },
              { num: '3.1x', desc: 'higher close rate for agents who share educational content pre-meeting' },
            ].map((s) => (
              <div key={s.num} className="bg-charcoal-mid border border-[rgba(184,146,42,0.08)] rounded-[6px] p-6">
                <div className="font-serif text-[32px] font-semibold text-gold-light leading-none mb-2">{s.num}</div>
                <div className="text-[13px] font-light text-white/40">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-[5vw] lg:px-[10vw] py-20 lg:py-[120px]">
        <div className="section-label reveal">The Process</div>
        <h2 className="section-headline reveal">From strategy to <em>publish-ready</em> in days, not weeks.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { num: '01', title: 'Strategy Call', text: "We learn your market, your voice, and your goals. We tailor content to your audience." },
            { num: '02', title: 'AI Tools & Implementation', text: 'We build you a custom content plan powered by AI tools \u2014 from automated post generation to email sequence builders.' },
            { num: '03', title: 'Consultation & Execution', text: "We schedule a one-on-one consultation to walk through your content structure and exactly where our team fits in." },
          ].map((s) => (
            <div key={s.num} className="border border-charcoal/[0.06] rounded-[6px] p-8 reveal">
              <span className="font-serif text-[28px] font-semibold text-gold/30">{s.num}</span>
              <h3 className="font-serif text-[20px] font-semibold text-charcoal mt-3 mb-2">{s.title}</h3>
              <p className="text-[14px] font-light leading-[1.75] text-[#5a5448]">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-center px-[7vw] py-[100px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(184,146,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(184,146,42,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="relative z-10 reveal">
          <h2 className="font-serif text-[clamp(34px,4vw,52px)] font-semibold leading-[1.15] text-white max-w-[600px] mx-auto mb-5">
            Ready to let your content <em className="italic text-gold">do the selling?</em>
          </h2>
          <p className="text-[17px] text-white/55 max-w-[520px] mx-auto mb-9 leading-[1.7]">
            Contract with Beacon and unlock our full content creation platform.
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

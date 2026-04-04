import Link from 'next/link'
import { Constellation } from './_components/constellation'
import { ContactForm } from './_components/contact-form'
import { AnimatedCounter } from './_components/animated-counter'
import { Typewriter } from './_components/typewriter'
import { GradientOrbs } from './_components/gradient-orbs'
import { Accordion } from './_components/accordion'

const tickerItems = [
  'Fixed Indexed Annuities',
  'Multi-Year Guaranteed',
  'Single Premium Immediate',
  'Income Benefit Riders',
  'Rollover Strategies',
  'Suitability Compliance',
  'E-Application Support',
  'Life-Only Riders',
  'Rate Comparison Tool',
]

const resources = [
  { tag: 'Tool', title: 'Live Annuity Rate Comparison', href: 'https://portal.beaconfmo.com/rate-comparison' },
  { tag: 'Tool', title: 'Income Rider Illustrator', href: 'https://portal.beaconfmo.com' },
  { tag: 'Guide', title: 'Suitability & Disclosure Checklist', href: 'https://portal.beaconfmo.com' },
  { tag: 'Marketing', title: 'AI-Powered Lead Generation', href: '/services/ai-leads' },
  { tag: 'Marketing', title: 'Preset Virtual Appointments', href: '/services/appointments' },
  { tag: 'Marketing', title: 'Content & Marketing Creation', href: '/services/content' },
  { tag: 'Marketing', title: 'Agent Website Design', href: '/services/websites' },
  { tag: 'Portal', title: 'Agent Portal & Case Status', href: 'https://portal.beaconfmo.com/crm' },
]

const aiFaqItems = [
  {
    question: 'Do I need to be tech-savvy to use the AI tools?',
    answer: "Not at all. We set everything up for you and walk you through it step by step. Most agents are up and running within a single call. If you can send an email, you can use these tools.",
  },
  {
    question: "What kind of AI tools are we talking about?",
    answer: "Think lead scoring that tells you who's actually ready to buy, content generators that write your social posts in your voice, and smart CRM workflows that follow up with prospects automatically. No robots replacing you — just tools that handle the busywork so you can focus on selling.",
  },
  {
    question: 'Is there an extra cost for the AI consultation?',
    answer: "Nope. The AI strategy consultation is included for contracted agents. We want you producing, and these tools help you get there faster. It's that simple.",
  },
  {
    question: 'How is this different from what other FMOs offer?',
    answer: "Most FMOs hand you a login to some generic CRM and call it a day. We sit down with you, learn how you actually work, and build a custom implementation plan. Then we help you execute it. It's hands-on, not hands-off.",
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
        <GradientOrbs />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center w-full px-[5vw] lg:px-[8vw] pt-[120px] pb-16 lg:pt-[72px] lg:pb-0">
          {/* Left */}
          <div className="max-w-[560px]">
            <div className="section-label on-dark reveal">
              Independent Annuity Distribution
            </div>

            <h1 className="font-serif text-[clamp(36px,5vw,62px)] font-medium leading-[1.08] text-white mb-6 reveal reveal-d1">
              Your clients<br />
              deserve a plan.<br />
              <em className="italic text-gold-light">We build yours.</em>
            </h1>

            <p className="text-[16px] font-light leading-[1.85] text-white/55 max-w-[480px] mb-4 reveal reveal-d2">
              Beacon partners with independent agents to deliver the annuity
              contracts, carrier access, and back-office support you need to grow
              a practice worth keeping.
            </p>

            <p className="text-[14px] font-light text-white/35 mb-10 reveal reveal-d2">
              We help you with{' '}
              <Typewriter
                words={[
                  'AI-powered lead generation',
                  'automated follow-up systems',
                  'smart content creation',
                  'case design & quoting',
                  'production-based marketing',
                ]}
                className="text-gold-light"
              />
            </p>

            <div className="flex flex-wrap gap-4 mb-10 reveal reveal-d3">
              <a href="#contact" className="btn-primary">Contact Us</a>
              <a href="#why" className="btn-ghost">See how we work</a>
            </div>

            <div className="border-t border-white/[0.06] pt-8 reveal reveal-d4">
              <div className="flex gap-14">
                <div>
                  <div className="font-serif text-[36px] font-semibold text-gold-light leading-none">
                    <AnimatedCounter end={40} suffix="+" />
                  </div>
                  <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-white/35 mt-2">
                    Carrier Relationships
                  </div>
                </div>
                <div>
                  <div className="font-serif text-[36px] font-semibold text-gold-light leading-none">
                    <AnimatedCounter end={15} suffix=" min" />
                  </div>
                  <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-white/35 mt-2">
                    Avg. Response Time
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Constellation */}
          <div className="relative flex items-center justify-center">
            <Constellation />

            {/* Floating stat cards */}
            <div className="hidden lg:block absolute -bottom-4 -left-4 bg-charcoal-mid border border-[rgba(184,146,42,0.12)] rounded-[4px] px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] animate-float reveal reveal-d3">
              <div className="text-[10px] font-medium tracking-[0.15em] uppercase text-gold/50">
                Avg. Agent Production
              </div>
              <div className="font-serif text-[28px] font-semibold text-gold-light leading-tight">
                $<AnimatedCounter end={2} suffix=".6M" duration={1500} />
              </div>
              <div className="text-[11px] font-light text-white/30">
                Annual premium placed
              </div>
            </div>

            <div className="hidden lg:block absolute -top-2 -right-4 bg-charcoal-mid border border-[rgba(184,146,42,0.12)] rounded-[4px] px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] animate-float-delayed reveal reveal-d4">
              <div className="text-[10px] font-medium tracking-[0.15em] uppercase text-gold/50">
                Active Carriers
              </div>
              <div className="font-serif text-[28px] font-semibold text-gold-light leading-tight">
                <AnimatedCounter end={40} suffix="+" duration={1500} />
              </div>
              <div className="text-[11px] font-light text-white/30">
                FIA &middot; MYGA &middot; SPIA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-inner">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i}>
              <span className="ticker-item">{item}</span>
              <span className="ticker-sep"> &middot; </span>
            </span>
          ))}
        </div>
      </div>

      {/* ── WHY BEACON ── */}
      <section className="px-[5vw] lg:px-[8vw] py-20 lg:py-28" id="why">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-20 items-start">
          <div>
            <div className="section-label reveal">Why Beacon</div>
            <h2 className="section-headline reveal reveal-d1">
              We exist to make <em>great agents</em>
              <br />
              great businesses.
            </h2>
            <p className="section-sub reveal reveal-d2">
              Most FMOs hand you a contract and disappear. We&rsquo;re built
              differently — dedicated case managers, a real quoting desk, and
              carrier relationships that open doors others can&rsquo;t.
            </p>

            <div className="mt-10 space-y-0">
              {[
                {
                  num: '01',
                  title: 'Direct Carrier Access',
                  text: 'We hold Tier 1 relationships with 40+ carriers — better comp schedules, faster contracting, and escalation access when a case needs it.',
                },
                {
                  num: '02',
                  title: 'A Real Back Office',
                  text: 'Dedicated case managers, a live quoting desk, and suitability review — all included. You sell. We handle the paperwork that kills momentum.',
                },
                {
                  num: '03',
                  title: 'No Captive Strings',
                  text: 'Contract across as many or as few carriers as you need. Your book of business is yours — always. No proprietary products, no strings attached.',
                },
                {
                  num: '04',
                  title: 'Marketing That Drives Production',
                  text: 'From AI-powered lead generation to pre-set client appointments — our marketing arm actively puts you in front of ready-to-buy prospects.',
                },
              ].map((item, i) => (
                <div
                  key={item.num}
                  className={`flex gap-5 py-6 border-b border-charcoal/[0.06] reveal reveal-d${i + 1}`}
                >
                  <div className="font-serif text-[28px] font-semibold text-gold/30 leading-none shrink-0 w-[40px]">
                    {item.num}
                  </div>
                  <div>
                    <div className="text-[15px] font-medium text-charcoal mb-1">
                      {item.title}
                    </div>
                    <div className="text-[14px] font-light leading-[1.8] text-[#5a5448]">
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Stack */}
          <div className="space-y-4 reveal reveal-d2">
            {[
              { end: 40, suffix: '+', label: 'Carrier contracts available at contracting' },
              { end: 100, suffix: '%', label: 'Independent — no proprietary products pushed' },
              { end: 15, suffix: ' min', label: 'Average response time from our support team' },
            ].map((m) => (
              <div
                key={m.label}
                className="bg-charcoal rounded-[6px] p-7 border border-[rgba(184,146,42,0.08)] group hover:border-[rgba(184,146,42,0.2)] transition-colors duration-300"
              >
                <div className="font-serif text-[36px] font-semibold text-gold-light leading-none mb-2 group-hover:text-gold transition-colors duration-300">
                  <AnimatedCounter end={m.end} suffix={m.suffix} />
                </div>
                <div className="text-[13px] font-light text-white/40">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI & EFFICIENCY ── */}
      <section className="on-dark px-[5vw] lg:px-[8vw] py-20 lg:py-28 relative overflow-hidden" id="ai">
        <GradientOrbs />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="section-label reveal">AI-Powered Growth</div>
            <h2 className="section-headline reveal reveal-d1">
              Work smarter, not harder.<br />
              <em>We&rsquo;ll show you how.</em>
            </h2>
            <p className="text-[16px] font-light leading-[1.85] text-white/55 mb-8 reveal reveal-d2">
              Let&rsquo;s be real — the annuity space is changing fast. Agents who
              figure out how to use AI and automation aren&rsquo;t just keeping up,
              they&rsquo;re pulling ahead. And you don&rsquo;t need to figure it out
              alone.
            </p>
            <p className="text-[16px] font-light leading-[1.85] text-white/55 mb-8 reveal reveal-d2">
              When you contract with Beacon, we sit down with you one-on-one and
              build a plan around <em className="text-white/70">your</em> practice. Not a
              generic playbook — an actual strategy for how AI tools can save you
              time, find better prospects, and help you close more business without
              burning out.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10 reveal reveal-d3">
              {[
                { icon: '01', label: 'AI Lead Scoring', desc: 'Know who\'s ready to buy before you pick up the phone' },
                { icon: '02', label: 'Smart Follow-Up', desc: 'Automated sequences that feel personal, not robotic' },
                { icon: '03', label: 'Content on Autopilot', desc: 'Social posts, emails, and materials generated in your voice' },
                { icon: '04', label: 'Production Analytics', desc: 'See what\'s working and double down on it' },
              ].map((item) => (
                <div
                  key={item.icon}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-[6px] p-5 hover:border-gold/20 hover:bg-white/[0.05] transition-all duration-300 group"
                >
                  <div className="font-serif text-[20px] font-semibold text-gold/30 mb-2 group-hover:text-gold/50 transition-colors">
                    {item.icon}
                  </div>
                  <div className="text-[14px] font-medium text-white/80 mb-1">{item.label}</div>
                  <div className="text-[12px] font-light text-white/35 leading-[1.6]">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-d2">
            <div className="bg-charcoal-mid border border-[rgba(184,146,42,0.12)] rounded-[6px] p-8 lg:p-10 mb-8">
              <div className="text-[10px] font-medium tracking-[0.15em] uppercase text-gold-light mb-6">
                How the consultation works
              </div>
              <div className="space-y-6">
                {[
                  { step: 'We talk', desc: "A casual 30-minute call. We learn how you run your practice, where you're spending time, and what's not working." },
                  { step: 'We build your plan', desc: 'Our team puts together a custom AI implementation strategy — specific tools, workflows, and timelines tailored to you.' },
                  { step: 'We help you launch', desc: "We don't just hand you a PDF and wish you luck. We walk you through setup, test everything, and make sure it's actually working." },
                  { step: 'We keep optimizing', desc: "Monthly check-ins to review what's performing, adjust what isn't, and keep you ahead of the curve." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-[32px] h-[32px] rounded-full bg-gold/[0.1] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[12px] font-semibold text-gold">{i + 1}</span>
                    </div>
                    <div>
                      <div className="text-[14px] font-medium text-white/80 mb-1">{s.step}</div>
                      <div className="text-[13px] font-light text-white/40 leading-[1.7]">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-charcoal-mid border border-[rgba(184,146,42,0.12)] rounded-[6px] p-8 lg:p-10">
              <div className="text-[10px] font-medium tracking-[0.15em] uppercase text-gold-light mb-4">
                Common questions
              </div>
              <Accordion items={aiFaqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-[5vw] lg:px-[8vw] py-20 lg:py-28 bg-cream" id="process">
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <div className="section-label reveal">How It Works</div>
          <h2 className="section-headline reveal reveal-d1">
            From contract to close
            <br />
            in <em>three steps.</em>
          </h2>
          <p className="section-sub mx-auto reveal reveal-d2">
            We&rsquo;ve eliminated every step that slows agents down. Contracting
            is free, onboarding is fast, and support starts the day you sign.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              num: '01',
              title: 'Get Contracted',
              text: 'Submit your information in under 10 minutes. Our contracting team reviews every request and activates your carrier appointments typically within one business day — no fees, no delays.',
              icon: (
                <svg viewBox="0 0 38 38" fill="none" className="w-[38px] h-[38px]">
                  <rect x="4" y="6" width="30" height="26" rx="3" stroke="#b8922a" strokeWidth="1.2" opacity="0.7" />
                  <line x1="10" y1="14" x2="28" y2="14" stroke="#b8922a" strokeWidth="1" opacity="0.5" />
                  <line x1="10" y1="20" x2="22" y2="20" stroke="#b8922a" strokeWidth="1" opacity="0.5" />
                  <circle cx="28" cy="28" r="6" fill="rgba(184,146,42,0.15)" stroke="#b8922a" strokeWidth="1.2" />
                  <path d="M25.5 28 L27.2 29.7 L30.5 26.5" stroke="#b8922a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
            {
              num: '02',
              title: 'Access Our Platform',
              text: 'Log in to live carrier rates, the annuity quoting desk, income illustrators, and your dedicated case manager. Every tool you need to quote, compare, and close — in one place.',
              icon: (
                <svg viewBox="0 0 38 38" fill="none" className="w-[38px] h-[38px]">
                  <circle cx="19" cy="19" r="14" stroke="#b8922a" strokeWidth="1.2" opacity="0.6" />
                  <path d="M12 19 L17 24 L26 14" stroke="#b8922a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
            {
              num: '03',
              title: 'Grow Your Practice',
              text: 'With case support handling the back office, tap into our marketing services — AI leads, pre-set appointments, and compliance-ready materials — to scale production without scaling overhead.',
              icon: (
                <svg viewBox="0 0 38 38" fill="none" className="w-[38px] h-[38px]">
                  <path d="M6 30 L6 14 L14 8 L22 14 L22 30" stroke="#b8922a" strokeWidth="1.2" strokeLinejoin="round" opacity="0.7" />
                  <rect x="16" y="20" width="16" height="10" rx="2" stroke="#b8922a" strokeWidth="1.2" opacity="0.8" />
                  <circle cx="24" cy="17" r="4.5" stroke="#b8922a" strokeWidth="1.2" opacity="0.6" />
                  <line x1="19" y1="25" x2="29" y2="25" stroke="#b8922a" strokeWidth="0.8" opacity="0.4" />
                </svg>
              ),
            },
          ].map((step, i) => (
            <div
              key={step.num}
              className={`relative bg-white border border-charcoal/[0.06] rounded-[6px] p-8 lg:p-10 group hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:translate-y-[-3px] transition-all duration-300 reveal reveal-d${i + 1}`}
            >
              <span className="block font-serif text-[42px] font-semibold text-gold/10 leading-none mb-4">
                {step.num}
              </span>
              <div className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                {step.icon}
              </div>
              <div className="font-serif text-[20px] font-semibold text-charcoal mb-3">
                {step.title}
              </div>
              <p className="text-[14px] font-light leading-[1.8] text-[#5a5448]">
                {step.text}
              </p>
              {i < 2 && (
                <div className="hidden md:block absolute right-[-20px] top-1/2 -translate-y-1/2 text-gold/20 text-[24px] z-10">
                  &rarr;
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── AGENT RESOURCES ── */}
      <section className="px-[5vw] lg:px-[8vw] py-20 lg:py-28" id="resources">
        <div className="section-label reveal">Agent Resources</div>
        <h2 className="section-headline reveal reveal-d1">
          Everything you need to
          <br />
          <em>close</em> with confidence.
        </h2>

        <div className="max-w-[720px] mt-8">
          <p className="section-sub mb-9 reveal">
            Tools, training, and support built the way agents actually work —
            fast, specific, and focused on the case in front of you.
          </p>

          <div className="space-y-0 reveal reveal-d1">
            {resources.map((r) => {
              const isExternal = r.href.startsWith('http')
              const inner = (
                <>
                  <div className="flex items-center gap-3">
                    <span className="inline-block text-[10px] font-medium tracking-[0.1em] uppercase text-gold bg-gold/[0.08] rounded-[3px] px-2 py-[3px]">
                      {r.tag}
                    </span>
                    <span className="text-[14px] font-normal text-charcoal group-hover:text-gold transition-colors duration-200">
                      {r.title}
                    </span>
                  </div>
                  <span className="text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200">
                    &rarr;
                  </span>
                </>
              )
              const cls = "flex items-center justify-between py-4 border-b border-charcoal/[0.06] group no-underline hover:pl-2 transition-all duration-200"
              return isExternal ? (
                <a key={r.title} href={r.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {inner}
                </a>
              ) : (
                <Link key={r.title} href={r.href} className={cls}>
                  {inner}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="on-dark px-[5vw] lg:px-[8vw] py-20 lg:py-28" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="section-label reveal">Get Started</div>
            <h2 className="section-headline reveal reveal-d1">
              Ready to work with an FMO
              <br />
              that <em>actually shows up?</em>
            </h2>
            <p className="section-sub reveal reveal-d2">
              Contracting takes less than 10 minutes. Our team reviews every
              submission and follows up within one business day — usually the same
              afternoon.
            </p>

            <div className="mt-10 space-y-6 reveal reveal-d3">
              <div className="flex items-start gap-4">
                <div className="w-[36px] h-[36px] rounded-full bg-gold/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <path d="M2 4L8 9L14 4M2 3H14a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="#b8922a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-white/35">Email</div>
                  <div className="text-[15px] font-light text-white/70">info@beaconfmo.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[36px] h-[36px] rounded-full bg-gold/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <path d="M1.5 2.5a1 1 0 011-1h2.22l.8 3.2a1 1 0 01-.276.993L4.1 6.836A10.03 10.03 0 008.667 11.4l1.14-1.14a1 1 0 01.993-.277l3.2.8a1 1 0 01.75.97V13.5a1 1 0 01-1 1C5.67 14.5 1.5 10.33 1.5 5.5v-3z" stroke="#b8922a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-white/35">Phone</div>
                  <div className="text-[15px] font-light text-white/70">(770) 527-6144</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[36px] h-[36px] rounded-full bg-gold/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="7" r="2.5" stroke="#b8922a" strokeWidth="1.3" />
                    <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="#b8922a" strokeWidth="1.3" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-white/35">Headquarters</div>
                  <div className="text-[15px] font-light text-white/70">Atlanta, GA &middot; Licensed Nationally</div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}

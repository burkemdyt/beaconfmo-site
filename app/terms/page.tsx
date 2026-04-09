import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-serif text-4xl font-semibold text-[var(--charcoal)] mb-2">Terms of Service</h1>
      <p className="text-sm text-[var(--text-muted)] mb-10"><em>Last updated: April 2026</em></p>

      <div className="space-y-8 text-[15px] leading-relaxed text-[var(--text-secondary)]">
        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">About BeaconFMO</h2>
          <p>BeaconFMO is an independent annuity distribution organization that partners with licensed insurance agents and agencies. We provide carrier access, back-office support, marketing tools, and workflow management through our advisor portal.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Use of Website</h2>
          <p>This website is for informational purposes about our services. The information provided does not constitute financial, investment, or insurance advice. All insurance products are offered through licensed agents and carriers.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Advisor Portal</h2>
          <p>Access to the BeaconFMO Portal is available to approved, licensed insurance professionals. By using the portal, you agree to maintain the confidentiality of your account, use the tools for legitimate business purposes, and comply with all applicable insurance regulations and data protection laws.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Intellectual Property</h2>
          <p>All content, branding, and tools on this website and portal are the property of BeaconFMO unless otherwise noted. Marketing materials you create using our tools are yours to use for your business purposes.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Limitation of Liability</h2>
          <p>BeaconFMO shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or our services. All services are provided &ldquo;as is&rdquo; without warranties of any kind.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Contact</h2>
          <p>Questions about these terms? Contact us at info@beaconfmo.com.</p>
        </section>
      </div>
    </main>
  )
}

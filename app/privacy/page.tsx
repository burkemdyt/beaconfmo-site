import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-serif text-4xl font-semibold text-[var(--charcoal)] mb-2">Privacy Policy</h1>
      <p className="text-sm text-[var(--text-muted)] mb-10"><em>Last updated: April 2026</em></p>

      <div className="space-y-8 text-[15px] leading-relaxed text-[var(--text-secondary)]">
        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Information We Collect</h2>
          <p>When you interact with BeaconFMO, we may collect information you voluntarily provide, including your name, email address, phone number, agency details, and other professional information. We also collect standard usage data such as pages visited, time on site, and device information.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Phone Number & SMS</h2>
          <p>If you use our advisor portal, we use your phone number solely to send one-time verification codes (OTP) for login authentication. We do not send marketing, promotional, or recurring messages via SMS. Your phone number is stored securely and is never shared with third parties for marketing purposes. Message and data rates may apply.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">How We Use Your Information</h2>
          <p>We use collected information to respond to inquiries, provide our services, facilitate portal access and authentication, and improve our website and platform. We will never sell your personal information to third parties.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Cookies & Analytics</h2>
          <p>We use cookies and analytics tools to understand how visitors use our site and to improve the experience. You can disable cookies in your browser settings.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Third-Party Services</h2>
          <p>We use third-party services for hosting (Vercel), analytics, and platform infrastructure. Each of these services has their own privacy policies governing how they handle data.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Your Rights</h2>
          <p>You have the right to request access to, correction of, or deletion of your personal data. Contact us at info@beaconfmo.com to exercise these rights.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Contact</h2>
          <p>If you have questions about this privacy policy, contact us at info@beaconfmo.com.</p>
        </section>
      </div>
    </main>
  )
}

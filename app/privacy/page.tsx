import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy & Refund Policy',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-serif text-4xl font-semibold text-[var(--charcoal)] mb-2">Privacy Policy</h1>
      <p className="text-sm text-[var(--text-muted)] mb-10"><em>Last updated: April 2026</em></p>

      <div className="space-y-8 text-[15px] leading-relaxed text-[var(--text-secondary)]">
        <section>
          <p>BeaconFMO (&quot;Beacon,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of our users, clients, and website visitors. This Privacy Policy explains how we collect, use, store, and protect your information when you visit www.beaconfmo.com, use the Beacon Portal at portal.beaconfmo.com, or engage with any of our services.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Information We Collect</h2>
          <p className="mb-3">We collect information you voluntarily provide when you:</p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Submit a contact form or inquiry on our website</li>
            <li>Create an account on the Beacon Portal</li>
            <li>Contract with BeaconFMO as a producer or advisor</li>
            <li>Subscribe to any of our paid services</li>
            <li>Communicate with us via email, phone, or other channels</li>
          </ul>
          <p className="mt-3">This may include your name, email address, phone number, business name, professional license information, and other details relevant to the services you are using.</p>
          <p className="mt-3">We also automatically collect standard technical data such as IP address, browser type, device information, pages visited, and time spent on site. This data is used solely for analytics and improving user experience.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">How We Use Your Information</h2>
          <p className="mb-3">We use collected information to:</p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Respond to your inquiries and provide requested services</li>
            <li>Facilitate account creation, authentication, and portal access</li>
            <li>Process contracting and carrier appointments</li>
            <li>Deliver content, tools, and resources through the Beacon Portal</li>
            <li>Communicate service updates, changes, or important account information</li>
            <li>Improve our website, platform, and service offerings</li>
            <li>Comply with legal and regulatory obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">We Do Not Sell Your Data</h2>
          <p>BeaconFMO will never sell, rent, lease, or trade your personal information to third parties for marketing or any other purpose. Your data belongs to you. We do not share your personal information with outside parties except as necessary to provide our services (e.g., carrier appointment processing) or as required by law.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Phone Number & SMS</h2>
          <p>If you use the Beacon Portal, your phone number may be used solely for one-time verification codes (OTP) for login authentication. We do not send marketing, promotional, or recurring messages via SMS. Your phone number is stored securely and is never shared with third parties for marketing purposes. Standard message and data rates may apply.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Data Storage & Security</h2>
          <p>Your information is stored on secure, industry-standard infrastructure. We use encryption in transit (TLS/SSL) and at rest to protect your data. Access to personal information is restricted to authorized personnel who need it to perform their job functions. While no system is 100% secure, we take commercially reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Cookies & Analytics</h2>
          <p>We use cookies and analytics tools to understand how visitors interact with our site and to improve the user experience. Cookies are small text files stored on your device. You can control or disable cookies through your browser settings, though some site functionality may be affected.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Third-Party Services</h2>
          <p>We use third-party services for hosting, analytics, authentication, payment processing, and platform infrastructure. These providers have their own privacy policies governing how they handle data. We only share the minimum information necessary for these services to function. We do not authorize any third-party service provider to use your personal information for their own marketing purposes.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Data Retention</h2>
          <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, maintain our business relationship, or comply with legal and regulatory requirements. When data is no longer needed, it is securely deleted or anonymized.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Your Rights</h2>
          <p className="mb-3">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Request deletion of your personal data, subject to legal and contractual obligations</li>
            <li>Opt out of non-essential communications</li>
          </ul>
          <p className="mt-3">To exercise any of these rights, contact us at info@beaconfmo.com. We will respond to your request within 30 days.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Children&apos;s Privacy</h2>
          <p>Our services are intended for licensed insurance professionals and business clients. We do not knowingly collect personal information from individuals under the age of 18. If we become aware that we have collected data from a minor, we will promptly delete it.</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. Any updates will be posted on this page with a revised &quot;Last updated&quot; date. Your continued use of our website or services after any changes constitutes your acceptance of the updated policy.</p>
        </section>

        {/* Refund Policy */}
        <div className="border-t border-[var(--gold-pale)] pt-10 mt-10">
          <h1 className="font-serif text-3xl font-semibold text-[var(--charcoal)] mb-2">Refund & Return Policy</h1>
          <p className="text-sm text-[var(--text-muted)] mb-6"><em>Last updated: April 2026</em></p>

          <div className="space-y-6">
            <section>
              <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">All Sales Are Final</h2>
              <p>All fees paid to BeaconFMO for services, subscriptions, platform access, content production, or any other products or offerings are non-refundable. By purchasing or subscribing to any BeaconFMO service, you acknowledge and agree that all sales are final and no refunds, returns, credits, or chargebacks will be issued under any circumstances.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Subscription Services</h2>
              <p>If you subscribe to a recurring service (including but not limited to content production, portal access, or marketing services), you may cancel your subscription at any time. Upon cancellation, your service will remain active through the end of the current billing period. No partial refunds will be issued for unused time within a billing cycle. Cancellation does not entitle you to a refund of any previously paid fees.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Service Delivery</h2>
              <p>BeaconFMO delivers digital services and content production. Due to the nature of digital goods and services, once work has begun or access has been granted, the transaction is considered complete and non-reversible. We are committed to delivering the services described in your agreement, and any service-related concerns should be directed to info@beaconfmo.com so we can work toward a resolution.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Disputes</h2>
              <p>If you have a concern about charges or services received, contact us at info@beaconfmo.com before initiating any dispute with your payment provider. We are committed to working with you directly to address any issues. Filing a chargeback or payment dispute without first contacting BeaconFMO may result in suspension of your account and all associated services.</p>
            </section>
          </div>
        </div>

        <section className="border-t border-[var(--gold-pale)] pt-8 mt-8">
          <h2 className="font-serif text-xl font-semibold text-[var(--charcoal)] mb-2">Contact</h2>
          <p>If you have questions about this Privacy Policy, our Refund Policy, or your data, contact us at:</p>
          <p className="mt-3 font-medium text-[var(--charcoal)]">BeaconFMO<br />info@beaconfmo.com<br />www.beaconfmo.com</p>
        </section>
      </div>
    </main>
  )
}

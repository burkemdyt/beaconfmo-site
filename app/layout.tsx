import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { Navbar } from './_components/navbar'
import { Footer } from './_components/footer'
import { ScrollReveal } from './_components/scroll-reveal'
import { ScrollProgress } from './_components/scroll-progress'

const dmSans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  // Canonical base — www is the live host; apex 308-redirects here.
  metadataBase: new URL('https://www.beaconfmo.com'),
  title: {
    default: 'BeaconFMO — Independent Annuity Distribution',
    template: '%s | BeaconFMO',
  },
  description:
    'Beacon partners with independent agents to deliver annuity contracts, carrier access, and back-office support you need to grow a practice worth keeping.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.beaconfmo.com',
    siteName: 'BeaconFMO',
    title: 'BeaconFMO — Independent Annuity Distribution',
    description:
      'Beacon partners with independent agents to deliver annuity contracts, carrier access, and back-office support you need to grow a practice worth keeping.',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'BeaconFMO',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'BeaconFMO — Independent Annuity Distribution',
    description:
      'Beacon partners with independent agents to deliver annuity contracts, carrier access, and back-office support you need to grow a practice worth keeping.',
    images: ['/logo.png'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.beaconfmo.com/#organization',
  name: 'BeaconFMO',
  legalName: 'Beacon FMO',
  alternateName: ['Beacon FMO', 'Beacon IMO'],
  url: 'https://www.beaconfmo.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.beaconfmo.com/logo.png',
    width: 512,
    height: 512,
  },
  image: 'https://www.beaconfmo.com/logo.png',
  description:
    'Independent annuity FMO/IMO for licensed agents and financial advisors. 40+ A-rated carriers, AI-powered marketing tools, full back-office support, vested overrides, and no production minimums.',
  knowsAbout: [
    'Annuity distribution',
    'Fixed indexed annuities',
    'Multi-year guaranteed annuities',
    'SPIA',
    'Income riders',
    'Field marketing organization',
    'Independent marketing organization',
    'Annuity contracts',
    'Insurance agent recruiting',
    'AI tools for insurance agents',
    'Annuity marketing',
    'Suitability compliance',
  ],
  sameAs: [
    // TODO: replace with real social profile URLs once created
    // 'https://www.linkedin.com/company/beaconfmo',
    // 'https://x.com/beaconfmo',
    // 'https://www.facebook.com/beaconfmo',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <ScrollProgress />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  )
}

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
  title: {
    default: 'BeaconFMO — Independent Annuity Distribution',
    template: '%s | BeaconFMO',
  },
  description:
    'Beacon partners with independent agents to deliver annuity contracts, carrier access, and back-office support you need to grow a practice worth keeping.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="min-h-screen antialiased">
        <Navbar />
        <ScrollProgress />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { cormorant, dmSans } from '@/lib/fonts'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Eis Freude GmbH – Premium Speiseeis für die Gastronomie',
    template: '%s | Eis Freude GmbH',
  },
  description:
    'Eis Freude GmbH produziert und vertreibt hochwertiges Speiseeis in der professionellen Eiskanne für Eiscafés und die Gastronomie. Entdecken Sie unsere Marke Favorelli – Gelato Italiano.',
  keywords: ['Speiseeis Gastronomie', 'Eiskanne', 'Gelato Lieferant', 'Favorelli', 'Eis Hersteller', 'B2B Speiseeis'],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Eis Freude GmbH',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-midnight text-cream font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}

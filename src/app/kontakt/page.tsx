import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { ContactForm } from '@/components/kontakt/ContactForm'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Stellen Sie eine Anfrage bei Eis Freude GmbH. Wir beraten Sie gern zu unserem Sortiment und Belieferungskonditionen für Ihre Gastronomie.',
}

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Adresse',
    lines: ['Eis Freude GmbH', 'Strichweg 136', '27476 Cuxhaven'],
  },
  {
    icon: Phone,
    label: 'Telefon',
    lines: ['04721 5409057'],
    href: 'tel:+4947215409057',
  },
  {
    icon: Mail,
    label: 'E-Mail',
    lines: ['info@eisfreude.de'],
    href: 'mailto:info@eisfreude.de',
  },
  {
    icon: Clock,
    label: 'Bürozeiten',
    lines: ['Mo–Fr: 8:00 – 17:00 Uhr'],
  },
]

export default function KontaktPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="relative bg-midnight-deep pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_0%,rgba(27,56,120,0.25),transparent)]" />
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Gastronomie-Partnerschaft</SectionLabel>
          <h1 className="font-serif font-light text-5xl md:text-7xl text-cream mb-4 text-balance">
            Kontakt <em className="italic text-gold">aufnehmen</em>
          </h1>
          <p className="font-sans text-cream/55 text-base max-w-lg leading-relaxed">
            Sie möchten unser Sortiment kennenlernen oder haben Fragen zu Kannengrößen
            und Lieferkonditionen? Wir freuen uns auf Ihre Anfrage.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-midnight py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form (3/5) */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="font-serif text-2xl text-cream mb-2">Anfrage stellen</h2>
                <p className="font-sans text-sm text-cream/50">
                  Pflichtfelder sind mit <span className="text-gold">*</span> markiert.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Info (2/5) */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="font-serif text-2xl text-cream mb-2">Direktkontakt</h2>
                <p className="font-sans text-sm text-cream/50">
                  Wir antworten innerhalb von 1–2 Werktagen.
                </p>
              </div>

              <div className="space-y-6 mb-10">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={16} strokeWidth={1.5} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-sans text-xs text-gold/60 tracking-[0.2em] uppercase mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-sans text-sm text-cream/70 hover:text-gold transition-colors leading-relaxed"
                        >
                          {item.lines[0]}
                        </a>
                      ) : (
                        item.lines.map((line, i) => (
                          <p key={i} className="font-sans text-sm text-cream/70 leading-snug">
                            {line}
                          </p>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <GoldDivider className="mb-8" />

              {/* Favorelli note */}
              <div className="bg-midnight-light border border-gold/15 p-6">
                <p className="font-sans text-xs text-gold/60 tracking-[0.2em] uppercase mb-3">
                  Favorelli – Gelato Italiano
                </p>
                <p className="font-sans text-sm text-cream/60 leading-relaxed">
                  Fragen zur Favorelli-Linie? Geben Sie in Ihrer Anfrage einfach an, dass
                  Sie sich für unsere Gelato-Spezialitäten interessieren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

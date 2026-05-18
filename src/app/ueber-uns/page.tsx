import type { Metadata } from 'next'
import { ValuesGrid } from '@/components/ueber-uns/ValuesGrid'
import { QualitySection } from '@/components/ueber-uns/QualitySection'
import { CtaBanner } from '@/components/home/CtaBanner'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { fadeInLeft, fadeInRight } from '@/lib/animations'

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Erfahren Sie mehr über Eis Freude GmbH — unser Unternehmen, unsere Werte und unser Versprechen an Gastronomie-Partner.',
}

const STATS = [
  { value: '33', label: 'Eissorten' },
  { value: '100%', label: 'Natürlich' },
  { value: '5.600 ml', label: 'Kannengröße' },
]

export default function UeberUnsPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="relative bg-midnight-deep pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_0%,rgba(27,56,120,0.3),transparent)]" />
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Unser Unternehmen</SectionLabel>
          <h1 className="font-serif font-light text-5xl md:text-7xl text-cream mb-6 max-w-3xl text-balance">
            Über <em className="italic text-gold">Eis Freude</em>
          </h1>
          <p className="font-sans text-cream/55 text-base max-w-xl leading-relaxed">
            Wir sind ein spezialisierter Hersteller und Lieferant von Premium-Speiseeis
            in der professionellen 5.600-ml-Kanne — für Eiscafés, Restaurants und Hotels, die ihren Gästen
            Außergewöhnliches bieten wollen.
          </p>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-midnight-light py-12 border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-3xl md:text-4xl gold-shimmer mb-1">{s.value}</p>
                <p className="font-sans text-xs text-cream/40 tracking-[0.2em] uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="bg-midnight py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {/* Row 1: Text left, visual right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal variants={fadeInLeft}>
              <div>
                <SectionLabel>Unsere Geschichte</SectionLabel>
                <h2 className="font-serif font-light text-3xl md:text-4xl text-cream mb-6 text-balance">
                  Gegründet aus <em className="italic text-gold">Leidenschaft</em> für das Eis
                </h2>
                <p className="font-sans text-cream/60 text-sm leading-relaxed mb-4">
                  Eis Freude GmbH entstand aus der Überzeugung, dass exzellentes Speiseeis
                  nicht dem Zufall überlassen werden darf. Als Hersteller und Lieferant
                  für die Gastronomie setzen wir auf handwerkliche Qualität, die industriell
                  zuverlässig reproduziert werden kann.
                </p>
                <p className="font-sans text-cream/60 text-sm leading-relaxed">
                  Mit unserem Sortiment von über 30 Eissorten — darunter die exklusive
                  Favorelli-Linie mit authentischen Gelato-Kreationen nach italienischen
                  Vorbildern — decken wir die Bedürfnisse moderner Gastronomie-Betriebe ab.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variants={fadeInRight}>
              <div className="relative">
                <div className="absolute inset-0 border border-gold/10 translate-x-3 translate-y-3" />
                <div className="relative bg-midnight-light border border-gold/15 aspect-[4/3] flex items-center justify-center p-12">
                  <div className="text-center">
                    <p className="font-serif text-7xl text-gold/20 mb-4 italic">EF</p>
                    <p className="font-sans text-xs text-cream/30 tracking-[0.3em] uppercase">
                      Eis Freude GmbH
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <GoldDivider />

          {/* Row 2: Visual left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal variants={fadeInLeft}>
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 border border-gold/10 -translate-x-3 translate-y-3" />
                <div className="relative bg-midnight-light border border-gold/15 aspect-[4/3] flex items-center justify-center p-12">
                  <div className="text-center space-y-3">
                    <p className="font-serif italic text-2xl text-gold/60">Favorelli</p>
                    <p className="font-sans text-xs text-cream/30 tracking-[0.25em] uppercase">Gelato Italiano</p>
                    <div className="w-12 h-px bg-gold/30 mx-auto" />
                    <p className="font-sans text-xs text-cream/25 tracking-[0.2em] uppercase">Pistacchio · Nocciola</p>
                    <p className="font-sans text-xs text-cream/25 tracking-[0.2em] uppercase">Tiramisù · Limone</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variants={fadeInRight} className="order-1 lg:order-2">
              <div>
                <SectionLabel>Unsere Marke</SectionLabel>
                <h2 className="font-serif font-light text-3xl md:text-4xl text-cream mb-6 text-balance">
                  Favorelli — <em className="italic text-gold">das Beste Italiens</em>
                </h2>
                <p className="font-sans text-cream/60 text-sm leading-relaxed mb-4">
                  Mit Favorelli haben wir eine eigene Gelato-Linie entwickelt, die den
                  authentischen Charakter italienischer Gelaterie in Ihre Gastronomie
                  bringt. Jede Sorte folgt einem Original-Rezept aus der jeweiligen Region.
                </p>
                <p className="font-sans text-cream/60 text-sm leading-relaxed">
                  Ob die Pistazie aus Bronte, die Haselnuss aus dem Piemont oder das
                  klassische Tiramisù — Favorelli steht für Kompromisslosigkeit in Geschmack
                  und Herkunft.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ValuesGrid />
      <QualitySection />
      <CtaBanner />
    </>
  )
}

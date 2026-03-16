'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const STEPS = [
  {
    number: '01',
    title: 'Sorgfältige Rohstoffauswahl',
    text: 'Wir beziehen unsere Zutaten von geprüften Lieferanten. Frische Milch, natürliche Früchte, echte Vanilleschoten — keine Kompromisse.',
  },
  {
    number: '02',
    title: 'Handwerkliche Produktion',
    text: 'In unserem Betrieb werden alle Eiskreationen nach bewährten Rezepturen hergestellt. Tradition trifft auf moderne Produktionstechnik.',
  },
  {
    number: '03',
    title: 'Strenge Qualitätskontrolle',
    text: 'Jede Charge durchläuft unsere interne Qualitätsprüfung. Konsistenz, Geschmack und Textur werden vor der Freigabe kontrolliert.',
  },
  {
    number: '04',
    title: 'Zuverlässige Lieferung',
    text: 'Durchgehend gekühlt und pünktlich bei Ihnen. Unser Logistiksystem ist auf die Anforderungen der Gastronomie ausgerichtet.',
  },
]

function Step({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-8"
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Line + Number */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-12 h-12 border border-gold/30 flex items-center justify-center bg-midnight-deep">
          <span className="font-serif text-gold text-sm">{step.number}</span>
        </div>
        {index < STEPS.length - 1 && (
          <motion.div
            className="w-px flex-1 bg-gold/15 my-2"
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-12">
        <h3 className="font-serif text-xl text-cream mb-3">{step.title}</h3>
        <p className="font-sans text-sm text-cream/55 leading-relaxed max-w-md">{step.text}</p>
      </div>
    </motion.div>
  )
}

export function QualitySection() {
  return (
    <section className="bg-midnight-light py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_50%,rgba(27,56,120,0.12),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <div>
              <SectionLabel>Unser Prozess</SectionLabel>
              <h2 className="font-serif font-light text-4xl md:text-5xl text-cream mb-6 text-balance">
                Qualität ist kein<br />
                <em className="italic text-gold">Zufall</em>
              </h2>
              <p className="font-sans text-cream/55 text-base leading-relaxed">
                Von der Auswahl der Rohstoffe bis zur Lieferung an Ihren Betrieb — jeder
                Schritt folgt unserem Qualitätsversprechen. So können wir Ihnen garantieren,
                dass jede Lieferung Ihren Erwartungen entspricht.
              </p>
            </div>
          </ScrollReveal>

          <div>
            {STEPS.map((step, i) => (
              <Step key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

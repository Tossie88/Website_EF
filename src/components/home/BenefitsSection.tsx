'use client'

import { Package, Star, Truck } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { motion } from 'framer-motion'

const BENEFITS = [
  {
    icon: Package,
    title: 'Professionelles Gebinde',
    text: 'Über 30 Eissorten in der 5.600-ml-Schale — kalkulierbar im Einkauf, flexibel im Einsatz. Für Eiscafés, Restaurants und Hotels.',
  },
  {
    icon: Star,
    title: 'Konsequente Qualität',
    text: 'Natürliche Zutaten, keine künstlichen Aromen. Jede Charge geprüft — damit Ihre Gäste bei jedem Besuch dasselbe exzellente Erlebnis haben.',
  },
  {
    icon: Truck,
    title: 'Zuverlässige Lieferung',
    text: 'Pünktlich, kühl und in einwandfreiem Zustand. Unser Lieferservice ist auf die Anforderungen der Gastronomie ausgerichtet.',
  },
]

export function BenefitsSection() {
  return (
    <section className="relative bg-midnight-light py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(27,56,120,0.15),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel className="text-center">Warum Eis Freude</SectionLabel>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-center text-cream mb-4 text-balance">
            Ihr zuverlässiger <em className="text-gold not-italic italic">Eispartner</em>
          </h2>
          <p className="text-cream/55 font-sans text-center max-w-xl mx-auto text-base leading-relaxed mb-16">
            Wir wissen, was Gastronomen brauchen: Konstanz, Qualität und Verlässlichkeit — spührbar bei jeder Kugel.
          </p>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          {BENEFITS.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={fadeInUp}
              className="group relative bg-midnight/60 border border-gold/10 p-8 hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-px h-6 bg-gold/60 mb-6 transition-all duration-500 group-hover:h-8" />
              <benefit.icon
                size={28}
                className="text-gold mb-5 transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-xl text-cream mb-3">{benefit.title}</h3>
              <p className="font-sans text-sm text-cream/55 leading-relaxed">{benefit.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <GoldDivider className="mt-20" />
      </div>
    </section>
  )
}

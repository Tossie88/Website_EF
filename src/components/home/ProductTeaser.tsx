'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { staggerContainer, scaleIn } from '@/lib/animations'

const CATEGORIES = [
  {
    id: 'milcheis',
    label: 'Speiseeis',
    count: '25 Sorten',
    description: 'Speiseeis aus bester Milch — von Vanille bis Cassata Siciliana. 25 Sorten für jedes Publikum.',
    color: 'from-blue-950/60 to-midnight',
    accent: 'border-blue-800/40',
  },
  {
    id: 'fruchteis',
    label: 'Fruchteis',
    count: '8 Sorten',
    description: 'Aus Vollfruchtpüree — von Erdbeere bis Küsten-Sanddorn. Erfrischend, natürlich, aromatisch.',
    color: 'from-amber-950/40 to-midnight',
    accent: 'border-amber-800/30',
  },
  {
    id: 'gelato',
    label: 'Gelato',
    count: '5+ Sorten',
    description: 'Authentisches Gelato Italiano der Favorelli-Linie — Premium für anspruchsvolle Gäste.',
    color: 'from-emerald-950/40 to-midnight',
    accent: 'border-emerald-800/30',
  },
  {
    id: 'sonderprodukte',
    label: 'Sonderprodukte',
    count: '3+ Spezialitäten',
    description: 'Champagner-Sorbet, Frozen Yogurt und saisonale Kreationen für besondere Anlässe.',
    color: 'from-purple-950/40 to-midnight',
    accent: 'border-purple-800/30',
  },
]

export function ProductTeaser() {
  return (
    <section className="bg-midnight py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <SectionLabel>Unser Sortiment</SectionLabel>
              <h2 className="font-serif font-light text-4xl md:text-5xl text-cream text-balance">
                Eissorten für <em className="italic text-gold">jeden Anspruch</em>
              </h2>
            </div>
            <Link
              href="/sortiment"
              className="group inline-flex items-center gap-2 text-gold font-sans text-sm tracking-[0.1em] uppercase whitespace-nowrap hover:gap-4 transition-all duration-300"
            >
              Alle ansehen <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          {CATEGORIES.map((cat) => (
            <motion.div key={cat.id} variants={scaleIn}>
              <Link
                href={`/sortiment#${cat.id}`}
                className={`group block relative bg-gradient-to-b ${cat.color} border ${cat.accent} hover:border-gold/30 p-8 aspect-[3/4] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]`}
              >
                {/* Top accent */}
                <div className="w-8 h-px bg-gold/50 mb-6 group-hover:w-16 transition-all duration-500" />

                <p className="font-sans text-xs text-gold/60 tracking-[0.2em] uppercase mb-2">
                  {cat.count}
                </p>
                <h3 className="font-serif text-2xl text-cream mb-4 group-hover:text-gold transition-colors duration-300">
                  {cat.label}
                </h3>
                <p className="font-sans text-xs text-cream/50 leading-relaxed">
                  {cat.description}
                </p>

                {/* Bottom arrow */}
                <div className="absolute bottom-8 left-8 flex items-center gap-2 text-gold/40 group-hover:text-gold transition-all duration-300">
                  <span className="font-sans text-xs tracking-[0.15em] uppercase">Entdecken</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

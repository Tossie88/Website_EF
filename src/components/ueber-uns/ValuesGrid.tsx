'use client'

import { Heart, Shield, Leaf } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { motion } from 'framer-motion'

const VALUES = [
  {
    icon: Shield,
    title: 'Qualität',
    text: 'Jede Charge wird nach strengen internen Qualitätsstandards geprüft. Wir setzen auf die besten Rohstoffe von ausgewählten Lieferanten.',
  },
  {
    icon: Heart,
    title: 'Leidenschaft',
    text: 'Eis ist unser Handwerk und unsere Leidenschaft. Diese Begeisterung steckt in jedem Behälter — und gibt Ihren Gästen das besondere Erlebnis, das sie wiederkommen lässt.',
  },
  {
    icon: Leaf,
    title: 'Verlässlichkeit',
    text: 'Als Ihr B2B-Partner wissen wir, wie wichtig Planbarkeit ist. Pünktliche Lieferung, konstante Qualität und persönlicher Service — auf uns können Sie sich verlassen.',
  },
]

export function ValuesGrid() {
  return (
    <section className="bg-midnight py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel className="text-center">Unsere Grundsätze</SectionLabel>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-center text-cream mb-16 text-balance">
            Was uns <em className="italic text-gold">antreibt</em>
          </h2>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          {VALUES.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeInUp}
              className="text-center px-6"
            >
              <div className="w-16 h-16 border border-gold/25 flex items-center justify-center mx-auto mb-6">
                <v.icon size={24} strokeWidth={1.5} className="text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-cream mb-4">{v.title}</h3>
              <p className="font-sans text-sm text-cream/55 leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const STATS = [
  { value: '33', label: 'Eissorten' },
  { value: '5+', label: 'Jahre Erfahrung' },
  { value: '100%', label: 'Natürliche Zutaten' },
]

function CounterStat({ value, label }: { value: string; label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="font-serif text-5xl md:text-6xl gold-shimmer mb-2">{value}</p>
      <p className="font-sans text-xs text-cream/50 tracking-[0.25em] uppercase">{label}</p>
    </motion.div>
  )
}

export function TrustSection() {
  return (
    <section className="bg-midnight-light py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(27,56,120,0.1),transparent)]" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Quote */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <Quote size={32} className="text-gold/30 mx-auto mb-8" strokeWidth={1} />
            <blockquote className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-cream font-light leading-relaxed max-w-3xl mx-auto mb-6 text-balance">
              &ldquo;Seit wir auf Eis Freude umgestellt haben, bekommen wir regelmäßig
              Komplimente für unser Eissortiment. Die Qualität ist einfach konstant
              hervorragend.&rdquo;
            </blockquote>
            <p className="font-sans text-sm text-gold/70 tracking-[0.1em]">
              Marco B. — Inhaber, Café del Sole
            </p>
          </div>
        </ScrollReveal>

        <GoldDivider className="mb-20" />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8">
          {STATS.map((stat) => (
            <CounterStat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

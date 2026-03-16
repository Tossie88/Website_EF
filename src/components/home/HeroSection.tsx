'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'

const PARTICLES = [
  { top: '20%', left: '8%', size: 4, delay: 0 },
  { top: '35%', left: '92%', size: 3, delay: 1.5 },
  { top: '65%', left: '5%', size: 5, delay: 0.8 },
  { top: '75%', left: '88%', size: 3, delay: 2.2 },
  { top: '15%', left: '75%', size: 2, delay: 0.4 },
  { top: '55%', left: '95%', size: 4, delay: 1.2 },
  { top: '85%', left: '15%', size: 2, delay: 3 },
]

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const words = ['Qualität,', 'die', 'Ihre', 'Gäste', 'begeistert.']

  return (
    <section
      ref={ref}
      className="relative min-h-dvh flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -inset-y-[10%]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-deep via-midnight to-brand/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(27,56,120,0.35),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_80%_80%,rgba(212,175,55,0.06),transparent)]" />
      </motion.div>

      {/* Grain */}
      <div className="absolute inset-0 grain" />

      {/* Gold particles */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gold/40"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 5 + i * 0.7,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center max-w-5xl mx-auto px-6 lg:px-8 pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <SectionLabel>Ihr Partner für Premium-Speiseeis</SectionLabel>
        </motion.div>

        {/* Animated headline */}
        <h1 className="font-serif font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className={`inline-block mr-[0.25em] ${
                i === 0 ? 'gold-shimmer' : 'text-cream'
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {i === 3 ? <em>{word}</em> : word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="text-cream/65 font-sans text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          Eis Freude GmbH produziert und vertreibt hochwertiges Speiseeis in der
          professionellen 5.600-ml-Kanne — für Eiscafés und die Gastronomie, mit der
          Präzision eines Herstellers und der Leidenschaft eines Eismachers.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        >
          <Button href="/sortiment" variant="primary">
            Sortiment entdecken
          </Button>
          <Button href="/kontakt" variant="ghost">
            Anfrage stellen
          </Button>
        </motion.div>

        {/* Gold accent line */}
        <motion.div
          className="w-24 h-px bg-gold/40 mx-auto mt-16"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

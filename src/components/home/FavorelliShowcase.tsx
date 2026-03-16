'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { fadeInLeft, fadeInRight } from '@/lib/animations'

export function FavorelliShowcase() {
  return (
    <section className="relative bg-midnight-deep py-24 md:py-0 md:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_100%_50%,rgba(27,56,120,0.2),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_0%_50%,rgba(212,175,55,0.04),transparent)]" />
      <div className="absolute inset-0 grain" />

      {/* Vertical gold line decoration */}
      <motion.div
        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/10"
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Side */}
          <ScrollReveal variants={fadeInLeft}>
            <div>
              <span className="block text-xs font-sans font-medium tracking-[0.3em] uppercase text-gold/60 mb-6">
                Eine Marke von Eis Freude GmbH
              </span>

              {/* Large italic Favorelli heading */}
              <h2 className="font-serif font-light text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl italic text-cream leading-none mb-2">
                Favorelli
              </h2>
              <p className="font-serif text-gold text-xl tracking-[0.15em] uppercase mb-8">
                Gelato Italiano
              </p>

              <div className="w-16 h-px bg-gold/40 mb-8" />

              <p className="font-sans text-cream/65 text-base leading-relaxed max-w-md mb-5">
                Authentisches Gelato nach traditionellen italienischen Rezepturen — für
                Gastronomie-Betriebe, die ihren Gästen etwas Besonderes bieten wollen.
              </p>
              <p className="font-sans text-cream/65 text-base leading-relaxed max-w-md mb-10">
                Von der Pistazie aus Bronte bis zur Nocciola aus dem Piemont: Favorelli
                steht für den unverfälschten Geschmack Italiens, direkt in der
                professionellen Eiskanne.
              </p>

              <Link
                href="/sortiment"
                className="group inline-flex items-center gap-3 text-gold font-sans text-sm tracking-[0.1em] uppercase hover:gap-5 transition-all duration-300"
              >
                Favorelli entdecken
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Visual Side */}
          <ScrollReveal variants={fadeInRight}>
            <div className="relative">
              {/* Decorative frame */}
              <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 border border-gold/15 translate-x-4 translate-y-4" />
                <div className="relative bg-midnight-light/80 border border-gold/20 aspect-square flex flex-col items-center justify-center p-12">
                  {/* Placeholder visual for Favorelli */}
                  <div className="text-center">
                    <div className="w-20 h-px bg-gold/40 mx-auto mb-8" />
                    <p className="font-serif italic text-cream/30 text-7xl leading-none mb-4">F</p>
                    <p className="font-serif italic text-5xl text-cream/20 leading-none mb-8">avorelli</p>
                    <div className="space-y-2">
                      {['Pistacchio di Bronte', 'Nocciola Piemonte', 'Tiramisù Classico', 'Limone di Amalfi'].map((name) => (
                        <p key={name} className="font-sans text-xs text-gold/50 tracking-[0.15em]">
                          {name}
                        </p>
                      ))}
                    </div>
                    <div className="w-20 h-px bg-gold/40 mx-auto mt-8" />
                  </div>
                </div>
              </div>

              {/* Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 lg:right-0 w-24 h-24 bg-gold flex items-center justify-center"
                animate={{ rotate: [0, 3, 0, -3, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-center">
                  <p className="font-serif italic text-midnight text-sm leading-tight">dal</p>
                  <p className="font-serif text-midnight text-xs font-medium tracking-wider uppercase">Cuore</p>
                  <p className="font-serif italic text-midnight text-sm leading-tight">d&apos;Italia</p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

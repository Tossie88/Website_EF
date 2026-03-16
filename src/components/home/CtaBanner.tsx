import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function CtaBanner() {
  return (
    <section className="relative bg-gold overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.05)_75%)] bg-[length:20px_20px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-light/50" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-20 md:py-24 text-center">
        <ScrollReveal>
          <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-midnight/60 mb-4">
            Gastronomie-Partnerschaft
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-midnight mb-5 text-balance">
            Werden Sie unser <em className="italic">Partner</em>
          </h2>
          <p className="font-sans text-midnight/65 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Sichern Sie sich ein hochwertiges Eissortiment für Ihr Café oder Restaurant.
            Wir beraten Sie gern zu Ihrem individuellen Bedarf.
          </p>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-3 bg-midnight text-gold px-8 py-4 font-sans text-sm font-medium tracking-[0.1em] uppercase hover:bg-midnight-deep transition-all duration-300 hover:gap-5"
          >
            Jetzt anfragen
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}

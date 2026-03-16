'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const INTERESTS = ['Speiseeis aus bester Milch', 'Fruchteis', 'Gelato (Favorelli)', 'Sonderprodukte']

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [interests, setInterests] = useState<string[]>([])

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')

    const formData = new FormData(e.currentTarget)
    const data = {
      company: formData.get('company'),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      interests,
    }

    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setState('success')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <CheckCircle size={48} className="text-gold mb-6" strokeWidth={1.5} />
        <h3 className="font-serif text-2xl text-cream mb-3">Anfrage gesendet</h3>
        <p className="font-sans text-cream/55 text-sm max-w-sm leading-relaxed">
          Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 1–2 Werktagen bei Ihnen.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-sans text-xs text-gold/70 tracking-[0.15em] uppercase mb-2">
            Firmenname <span className="text-gold">*</span>
          </label>
          <input
            name="company"
            required
            className="w-full bg-midnight-light border border-gold/15 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-cream/25"
            placeholder="Ihr Betrieb"
          />
        </div>
        <div>
          <label className="block font-sans text-xs text-gold/70 tracking-[0.15em] uppercase mb-2">
            Ihr Name <span className="text-gold">*</span>
          </label>
          <input
            name="name"
            required
            className="w-full bg-midnight-light border border-gold/15 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-cream/25"
            placeholder="Vor- und Nachname"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-sans text-xs text-gold/70 tracking-[0.15em] uppercase mb-2">
            E-Mail <span className="text-gold">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full bg-midnight-light border border-gold/15 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-cream/25"
            placeholder="ihre@email.de"
          />
        </div>
        <div>
          <label className="block font-sans text-xs text-gold/70 tracking-[0.15em] uppercase mb-2">
            Telefon
          </label>
          <input
            name="phone"
            type="tel"
            className="w-full bg-midnight-light border border-gold/15 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-cream/25"
            placeholder="+49 000 000 000"
          />
        </div>
      </div>

      {/* Interest checkboxes */}
      <div>
        <label className="block font-sans text-xs text-gold/70 tracking-[0.15em] uppercase mb-3">
          Interesse an
        </label>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((interest) => (
            <button
              key={interest}
              type="button"
              onClick={() => toggleInterest(interest)}
              className={`px-4 py-2 font-sans text-xs tracking-[0.1em] uppercase border transition-all duration-200 ${
                interests.includes(interest)
                  ? 'bg-gold text-midnight border-gold'
                  : 'border-gold/20 text-cream/60 hover:border-gold/40 hover:text-cream'
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-sans text-xs text-gold/70 tracking-[0.15em] uppercase mb-2">
          Nachricht
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full bg-midnight-light border border-gold/15 text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-cream/25 resize-none"
          placeholder="Ihr Bedarf, Fragen oder Anmerkungen..."
        />
      </div>

      {/* Datenschutz */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          name="privacy"
          id="privacy"
          required
          className="mt-0.5 w-4 h-4 accent-gold flex-shrink-0"
        />
        <label htmlFor="privacy" className="font-sans text-xs text-cream/50 leading-relaxed">
          Ich habe die{' '}
          <a href="/datenschutz" className="text-gold hover:underline">
            Datenschutzerklärung
          </a>{' '}
          gelesen und stimme der Verarbeitung meiner Daten zu. <span className="text-gold">*</span>
        </label>
      </div>

      {state === 'error' && (
        <div className="flex items-center gap-3 bg-red-950/50 border border-red-800/30 px-4 py-3">
          <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
          <p className="font-sans text-xs text-red-300">
            Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns per E-Mail.
          </p>
        </div>
      )}

      <AnimatePresence mode="wait">
        <Button
          type="submit"
          variant="primary"
          disabled={state === 'loading'}
          className="w-full justify-center gap-3"
        >
          {state === 'loading' ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              Wird gesendet...
            </>
          ) : (
            <>
              <Send size={15} />
              Anfrage senden
            </>
          )}
        </Button>
      </AnimatePresence>
    </form>
  )
}

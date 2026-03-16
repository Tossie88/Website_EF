'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-notice-accepted')
    if (!accepted) {
      // Kurze Verzögerung damit die Seite erst lädt
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie-notice-accepted', 'true')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-midnight-deep border-t border-gold/20 shadow-[0_-10px_40px_rgba(0,0,0,0.4)]"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1 pr-4">
                <p className="font-sans text-sm text-cream/80 leading-relaxed">
                  Diese Website verwendet ausschließlich{' '}
                  <span className="text-cream font-medium">technisch notwendige Cookies</span>,
                  die für den Betrieb der Website erforderlich sind. Es werden keine
                  Tracking- oder Analyse-Cookies eingesetzt.{' '}
                  <Link
                    href="/datenschutz"
                    className="text-gold hover:underline"
                  >
                    Mehr erfahren
                  </Link>
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={accept}
                  className="font-sans text-xs font-medium tracking-[0.1em] uppercase bg-gold text-midnight px-5 py-2.5 hover:bg-gold-light transition-colors duration-200"
                >
                  Verstanden
                </button>
                <button
                  onClick={accept}
                  className="text-cream/40 hover:text-cream transition-colors p-1"
                  aria-label="Schließen"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

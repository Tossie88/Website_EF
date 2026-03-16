'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Package } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CATEGORY_LABELS } from '@/lib/constants'
import type { Product } from '@/types'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [product])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal — bottom sheet on mobile, centered on desktop */}
          <motion.div
            className="fixed z-50 bg-midnight border border-gold/20 shadow-2xl
              bottom-0 left-0 right-0 rounded-t-2xl
              md:bottom-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-none md:w-full md:max-w-lg"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Gold top bar */}
            <div className="h-0.5 bg-gold/40 w-full" />

            {/* Handle (mobile) */}
            <div className="flex justify-center pt-3 pb-1 md:hidden">
              <div className="w-10 h-1 rounded-full bg-cream/20" />
            </div>

            <div className="p-8">
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-cream/40 hover:text-gold transition-colors"
                aria-label="Schließen"
              >
                <X size={20} />
              </button>

              {/* Category */}
              <p className="font-sans text-xs text-gold/60 tracking-[0.25em] uppercase mb-3">
                {CATEGORY_LABELS[product.category]}
              </p>

              <h2 className="font-serif text-3xl text-cream mb-1">{product.name}</h2>

              {product.tags && product.tags.length > 0 && (
                <div className="flex gap-2 mb-5">
                  {product.tags.map((tag) => (
                    <span key={tag} className="font-sans text-[10px] text-gold border border-gold/40 px-2 py-0.5 tracking-[0.15em] uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="w-12 h-px bg-gold/30 mb-6" />

              {/* Icon */}
              <div className="flex items-center justify-center h-32 bg-midnight-light mb-6">
                <Package size={56} strokeWidth={0.8} className="text-gold/25" />
              </div>

              <p className="font-sans text-sm text-cream/65 leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="mb-8">
                <p className="font-sans text-xs text-gold/60 tracking-[0.2em] uppercase mb-3">
                  Professionelle Eiskanne
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="font-sans text-sm text-cream border border-gold/30 px-4 py-2"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <Button href="/kontakt" variant="primary" className="w-full justify-center">
                Jetzt anfragen
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

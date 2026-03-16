'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface GoldDividerProps {
  className?: string
}

export function GoldDivider({ className = '' }: GoldDividerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className={`flex items-center gap-4 ${className}`}>
      <motion.div
        className="h-px flex-1 bg-gold/25"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
      <div className="w-1.5 h-1.5 rotate-45 bg-gold/60 flex-shrink-0" />
      <motion.div
        className="h-px flex-1 bg-gold/25"
        initial={{ scaleX: 0, originX: 1 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
    </div>
  )
}

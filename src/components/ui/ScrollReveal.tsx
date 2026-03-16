'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface ScrollRevealProps {
  children: React.ReactNode
  variants?: Variants
  delay?: number
  className?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  variants = fadeInUp,
  delay = 0,
  className,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-60px' })

  const adjustedVariants: Variants = delay
    ? {
        ...variants,
        visible: {
          ...(typeof variants.visible === 'object' ? variants.visible : {}),
          transition: {
            ...(typeof variants.visible === 'object' &&
            'transition' in variants.visible
              ? (variants.visible as { transition?: object }).transition
              : {}),
            delay,
          },
        },
      }
    : variants

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={adjustedVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

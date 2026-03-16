'use client'

import { motion } from 'framer-motion'
import { CATEGORY_LABELS } from '@/lib/constants'

type FilterCategory = 'alle' | 'milcheis' | 'fruchteis' | 'gelato' | 'sonderprodukte'

interface CategoryFilterProps {
  active: FilterCategory
  onChange: (cat: FilterCategory) => void
}

const CATEGORIES = ['alle', 'milcheis', 'fruchteis', 'gelato', 'sonderprodukte'] as FilterCategory[]

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`relative px-5 py-2.5 font-sans text-xs tracking-[0.12em] uppercase transition-all duration-300 ${
            active === cat
              ? 'text-midnight'
              : 'text-cream/60 hover:text-cream border border-gold/20 hover:border-gold/40'
          }`}
        >
          {active === cat && (
            <motion.div
              layoutId="filter-pill"
              className="absolute inset-0 bg-gold"
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
          <span className="relative z-10">{CATEGORY_LABELS[cat]}</span>
        </button>
      ))}
    </div>
  )
}

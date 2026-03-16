'use client'

import { motion } from 'framer-motion'
import { Package } from 'lucide-react'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
  onClick: (product: Product) => void
  index: number
}

export function ProductCard({ product, onClick, index }: ProductCardProps) {
  const CATEGORY_COLORS: Record<string, string> = {
    milcheis: 'border-blue-800/30 hover:border-blue-600/40',
    fruchteis: 'border-amber-800/30 hover:border-amber-600/40',
    gelato: 'border-emerald-800/30 hover:border-emerald-600/40',
    sonderprodukte: 'border-purple-800/30 hover:border-purple-600/40',
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onClick(product)}
      className={`group relative w-full text-left bg-midnight-light border ${CATEGORY_COLORS[product.category]} transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden`}
    >
      {/* Color accent top bar */}
      <div className="w-full h-0.5 bg-gold/20 group-hover:bg-gold/60 transition-all duration-500" />

      {/* Icon area */}
      <div className="relative h-44 flex items-center justify-center bg-gradient-to-b from-midnight/60 to-transparent overflow-hidden">
        <Package
          size={48}
          strokeWidth={0.8}
          className="text-gold/20 group-hover:text-gold/40 transition-all duration-500 group-hover:scale-110"
        />
        {product.featured && (
          <span className="absolute top-4 right-4 font-sans text-[9px] tracking-[0.2em] uppercase text-gold border border-gold/40 px-2 py-1">
            Empfohlen
          </span>
        )}
        {product.tags?.map((tag) => (
          <span
            key={tag}
            className="absolute top-4 left-4 font-sans text-[9px] tracking-[0.2em] uppercase text-gold/70 border border-gold/20 px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-cream mb-2 group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="font-sans text-xs text-cream/50 leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <span
              key={size}
              className="font-sans text-[10px] text-gold/60 border border-gold/20 px-2.5 py-1 tracking-[0.1em]"
            >
              {size}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  )
}

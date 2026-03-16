'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { CategoryFilter } from '@/components/sortiment/CategoryFilter'
import { ProductCard } from '@/components/sortiment/ProductCard'
import { ProductModal } from '@/components/sortiment/ProductModal'
import { CtaBanner } from '@/components/home/CtaBanner'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { PRODUCTS, CATEGORY_SUBTITLES } from '@/lib/constants'
import type { Product } from '@/types'

type FilterCategory = 'alle' | 'milcheis' | 'fruchteis' | 'gelato' | 'sonderprodukte'

export default function SortimentPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('alle')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filtered = activeCategory === 'alle'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Page Hero */}
      <div className="relative bg-midnight-deep pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(27,56,120,0.25),transparent)]" />
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionLabel className="text-center">Professionelle Eiskannen für die Gastronomie</SectionLabel>
          <h1 className="font-serif font-light text-5xl md:text-6xl text-cream mb-4">
            Unser <em className="italic text-gold">Sortiment</em>
          </h1>
          <p className="font-sans text-cream/55 text-base max-w-xl mx-auto leading-relaxed">
            Über 40 Eissorten in der 5.600-ml-Eiskanne — für Eiscafés, Restaurants
            und Hotels. Wählen Sie Ihre Kategorie.
          </p>
        </div>
      </div>

      <div className="bg-midnight py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <GoldDivider />
        </div>
      </div>

      {/* Filter + Grid */}
      <div className="bg-midnight py-16 md:py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filter */}
          <div className="mb-8">
            <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
          </div>

          {/* Category subtitle */}
          {CATEGORY_SUBTITLES[activeCategory] && (
            <p className="text-center font-sans text-xs text-gold/60 tracking-[0.2em] uppercase mb-10">
              {CATEGORY_SUBTITLES[activeCategory]}
            </p>
          )}

          {/* Grid */}
          <AnimatePresence mode="popLayout">
            <div
              key={activeCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  onClick={setSelectedProduct}
                />
              ))}
            </div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-serif italic text-cream/30 text-2xl">
                Keine Produkte gefunden.
              </p>
            </div>
          )}
        </div>
      </div>

      <CtaBanner />

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  )
}

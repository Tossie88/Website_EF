'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const headerBg = scrolled || !isHome
    ? 'bg-midnight/95 backdrop-blur-md border-b border-gold/10'
    : 'bg-transparent'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-12 h-12 relative">
                <Image
                  src="/images/logo-eis-freude-blue.png"
                  alt="Eis Freude GmbH"
                  fill
                  className="object-contain"
                  sizes="48px"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-cream font-serif text-base font-medium leading-tight tracking-wide">
                  Eis Freude
                </p>
                <p className="text-cream/50 font-sans text-[10px] tracking-[0.2em] uppercase">
                  GmbH
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-sans text-sm tracking-[0.1em] uppercase transition-colors duration-200 relative group ${
                    pathname === item.href ? 'text-gold' : 'text-cream/70 hover:text-cream'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                      pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Button href="/kontakt" variant="ghost" className="hidden md:inline-flex text-xs py-2.5 px-5">
                Anfrage stellen
              </Button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-cream p-1.5 hover:text-gold transition-colors"
                aria-label="Menü"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-midnight/98 backdrop-blur-xl flex flex-col justify-center px-8"
          >
            <div className="mb-16">
              <p className="text-gold/60 text-xs font-sans tracking-[0.3em] uppercase mb-8">Navigation</p>
              <nav className="flex flex-col gap-6">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className={`font-serif text-4xl font-light italic transition-colors ${
                        pathname === item.href ? 'text-gold' : 'text-cream hover:text-gold'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button href="/kontakt" variant="primary" className="w-full justify-center">
                Anfrage stellen
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

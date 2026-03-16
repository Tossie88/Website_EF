import Link from 'next/link'
import Image from 'next/image'
import { NAV_ITEMS } from '@/lib/constants'
import { GoldDivider } from '@/components/ui/GoldDivider'

export function Footer() {
  return (
    <footer className="bg-midnight-deep border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/logo-eis-freude-blue.png"
                  alt="Eis Freude GmbH"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="font-serif text-cream text-lg font-medium">Eis Freude GmbH</span>
            </div>
            <p className="text-cream/50 font-sans text-sm leading-relaxed max-w-xs">
              Ihr Premium-Partner für hochwertiges Speiseeis in der professionellen Eiskanne. Produziert und vertrieben für anspruchsvolle Gastronomie-Betriebe.
            </p>
            <div className="mt-6">
              <p className="text-gold/70 font-sans text-xs tracking-[0.2em] uppercase mb-1">
                Eine Marke von uns
              </p>
              <p className="text-cream font-serif text-lg italic">
                Favorelli – Gelato Italiano
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-gold/70 font-sans text-xs tracking-[0.3em] uppercase mb-5">Navigation</p>
            <nav className="flex flex-col gap-3">
              {[{ label: 'Startseite', href: '/' }, ...NAV_ITEMS].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-cream/60 font-sans text-sm hover:text-gold transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-gold/70 font-sans text-xs tracking-[0.3em] uppercase mb-5">Kontakt</p>
            <div className="space-y-3">
              <p className="text-cream/60 font-sans text-sm leading-relaxed">
                Eis Freude GmbH<br />
                Strichweg 136<br />
                27476 Cuxhaven
              </p>
              <a
                href="tel:+4947215409057"
                className="block text-cream/60 font-sans text-sm hover:text-gold transition-colors"
              >
                04721 5409057
              </a>
              <a
                href="mailto:info@eisfreude.de"
                className="block text-cream/60 font-sans text-sm hover:text-gold transition-colors"
              >
                info@eisfreude.de
              </a>
            </div>
          </div>
        </div>

        <GoldDivider className="my-10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 font-sans text-xs">
            © {new Date().getFullYear()} Eis Freude GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="text-cream/30 font-sans text-xs hover:text-gold transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-cream/30 font-sans text-xs hover:text-gold transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

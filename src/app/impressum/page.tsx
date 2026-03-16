import type { Metadata } from 'next'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Eis Freude GmbH',
}

export default function ImpressumPage() {
  return (
    <div className="bg-midnight min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionLabel>Rechtliches</SectionLabel>
        <h1 className="font-serif font-light text-4xl md:text-5xl text-cream mb-10">
          Impressum
        </h1>

        <GoldDivider className="mb-10" />

        <div className="space-y-10 font-sans text-sm text-cream/70 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-cream mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              Eis Freude GmbH<br />
              Strichweg 136<br />
              27476 Cuxhaven
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-cream mb-4">Vertreten durch</h2>
            <p>Geschäftsführer: Federico Torsiello</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-cream mb-4">Kontakt</h2>
            <p>
              Telefon:{' '}
              <a href="tel:+4947215409057" className="text-gold hover:underline">
                04721 5409057
              </a>
              <br />
              E-Mail:{' '}
              <a href="mailto:info@eisfreude.de" className="text-gold hover:underline">
                info@eisfreude.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-cream mb-4">Registereintrag</h2>
            <p>
              Eingetragen im Handelsregister.<br />
              Registergericht: Amtsgericht Tostedt<br />
              Registernummer: HRB 205658
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-cream mb-4">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE307680177
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-cream mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Federico Torsiello<br />
              Strichweg 136<br />
              27476 Cuxhaven
            </p>
          </section>

          <GoldDivider />

          <section>
            <h2 className="font-serif text-xl text-cream mb-4">Haftungsausschluss</h2>
            <h3 className="font-sans font-medium text-cream/80 mb-2">Haftung für Inhalte</h3>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
              diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
              TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <h3 className="font-sans font-medium text-cream/80 mb-2">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
              wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
              keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
              jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-cream mb-4">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors
              bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

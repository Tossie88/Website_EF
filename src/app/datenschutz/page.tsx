import type { Metadata } from 'next'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Eis Freude GmbH gemäß DSGVO',
}

export default function DatenschutzPage() {
  return (
    <div className="bg-midnight min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionLabel>Rechtliches</SectionLabel>
        <h1 className="font-serif font-light text-4xl md:text-5xl text-cream mb-4">
          Datenschutzerklärung
        </h1>
        <p className="font-sans text-cream/50 text-sm mb-10">
          Gemäß Art. 13, 14 DSGVO
        </p>

        <GoldDivider className="mb-10" />

        <div className="space-y-10 font-sans text-sm text-cream/70 leading-relaxed">

          {/* 1. Verantwortlicher */}
          <section>
            <h2 className="font-serif text-xl text-cream mb-4">1. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br /><br />
              Eis Freude GmbH<br />
              Strichweg 136<br />
              27476 Cuxhaven<br />
              <br />
              Geschäftsführer: Federico Torsiello<br />
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

          <GoldDivider />

          {/* 2. Erhebung und Verarbeitung personenbezogener Daten */}
          <section>
            <h2 className="font-serif text-xl text-cream mb-4">
              2. Erhebung und Verarbeitung personenbezogener Daten
            </h2>

            <h3 className="font-sans font-medium text-cream/80 mb-2">
              2.1 Beim Besuch unserer Website
            </h3>
            <p className="mb-5">
              Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz
              kommenden Browser automatisch Informationen an den Server unserer Website
              gesendet. Diese Informationen werden temporär in einem sogenannten Logfile
              gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und
              bis zur automatisierten Löschung gespeichert:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-5 text-cream/60">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
            </ul>
            <p>
              Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:
              Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,
              Gewährleistung einer komfortablen Nutzung unserer Website sowie zur
              Auswertung der Systemsicherheit und -stabilität. Die Rechtsgrundlage für
              die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
            </p>

            <h3 className="font-sans font-medium text-cream/80 mb-2 mt-6">
              2.2 Kontaktformular
            </h3>
            <p className="mb-4">
              Bei der Nutzung unseres Kontaktformulars erheben wir folgende
              personenbezogene Daten:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-5 text-cream/60">
              <li>Firmenname</li>
              <li>Vor- und Nachname</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer (optional)</li>
              <li>Inhalt Ihrer Nachricht</li>
              <li>Ihre Produktinteressen (optional)</li>
            </ul>
            <p>
              Die Verarbeitung dieser Daten erfolgt zur Bearbeitung Ihrer Anfrage und
              zur Kontaktaufnahme mit Ihnen auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
              (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an der Beantwortung von Geschäftsanfragen). Die im Rahmen des
              Kontaktformulars erhobenen Daten werden nicht ohne Ihre Einwilligung
              an Dritte weitergegeben.
            </p>
          </section>

          <GoldDivider />

          {/* 3. Speicherdauer */}
          <section>
            <h2 className="font-serif text-xl text-cream mb-4">3. Speicherdauer</h2>
            <p>
              Die von Ihnen über das Kontaktformular übermittelten Daten verbleiben bei
              uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
              widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach
              abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
              Bestimmungen — insbesondere steuer- und handelsrechtliche
              Aufbewahrungsfristen von bis zu 10 Jahren — bleiben unberührt.
            </p>
          </section>

          <GoldDivider />

          {/* 4. Weitergabe von Daten */}
          <section>
            <h2 className="font-serif text-xl text-cream mb-4">
              4. Weitergabe von Daten an Dritte
            </h2>
            <p>
              Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im
              Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre
              persönlichen Daten nur an Dritte weiter, wenn:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-3 text-cream/60">
              <li>
                Sie Ihre ausdrückliche Einwilligung dazu erteilt haben (Art. 6 Abs. 1
                lit. a DSGVO)
              </li>
              <li>
                die Weitergabe zur Erfüllung eines Vertrages mit Ihnen erforderlich ist
                (Art. 6 Abs. 1 lit. b DSGVO)
              </li>
              <li>
                eine gesetzliche Verpflichtung zur Weitergabe besteht (Art. 6 Abs. 1
                lit. c DSGVO)
              </li>
              <li>
                die Weitergabe zur Wahrung berechtigter Unternehmensinteressen sowie zur
                Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
                erforderlich ist (Art. 6 Abs. 1 lit. f DSGVO)
              </li>
            </ul>
          </section>

          <GoldDivider />

          {/* 5. Cookies */}
          <section>
            <h2 className="font-serif text-xl text-cream mb-4">5. Cookies</h2>
            <p>
              Unsere Website verwendet keine Tracking-Cookies oder Analyse-Dienste.
              Es werden ausschließlich technisch notwendige Maßnahmen eingesetzt,
              die für den Betrieb der Website erforderlich sind. Es werden keine
              personenbezogenen Daten für Werbezwecke oder zur Reichweitenmessung
              verarbeitet.
            </p>
          </section>

          <GoldDivider />

          {/* 6. Hosting */}
          <section>
            <h2 className="font-serif text-xl text-cream mb-4">6. Hosting</h2>
            <p>
              Diese Website wird bei Hostinger International Ltd., 61 Lordou Vironos
              Street, 6023 Larnaca, Zypern, gehostet. Wenn Sie unsere Website besuchen,
              werden Ihre personenbezogenen Daten auf den Servern des Hosters verarbeitet.
              Die Nutzung von Hostinger erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO. Wir haben mit Hostinger einen Vertrag zur Auftragsverarbeitung (AVV)
              geschlossen.
            </p>
          </section>

          <GoldDivider />

          {/* 7. SSL */}
          <section>
            <h2 className="font-serif text-xl text-cream mb-4">7. SSL-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
              Browsers von „http://" auf „https://" wechselt.
            </p>
          </section>

          <GoldDivider />

          {/* 8. Betroffenenrechte */}
          <section>
            <h2 className="font-serif text-xl text-cream mb-4">8. Ihre Rechte</h2>
            <p className="mb-4">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden
              personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside space-y-2 text-cream/60">
              <li>
                <span className="text-cream/80">Recht auf Auskunft</span> — Art. 15 DSGVO
              </li>
              <li>
                <span className="text-cream/80">Recht auf Berichtigung</span> — Art. 16 DSGVO
              </li>
              <li>
                <span className="text-cream/80">Recht auf Löschung</span> — Art. 17 DSGVO
              </li>
              <li>
                <span className="text-cream/80">Recht auf Einschränkung der Verarbeitung</span> — Art. 18 DSGVO
              </li>
              <li>
                <span className="text-cream/80">Recht auf Datenübertragbarkeit</span> — Art. 20 DSGVO
              </li>
              <li>
                <span className="text-cream/80">Widerspruchsrecht</span> — Art. 21 DSGVO
              </li>
            </ul>
            <p className="mt-5">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
              <a href="mailto:info@eisfreude.de" className="text-gold hover:underline">
                info@eisfreude.de
              </a>
            </p>
          </section>

          <GoldDivider />

          {/* 9. Beschwerderecht */}
          <section>
            <h2 className="font-serif text-xl text-cream mb-4">
              9. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über
              die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
              Die zuständige Aufsichtsbehörde für Niedersachsen ist:
            </p>
            <p className="mt-4 text-cream/60">
              Der Landesbeauftragte für den Datenschutz Niedersachsen<br />
              Prinzenstraße 5<br />
              30159 Hannover<br />
              Telefon: 0511 120-4500<br />
              E-Mail:{' '}
              <a
                href="mailto:poststelle@lfd.niedersachsen.de"
                className="text-gold hover:underline"
              >
                poststelle@lfd.niedersachsen.de
              </a>
            </p>
          </section>

          <GoldDivider />

          {/* 10. Aktualität */}
          <section>
            <h2 className="font-serif text-xl text-cream mb-4">
              10. Aktualität dieser Datenschutzerklärung
            </h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026.
              Durch die Weiterentwicklung unserer Website oder aufgrund geänderter
              gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese
              Datenschutzerklärung zu ändern.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}

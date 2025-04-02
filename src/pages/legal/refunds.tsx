import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function RefundPolicy() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Refund and Chargeback Policy",
      lastUpdated: "Last updated: March 2024",
      content: `
        1. Digital Products and Right of Withdrawal
        In accordance with EU consumer protection laws:

        - You have a 14-day right of withdrawal for digital content not supplied on a tangible medium
        - Before accessing content, you must explicitly:
          a) Consent to immediate delivery
          b) Acknowledge that this consent waives your right of withdrawal
        - If you don't provide this consent, you maintain the right to withdraw within 14 days
        - Technical issues preventing use will be addressed with priority support or refund
        - Refund requests will be processed within 14 days of receipt

        2. SaaS Subscriptions
        For subscription-based services:

        - Pro-rated refunds available for unused service periods
        - No refunds for partial months
        - Cancellation must be requested before the next billing cycle
        - Service continues until the end of the paid period

        3. Chargeback Policy
        Regarding payment disputes:

        - I handle all disputes fairly and in accordance with consumer protection laws
        - Service access may be temporarily suspended during dispute resolution
        - I reserve the right to decline future service in cases of proven fraudulent claims
        - All legitimate disputes will be handled professionally and promptly
        - Documentation will be provided as required by payment processors

        4. Data Protection
        In case of refund or cancellation:

        - Personal data is handled in accordance with GDPR
        - Data deletion requests processed within one month
        - Complex requests may require up to two additional months
        - You can export your data before account closure
        - Some data may be retained to comply with legal obligations
        - You have the right to lodge a complaint with the Dutch Data Protection Authority

        5. Legal Requirements
        Certain data must be retained in accordance with Dutch law:
        - Financial records: 7 years (Belastingdienst requirement)
        - Transaction data: 2 years (consumer protection requirement)
        - These retention periods override deletion requests

        6. Contact and Supervision
        For refund requests or questions:
        Email: katteke@protonmail.com
        Response time: Within 2 business days

        Supervisory Authority:
        Autoriteit Persoonsgegevens
        Bezuidenhoutseweg 30
        2594 AV Den Haag
        The Netherlands
        https://autoriteitpersoonsgegevens.nl
      `
    },
    nl: {
      title: "Beleid voor Terugbetalingen en Chargebacks",
      lastUpdated: "Laatst bijgewerkt: maart 2024",
      content: `
        1. Digitale Producten en Herroepingsrecht
        In overeenstemming met EU-consumentenbeschermingswetten:

        - U heeft een herroepingsrecht van 14 dagen voor digitale inhoud die niet op een materiële drager wordt geleverd
        - Voor toegang tot de inhoud moet u uitdrukkelijk:
          a) Instemmen met onmiddellijke levering
          b) Erkennen dat deze instemming uw herroepingsrecht doet vervallen
        - Als u deze toestemming niet geeft, behoudt u het recht om binnen 14 dagen te herroepen
        - Technische problemen die gebruik verhinderen worden opgelost met prioriteitsondersteuning of terugbetaling
        - Terugbetalingsverzoeken worden binnen 14 dagen na ontvangst verwerkt

        2. SaaS Abonnementen
        Voor diensten op abonnementsbasis:

        - Pro-rata terugbetalingen beschikbaar voor ongebruikte serviceperioden
        - Geen terugbetalingen voor gedeeltelijke maanden
        - Opzegging moet voor de volgende factureringsperiode worden aangevraagd
        - Service loopt door tot het einde van de betaalde periode

        3. Chargeback Beleid
        Met betrekking tot betalingsgeschillen:

        - Ik behandel alle geschillen eerlijk en in overeenstemming met consumentenwetgeving
        - Toegang tot diensten kan tijdelijk worden opgeschort tijdens geschillenbeslechting
        - Ik behoud me het recht voor om toekomstige dienstverlening te weigeren bij bewezen frauduleuze claims
        - Alle legitieme geschillen worden professioneel en snel afgehandeld
        - Documentatie wordt verstrekt zoals vereist door betalingsverwerkers

        4. Gegevensbescherming
        Bij terugbetaling of annulering:

        - Persoonsgegevens worden behandeld volgens de AVG
        - Verzoeken tot gegevensverwijdering worden binnen één maand verwerkt
        - Complexe verzoeken kunnen tot twee extra maanden vergen
        - U kunt uw gegevens exporteren voor accountsluiting
        - Sommige gegevens kunnen worden bewaard om aan wettelijke verplichtingen te voldoen
        - U heeft het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens

        5. Wettelijke Vereisten
        Bepaalde gegevens moeten worden bewaard volgens Nederlands recht:
        - Financiële administratie: 7 jaar (eis Belastingdienst)
        - Transactiegegevens: 2 jaar (eis consumentenbescherming)
        - Deze bewaartermijnen hebben voorrang op verwijderingsverzoeken

        6. Contact en Toezicht
        Voor terugbetalingsverzoeken of vragen:
        E-mail: katteke@protonmail.com
        Reactietijd: Binnen 2 werkdagen

        Toezichthoudende Autoriteit:
        Autoriteit Persoonsgegevens
        Bezuidenhoutseweg 30
        2594 AV Den Haag
        Nederland
        https://autoriteitpersoonsgegevens.nl
      `
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">{content[language].title}</h1>
        <p className="text-gray-600 mb-8">{content[language].lastUpdated}</p>
        <div className="prose max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-gray-800">
            {content[language].content}
          </pre>
        </div>
      </div>
    </div>
  );
}
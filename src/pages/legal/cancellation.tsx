import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function CancellationPolicy() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Cancellation Policy",
      lastUpdated: "Last updated: March 2024",
      content: `
        1. Subscription Services
        For subscription-based services:

        - Cancellation requests must be submitted before the next billing cycle
        - Service continues until the end of the current billing period
        - No refunds for partial billing periods
        - You retain access to your data for 30 days after cancellation

        2. Project Cancellations
        For custom development projects:

        - Cancellation fees may apply based on work completed
        - All completed work remains my intellectual property until full payment
        - Deposits are non-refundable
        - 50% payment required for work completed up to cancellation

        3. Data Protection and Privacy
        In accordance with GDPR:

        - You can request complete deletion of your personal data at any time
        - Data deletion requests will be processed within one month
        - Complex requests may require up to two additional months
        - You can export your data before requesting deletion
        - I only retain data necessary for legal and business requirements
        - Legal retention requirements override deletion requests
        - You have the right to lodge a complaint with the Dutch Data Protection Authority

        4. Process
        To cancel:

        - Email cancellation request to katteke@protonmail.com
        - Include account details
        - Receive confirmation within 2 business days
        - Choose data handling preference (export or delete)

        5. Data Handling After Cancellation
        Your options:

        - Request data deletion (processed within one month)
        - Export your data (available for 30 days)
        - After 30 days, non-essential data is automatically deleted
        - Some data may be retained to comply with legal obligations
        - You will be informed about any legally required data retention

        6. Service Termination
        I reserve the right to terminate service:

        - For violation of terms of service
        - Non-payment
        - Fraudulent activity
        - You will be notified by email

        7. Supervisory Authority
        For data protection concerns:
        Autoriteit Persoonsgegevens
        Bezuidenhoutseweg 30
        2594 AV Den Haag
        The Netherlands
        https://autoriteitpersoonsgegevens.nl
      `
    },
    nl: {
      title: "Annuleringsbeleid",
      lastUpdated: "Laatst bijgewerkt: maart 2024",
      content: `
        1. Abonnementsdiensten
        Voor diensten op abonnementsbasis:

        - Annuleringsverzoeken moeten voor de volgende factureringsperiode worden ingediend
        - Service loopt door tot het einde van de huidige factureringsperiode
        - Geen terugbetalingen voor gedeeltelijke factureringsperioden
        - U behoudt toegang tot uw gegevens gedurende 30 dagen na annulering

        2. Project Annuleringen
        Voor aangepaste ontwikkelingsprojecten:

        - Annuleringskosten kunnen van toepassing zijn op basis van voltooid werk
        - Al het voltooide werk blijft mijn intellectueel eigendom tot volledige betaling
        - Aanbetaling is niet-restitueerbaar
        - 50% betaling vereist voor werk voltooid tot aan annulering

        3. Gegevensbescherming en Privacy
        In overeenstemming met de AVG:

        - U kunt op elk moment volledige verwijdering van uw persoonsgegevens aanvragen
        - Verzoeken tot gegevensverwijdering worden binnen één maand verwerkt
        - Complexe verzoeken kunnen tot twee extra maanden vergen
        - U kunt uw gegevens exporteren voordat u om verwijdering vraagt
        - Ik bewaar alleen gegevens die noodzakelijk zijn voor wettelijke en zakelijke vereisten
        - Wettelijke bewaarvereisten hebben voorrang op verwijderingsverzoeken
        - U heeft het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens

        4. Proces
        Om te annuleren:

        - Stuur annuleringsverzoek naar katteke@protonmail.com
        - Vermeld accountgegevens
        - Ontvang bevestiging binnen 2 werkdagen
        - Kies gegevensbehandeling voorkeur (exporteren of verwijderen)

        5. Gegevensverwerking Na Annulering
        Uw opties:

        - Verzoek om gegevensverwijdering (verwerkt binnen één maand)
        - Exporteer uw gegevens (beschikbaar gedurende 30 dagen)
        - Na 30 dagen worden niet-essentiële gegevens automatisch verwijderd
        - Sommige gegevens kunnen worden bewaard om aan wettelijke verplichtingen te voldoen
        - U wordt geïnformeerd over eventuele wettelijk vereiste gegevensbewaring

        6. Beëindiging van Service
        Ik behoud me het recht voor om de service te beëindigen:

        - Bij schending van de gebruiksvoorwaarden
        - Niet-betaling
        - Frauduleuze activiteit
        - U wordt per e-mail op de hoogte gesteld

        7. Toezichthoudende Autoriteit
        Voor gegevensbeschermingskwesties:
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
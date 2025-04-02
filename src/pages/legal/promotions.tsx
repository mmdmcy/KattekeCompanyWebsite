import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function PromotionalTerms() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Promotional Terms and Conditions",
      lastUpdated: "Last updated: March 2024",
      content: `
        1. General Terms
        These terms apply to all promotional offers, discounts, and special deals:

        - All promotions are time-limited unless specified otherwise
        - I reserve the right to modify or end promotions at any time
        - Promotions cannot be combined unless explicitly stated
        - Promotional pricing applies to initial term only

        2. Eligibility
        - Open to new customers only unless specified
        - Must meet specific criteria if stated in promotion
        - Valid only in eligible regions
        - Different terms may apply for business customers

        3. Restrictions
        - One promotion per customer/account
        - Not transferable or redeemable for cash
        - Cannot be applied retroactively
        - May not be valid with other offers

        4. Promotional Pricing
        - Clearly stated in promotional materials
        - Regular pricing resumes after promotional period
        - Subject to change with notice
        - Excludes additional services unless specified

        5. Consumer Rights
        Your statutory rights are not affected by promotional offers:

        - 14-day withdrawal right remains applicable
        - Consumer protection laws still apply
        - Data protection rights remain unchanged
        - Complaints process remains available

        6. Cancellation Impact
        - Early cancellation may affect promotional benefits
        - Regular pricing may apply after promotion ends
        - No refunds on promotional discounts
        - Terms will be clearly communicated before purchase

        7. Contact
        For questions about promotions:
        Email: katteke@protonmail.com
      `
    },
    nl: {
      title: "Actievoorwaarden",
      lastUpdated: "Laatst bijgewerkt: maart 2024",
      content: `
        1. Algemene Voorwaarden
        Deze voorwaarden zijn van toepassing op alle promotionele aanbiedingen, kortingen en speciale deals:

        - Alle promoties zijn tijdelijk, tenzij anders aangegeven
        - Ik behoud het recht om promoties op elk moment te wijzigen of te beëindigen
        - Promoties kunnen niet worden gecombineerd, tenzij expliciet vermeld
        - Promotionele prijzen gelden alleen voor de initiële termijn

        2. Voorwaarden
        - Alleen geldig voor nieuwe klanten, tenzij anders vermeld
        - Moet voldoen aan specifieke criteria indien vermeld in de promotie
        - Alleen geldig in deelnemende regio's
        - Andere voorwaarden kunnen gelden voor zakelijke klanten

        3. Beperkingen
        - Één promotie per klant/account
        - Niet overdraagbaar of inwisselbaar voor contanten
        - Kan niet met terugwerkende kracht worden toegepast
        - Mogelijk niet geldig in combinatie met andere aanbiedingen

        4. Promotionele Prijzen
        - Duidelijk vermeld in promotiemateriaal
        - Reguliere prijzen gelden na promotieperiode
        - Kunnen worden gewijzigd met kennisgeving
        - Exclusief aanvullende diensten, tenzij anders vermeld

        5. Consumentenrechten
        Uw wettelijke rechten worden niet beïnvloed door promotionele aanbiedingen:

        - 14 dagen herroepingsrecht blijft van toepassing
        - Consumentenbeschermingswetten blijven gelden
        - Gegevensbeschermingsrechten blijven ongewijzigd
        - Klachtenprocedure blijft beschikbaar

        6. Impact van Annulering
        - Vroegtijdige annulering kan promotionele voordelen beïnvloeden
        - Reguliere prijzen kunnen gelden na afloop van de promotie
        - Geen terugbetaling op promotionele kortingen
        - Voorwaarden worden duidelijk gecommuniceerd voor aankoop

        7. Contact
        Voor vragen over promoties:
        E-mail: katteke@protonmail.com
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
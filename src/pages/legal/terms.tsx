import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Terms() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last updated: March 2024",
      content: `
        1. Introduction
        These Terms of Service govern your use of software, websites, and services provided by Katteke, a sole proprietorship ("eenmanszaak") registered in The Netherlands ("I," "me," or "my").

        2. Services
        I provide software development, web applications, mobile applications, and Software as a Service (SaaS) solutions.

        3. Intellectual Property
        All intellectual property rights in my services remain my exclusive property. You receive only a limited, non-exclusive license to use the services.

        4. User Obligations
        You agree to:
        - Provide accurate information
        - Use my services legally and responsibly
        - Not attempt to reverse engineer my software
        - Not access my services through automated means

        5. Updates and Maintenance
        I commit to providing necessary updates to ensure digital products and services function correctly and securely, in accordance with Dutch law requirements effective April 27, 2022. This includes:
        - Security updates throughout the service period
        - Functionality updates as required by law
        - Advance notice of any significant changes
        - Clear communication about update requirements

        6. Data Collection and Processing
        I collect and process the following types of data:

        Account Information:
        - Email address (for authentication and communications)
        - Username or display name
        - Password (stored securely using industry-standard encryption)
        - Account creation date
        - Last login timestamp
        Retention period: Throughout active account lifecycle + 30 days after deletion
        
        Service Usage Data:
        - Application preferences and settings
        - Feature usage statistics
        - Performance metrics
        - Error logs for troubleshooting
        - IP addresses for security purposes
        Retention period: 12 months rolling window
        
        Subscription Data:
        - Subscription type and status
        - Payment history
        - Billing information
        - Transaction records
        Retention period: 7 years (legal requirement)
        
        User-Generated Content:
        - Data you create or upload while using the service
        - Application-specific content
        - Saved preferences and configurations
        Retention period: Throughout active account lifecycle + 30 days after deletion

        7. Content Moderation and DSA Compliance
        In accordance with the Digital Services Act (DSA):

        Content Moderation:
        - Clear policies on prohibited content
        - Transparent decision-making process
        - Appeal mechanism for content decisions
        - Regular reporting on content moderation activities

        Notice and Action:
        - Clear procedure for reporting illegal content
        - Timely processing of notices (within 24 hours for serious violations)
        - Detailed feedback on reported content decisions

        Transparency:
        - Regular publication of transparency reports
        - Clear information about automated content moderation
        - Documentation of risk assessments and mitigation measures

        8. Data Protection Rights
        Under GDPR, you have the following rights:
        - Access your personal data
        - Correct inaccurate data
        - Request data deletion (subject to legal retention requirements)
        - Export your data in a portable format
        - Object to certain data processing
        - Withdraw consent for optional processing

        9. Explicit Consent Requirements
        Before accessing the service, you must explicitly consent to:
        - The collection of necessary account data
        - Processing of service usage data
        - Storage of user-generated content
        - Essential cookies and security measures

        This consent is obtained through:
        - Clear checkbox during registration
        - Explicit acknowledgment of data processing
        - Separate consent for optional features
        - Clear privacy notices before data collection

        10. Limitation of Liability
        To the maximum extent permitted by law, I shall not be liable for any indirect, incidental, special, consequential, or punitive damages.

        11. Termination
        I reserve the right to terminate or suspend access to my services at my sole discretion.

        12. Governing Law and Supervision
        - These terms are governed by the laws of The Netherlands and the European Union
        - For data protection matters, the supervisory authority is:
          Autoriteit Persoonsgegevens
          Bezuidenhoutseweg 30
          2594 AV Den Haag
          The Netherlands
          https://autoriteitpersoonsgegevens.nl

        13. Changes to Terms
        I reserve the right to modify these terms at any time. Continued use of my services constitutes acceptance of modified terms.

        14. Contact
        For any questions about these terms or to exercise your data protection rights:
        Email: katteke@protonmail.com
      `
    },
    nl: {
      title: "Algemene Voorwaarden",
      lastUpdated: "Laatst bijgewerkt: maart 2024",
      content: `
        1. Inleiding
        Deze Algemene Voorwaarden zijn van toepassing op het gebruik van software, websites en diensten van Katteke, een eenmanszaak geregistreerd in Nederland ("ik," "mij," of "mijn").

        2. Diensten
        Ik lever softwareontwikkeling, webapplicaties, mobiele applicaties en Software as a Service (SaaS) oplossingen.

        3. Intellectueel Eigendom
        Alle intellectuele eigendomsrechten op mijn diensten blijven mijn exclusieve eigendom. U krijgt alleen een beperkte, niet-exclusieve licentie om de diensten te gebruiken.

        4. Verplichtingen Gebruiker
        U stemt ermee in om:
        - Accurate informatie te verstrekken
        - Mijn diensten legaal en verantwoordelijk te gebruiken
        - Geen reverse engineering toe te passen op mijn software
        - Geen geautomatiseerde toegang tot mijn diensten te verkrijgen

        5. Updates en Onderhoud
        Ik verplicht me tot het leveren van noodzakelijke updates om ervoor te zorgen dat digitale producten en diensten correct en veilig functioneren, in overeenstemming met de Nederlandse wetgeving die vanaf 27 april 2022 van kracht is. Dit omvat:
        - Beveiligingsupdates gedurende de serviceperiode
        - Functionaliteitsupdates zoals wettelijk vereist
        - Voorafgaande kennisgeving van belangrijke wijzigingen
        - Duidelijke communicatie over update-vereisten

        6. Gegevensverzameling en Verwerking
        Ik verzamel en verwerk de volgende soorten gegevens:

        Account Informatie:
        - E-mailadres (voor authenticatie en communicatie)
        - Gebruikersnaam of weergavenaam
        - Wachtwoord (veilig opgeslagen met industriestandaard encryptie)
        - Account aanmaakdatum
        - Laatste login tijdstempel
        Bewaartermijn: Gedurende actieve account levenscyclus + 30 dagen na verwijdering
        
        Service Gebruiksgegevens:
        - Applicatie voorkeuren en instellingen
        - Statistieken over functiegebruik
        - Prestatiemetingen
        - Foutlogs voor probleemoplossing
        - IP-adressen voor beveiligingsdoeleinden
        Bewaartermijn: 12 maanden doorlopend venster
        
        Abonnementsgegevens:
        - Abonnementstype en status
        - Betalingsgeschiedenis
        - Factureringsgegevens
        - Transactiegegevens
        Bewaartermijn: 7 jaar (wettelijke verplichting)
        
        Door Gebruiker Gegenereerde Inhoud:
        - Gegevens die u creëert of uploadt tijdens het gebruik van de service
        - Applicatie-specifieke inhoud
        - Opgeslagen voorkeuren en configuraties
        Bewaartermijn: Gedurende actieve account levenscyclus + 30 dagen na verwijdering

        7. Contentmoderatie en DSA-naleving
        In overeenstemming met de Digital Services Act (DSA):

        Contentmoderatie:
        - Duidelijk beleid over verboden content
        - Transparant besluitvormingsproces
        - Beroepsmogelijkheid voor contentbeslissingen
        - Regelmatige rapportage over contentmoderatie-activiteiten

        Melding en Actie:
        - Duidelijke procedure voor het melden van illegale content
        - Tijdige verwerking van meldingen (binnen 24 uur voor ernstige overtredingen)
        - Gedetailleerde feedback over beslissingen over gemelde content

        Transparantie:
        - Regelmatige publicatie van transparantierapporten
        - Duidelijke informatie over geautomatiseerde contentmoderatie
        - Documentatie van risicobeoordelingen en mitigatiemaatregelen

        8. Rechten inzake Gegevensbescherming
        Onder de AVG heeft u de volgende rechten:
        - Toegang tot uw persoonsgegevens
        - Correctie van onjuiste gegevens
        - Verzoek tot gegevensverwijdering (onderhevig aan wettelijke bewaartermijnen)
        - Export van uw gegevens in een overdraagbaar formaat
        - Bezwaar maken tegen bepaalde gegevensverwerking
        - Intrekken van toestemming voor optionele verwerking

        9. Vereisten voor Expliciete Toestemming
        Voordat u toegang krijgt tot de service, moet u expliciet instemmen met:
        - Het verzamelen van noodzakelijke accountgegevens
        - Verwerking van service gebruiksgegevens
        - Opslag van door gebruiker gegenereerde inhoud
        - Essentiële cookies en beveiligingsmaatregelen

        Deze toestemming wordt verkregen via:
        - Duidelijk selectievakje tijdens registratie
        - Expliciete erkenning van gegevensverwerking
        - Afzonderlijke toestemming voor optionele functies
        - Duidelijke privacymededelingen voor gegevensverzameling

        10. Aansprakelijkheidsbeperking
        Voor zover wettelijk toegestaan, ben ik niet aansprakelijk voor indirecte, incidentele, bijzondere, gevolgschade of punitieve schade.

        11. Beëindiging
        Ik behoud me het recht voor om naar eigen inzicht de toegang tot mijn diensten te beëindigen of op te schorten.

        12. Toepasselijk Recht en Toezicht
        - Deze voorwaarden worden beheerst door het Nederlands recht en de wetgeving van de Europese Unie
        - Voor gegevensbeschermingszaken is de toezichthoudende autoriteit:
          Autoriteit Persoonsgegevens
          Bezuidenhoutseweg 30
          2594 AV Den Haag
          Nederland
          https://autoriteitpersoonsgegevens.nl

        13. Wijzigingen in Voorwaarden
        Ik behoud me het recht voor deze voorwaarden op elk moment te wijzigen. Voortgezet gebruik van mijn diensten betekent acceptatie van de gewijzigde voorwaarden.

        14. Contact
        Voor vragen over deze voorwaarden of om uw rechten inzake gegevensbescherming uit te oefenen:
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
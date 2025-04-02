import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useConsent } from '../contexts/ConsentContext';
import { X, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

type ConsentType = 'essential' | 'functional' | 'analytics';

export function ConsentBanner() {
  const { language } = useLanguage();
  const { consents, updateConsents, hasConsented } = useConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [tempConsents, setTempConsents] = useState(consents);

  const handleAcceptAll = () => {
    updateConsents({
      essential: true,
      functional: true,
      analytics: true
    }, 'explicit_all');
  };

  const handleAcceptNecessary = () => {
    updateConsents({
      essential: true,
      functional: false,
      analytics: false
    }, 'explicit_necessary');
  };

  const handleCustomConsent = (type: ConsentType) => {
    setTempConsents(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const saveCustomConsents = () => {
    updateConsents(tempConsents, 'explicit_custom');
  };

  const content = {
    en: {
      title: 'Cookie Preferences',
      description: 'I use cookies and similar technologies to provide and improve my services. By clicking "Accept All", you consent to the use of all cookies. Click "Customize" to manage your preferences or "Accept Necessary" to only allow essential cookies.',
      essential: {
        title: 'Essential Cookies',
        description: 'Required for the website to function. These cookies are necessary for the website to work and cannot be disabled.'
      },
      functional: {
        title: 'Functional Cookies',
        description: 'Enable enhanced functionality and personalization. If you do not allow these cookies, some services may not work properly.'
      },
      analytics: {
        title: 'Analytics Cookies',
        description: 'Help me understand how visitors interact with my website by collecting and reporting information anonymously.'
      },
      buttons: {
        acceptAll: 'Accept All',
        acceptNecessary: 'Accept Necessary Only',
        customize: 'Customize',
        save: 'Save Preferences'
      },
      more: 'More Information',
      policy: 'Cookie Policy',
      rights: 'Your Rights',
      rightsText: 'You can change your cookie preferences at any time. For more information about cookies and your privacy rights, please see our',
      dataRetention: 'Your consent choices will be stored for 6 months. You can update them at any time.',
      withdrawal: 'You can withdraw your consent for non-essential cookies at any time through the cookie settings.'
    },
    nl: {
      title: 'Cookie Voorkeuren',
      description: 'Ik gebruik cookies en vergelijkbare technologieën om mijn diensten te leveren en te verbeteren. Door op "Alles Accepteren" te klikken, stemt u in met het gebruik van alle cookies. Klik op "Aanpassen" om uw voorkeuren te beheren of "Alleen Noodzakelijke" om alleen essentiële cookies toe te staan.',
      essential: {
        title: 'Essentiële Cookies',
        description: 'Vereist voor het functioneren van de website. Deze cookies zijn noodzakelijk voor het functioneren van de website en kunnen niet worden uitgeschakeld.'
      },
      functional: {
        title: 'Functionele Cookies',
        description: 'Maken verbeterde functionaliteit en personalisatie mogelijk. Als u deze cookies niet toestaat, werken sommige diensten mogelijk niet correct.'
      },
      analytics: {
        title: 'Analytische Cookies',
        description: 'Helpen me begrijpen hoe bezoekers met mijn website interacteren door anoniem informatie te verzamelen en te rapporteren.'
      },
      buttons: {
        acceptAll: 'Alles Accepteren',
        acceptNecessary: 'Alleen Noodzakelijke',
        customize: 'Aanpassen',
        save: 'Voorkeuren Opslaan'
      },
      more: 'Meer Informatie',
      policy: 'Cookiebeleid',
      rights: 'Uw Rechten',
      rightsText: 'U kunt uw cookievoorkeuren op elk moment wijzigen. Voor meer informatie over cookies en uw privacyrechten, zie ons',
      dataRetention: 'Uw toestemmingskeuzes worden 6 maanden bewaard. U kunt deze op elk moment bijwerken.',
      withdrawal: 'U kunt uw toestemming voor niet-essentiële cookies op elk moment intrekken via de cookie-instellingen.'
    }
  };

  if (hasConsented) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold">{content[language].title}</h3>
            {showDetails && (
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={24} />
              </button>
            )}
          </div>
          
          <p className="text-gray-600 mb-6">{content[language].description}</p>

          {showDetails ? (
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                <div>
                  <h4 className="font-medium">{content[language].essential.title}</h4>
                  <p className="text-sm text-gray-500">{content[language].essential.description}</p>
                </div>
                <input type="checkbox" checked disabled className="h-4 w-4" />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                <div>
                  <h4 className="font-medium">{content[language].functional.title}</h4>
                  <p className="text-sm text-gray-500">{content[language].functional.description}</p>
                </div>
                <input
                  type="checkbox"
                  checked={tempConsents.functional}
                  onChange={() => handleCustomConsent('functional')}
                  className="h-4 w-4"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                <div>
                  <h4 className="font-medium">{content[language].analytics.title}</h4>
                  <p className="text-sm text-gray-500">{content[language].analytics.description}</p>
                </div>
                <input
                  type="checkbox"
                  checked={tempConsents.analytics}
                  onChange={() => handleCustomConsent('analytics')}
                  className="h-4 w-4"
                />
              </div>

              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>{content[language].dataRetention}</p>
                <p>{content[language].withdrawal}</p>
                <p className="flex items-center gap-2">
                  <Info size={16} className="text-blue-600" />
                  {content[language].rightsText} <Link to="/terms" className="text-blue-600 hover:underline">{content[language].policy}</Link>.
                </p>
              </div>
            </div>
          ) : null}

          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            {!showDetails ? (
              <>
                <button
                  onClick={handleAcceptNecessary}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                >
                  {content[language].buttons.acceptNecessary}
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                >
                  {content[language].buttons.customize}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  {content[language].buttons.acceptAll}
                </button>
              </>
            ) : (
              <button
                onClick={saveCustomConsents}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                {content[language].buttons.save}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
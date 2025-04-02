import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface ConsentSettings {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  timestamp?: string;
  consentMethod?: string;
  consentVersion?: string;
  withdrawalInfo?: {
    timestamp: string;
    reason?: string;
  };
}

interface ConsentContextType {
  consents: ConsentSettings;
  updateConsents: (settings: ConsentSettings, method?: string) => void;
  withdrawConsent: (type: keyof ConsentSettings, reason?: string) => void;
  hasConsented: boolean;
  getConsentHistory: () => ConsentSettings[];
}

const CONSENT_VERSION = '1.0.0';
const CONSENT_COOKIE_NAME = 'userConsent';
const CONSENT_HISTORY_COOKIE_NAME = 'userConsentHistory';

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consents, setConsents] = useState<ConsentSettings>({
    essential: true,
    functional: false,
    analytics: false,
    consentVersion: CONSENT_VERSION
  });
  const [hasConsented, setHasConsented] = useState<boolean>(() => {
    const savedConsent = Cookies.get(CONSENT_COOKIE_NAME);
    return !!savedConsent;
  });

  useEffect(() => {
    const savedConsent = Cookies.get(CONSENT_COOKIE_NAME);
    if (savedConsent) {
      try {
        const parsedConsent = JSON.parse(savedConsent);
        setConsents(parsedConsent);
      } catch (error) {
        console.error('Error parsing consent cookie:', error);
        Cookies.remove(CONSENT_COOKIE_NAME);
        setHasConsented(false);
      }
    }
  }, []);

  const getConsentHistory = (): ConsentSettings[] => {
    const history = Cookies.get(CONSENT_HISTORY_COOKIE_NAME);
    return history ? JSON.parse(history) : [];
  };

  const updateConsentHistory = (newConsent: ConsentSettings) => {
    const history = getConsentHistory();
    history.push(newConsent);
    // Keep only last 10 consent changes
    const trimmedHistory = history.slice(-10);
    Cookies.set(CONSENT_HISTORY_COOKIE_NAME, JSON.stringify(trimmedHistory), { expires: 365 });
  };

  const updateConsents = (settings: ConsentSettings, method: string = 'explicit') => {
    const consentWithMetadata = {
      ...settings,
      timestamp: new Date().toISOString(),
      consentMethod: method,
      consentVersion: CONSENT_VERSION
    };
    
    // Store consent settings in a cookie that expires in 6 months
    Cookies.set(CONSENT_COOKIE_NAME, JSON.stringify(consentWithMetadata), { expires: 180 });
    updateConsentHistory(consentWithMetadata);
    setConsents(consentWithMetadata);
    setHasConsented(true);
  };

  const withdrawConsent = (type: keyof ConsentSettings, reason?: string) => {
    if (type === 'essential') {
      console.warn('Cannot withdraw consent for essential cookies');
      return;
    }

    const newConsents = {
      ...consents,
      [type]: false,
      withdrawalInfo: {
        timestamp: new Date().toISOString(),
        reason
      }
    };

    updateConsents(newConsents, 'withdrawal');
  };

  return (
    <ConsentContext.Provider value={{ 
      consents, 
      updateConsents, 
      withdrawConsent,
      hasConsented,
      getConsentHistory 
    }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
}
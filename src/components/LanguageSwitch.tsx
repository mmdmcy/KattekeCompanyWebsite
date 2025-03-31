import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'nl' : 'en')}
      className="text-white hover:text-blue-200 transition-colors"
    >
      {language === 'en' ? 'NL' : 'EN'}
    </button>
  );
}
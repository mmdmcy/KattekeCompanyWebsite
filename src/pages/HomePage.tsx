import React from 'react';
import { Code2, Smartphone, Cloud, Building2, ChevronRight, Globe, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-brand-orange/90 via-gray-900 to-brand-black">
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <img 
                src="/logo_transparent.png" 
                alt="Katteke Logo" 
                className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-200 mb-8 drop-shadow">
                {t('hero.subtitle')}
              </p>
              <a href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-brand-orange text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:scale-105 hover:shadow-lg">
                {t('hero.cta')} <ChevronRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-brand-black">{t('services.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-100">
              <Globe className="w-12 h-12 text-brand-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-brand-black">{t('services.web.title')}</h3>
              <p className="text-gray-600">{t('services.web.description')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-100">
              <Smartphone className="w-12 h-12 text-brand-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-brand-black">{t('services.mobile.title')}</h3>
              <p className="text-gray-600">{t('services.mobile.description')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-100">
              <Cloud className="w-12 h-12 text-brand-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-brand-black">{t('services.platforms.title')}</h3>
              <p className="text-gray-600">{t('services.platforms.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-brand-black">{t('expertise.title')}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                alt="Developer workspace" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start transform hover:scale-105 transition-transform p-6 bg-white rounded-lg shadow-lg">
                <Code2 className="w-8 h-8 text-brand-orange mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-black">{t('expertise.modern.title')}</h3>
                  <p className="text-gray-600">{t('expertise.modern.description')}</p>
                </div>
              </div>
              <div className="flex items-start transform hover:scale-105 transition-transform p-6 bg-white rounded-lg shadow-lg">
                <Building2 className="w-8 h-8 text-brand-orange mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-black">{t('expertise.quality.title')}</h3>
                  <p className="text-gray-600">{t('expertise.quality.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-brand-black">{t('contact.title')}</h2>
            <p className="text-gray-600 mb-8">{t('contact.description')}</p>
            <div className="flex justify-center items-center space-x-4">
              <a href="mailto:katteke@protonmail.com" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-orange/90 text-white rounded-lg font-semibold hover:from-brand-orange/90 hover:to-brand-orange transition-all hover:scale-105 hover:shadow-lg">
                <Mail className="mr-2" size={20} />
                {t('contact.button')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
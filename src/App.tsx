import React from 'react';
import { Code2, Smartphone, Cloud, Building2, ChevronRight, Globe, Mail } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import { LanguageSwitch } from './components/LanguageSwitch';

function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold">Katteke</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-white hover:text-blue-200">{t('nav.services')}</a>
              <a href="#expertise" className="text-white hover:text-blue-200">{t('nav.expertise')}</a>
              <a href="#contact" className="text-white hover:text-blue-200">{t('nav.contact')}</a>
              <LanguageSwitch />
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {t('hero.subtitle')}
            </p>
            <a href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              {t('hero.cta')} <ChevronRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">{t('services.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t('services.web.title')}</h3>
              <p className="text-gray-600">{t('services.web.description')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Smartphone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t('services.mobile.title')}</h3>
              <p className="text-gray-600">{t('services.mobile.description')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Cloud className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t('services.platforms.title')}</h3>
              <p className="text-gray-600">{t('services.platforms.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">{t('expertise.title')}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                alt="Developer workspace" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Code2 className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('expertise.modern.title')}</h3>
                  <p className="text-gray-600">{t('expertise.modern.description')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Building2 className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('expertise.quality.title')}</h3>
                  <p className="text-gray-600">{t('expertise.quality.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>
            <p className="text-gray-600 mb-8">{t('contact.description')}</p>
            <div className="flex justify-center items-center space-x-4">
              <a href="mailto:jelleth@proton.me" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                <Mail className="mr-2" size={20} />
                {t('contact.button')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">Katteke</div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Katteke. {t('footer.rights')}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
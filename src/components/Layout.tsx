import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitch } from './LanguageSwitch';
import { Menu, X, Instagram } from 'lucide-react';

export function Layout() {
  const { t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`${isHome ? 'bg-brand-black' : 'bg-brand-black'} py-4`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo_transparent.png" alt="Katteke Logo" className="h-8 w-8 md:h-10 md:w-10" />
              <span className="text-white text-xl md:text-2xl font-bold">Katteke</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-brand-orange transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {isHome ? (
                <>
                  <a href="#services" className="text-white hover:text-brand-orange transition-colors">{t('nav.services')}</a>
                  <a href="#expertise" className="text-white hover:text-brand-orange transition-colors">{t('nav.expertise')}</a>
                  <a href="#contact" className="text-white hover:text-brand-orange transition-colors">{t('nav.contact')}</a>
                </>
              ) : (
                <Link to="/" className="text-white hover:text-brand-orange transition-colors">
                  {t('nav.home')}
                </Link>
              )}
              <LanguageSwitch />
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 border-t border-gray-700 pt-4">
              {isHome ? (
                <>
                  <a
                    href="#services"
                    className="block text-white hover:text-brand-orange transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.services')}
                  </a>
                  <a
                    href="#expertise"
                    className="block text-white hover:text-brand-orange transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.expertise')}
                  </a>
                  <a
                    href="#contact"
                    className="block text-white hover:text-brand-orange transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.contact')}
                  </a>
                </>
              ) : (
                <Link
                  to="/"
                  className="block text-white hover:text-brand-orange transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.home')}
                </Link>
              )}
              <div className="pt-2">
                <LanguageSwitch />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.company.title')}</h3>
              <p className="text-gray-400 mb-2">{t('footer.company.description')}</p>
              <div className="flex space-x-4">
                <a 
                  href="https://x.com/Kattekke" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-orange hover:text-opacity-80"
                >
                  {t('footer.company.social')}
                </a>
                <a 
                  href="https://www.instagram.com/kattekee/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-orange hover:text-opacity-80 flex items-center"
                >
                  <Instagram size={20} className="mr-1" />
                  Instagram
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.legal.title')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                    {t('footer.legal.terms')}
                  </Link>
                </li>
                <li>
                  <Link to="/refunds" className="text-gray-400 hover:text-white transition-colors">
                    {t('footer.legal.refunds')}
                  </Link>
                </li>
                <li>
                  <Link to="/cancellation" className="text-gray-400 hover:text-white transition-colors">
                    {t('footer.legal.cancellation')}
                  </Link>
                </li>
                <li>
                  <Link to="/promotions" className="text-gray-400 hover:text-white transition-colors">
                    {t('footer.legal.promotions')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:katteke@protonmail.com" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t('footer.contact.email')}: katteke@protonmail.com
                  </a>
                </li>
                <li>
                  <a 
                    href="https://x.com/Kattekke" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    X: @Kattekke
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/kattekee/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Instagram: @kattekee
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Katteke. {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
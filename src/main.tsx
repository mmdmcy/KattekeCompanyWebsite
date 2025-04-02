import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { LanguageProvider } from './contexts/LanguageContext';
import { ConsentProvider } from './contexts/ConsentContext';
import { ConsentBanner } from './components/ConsentBanner';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <ConsentProvider>
          <App />
          <ConsentBanner />
        </ConsentProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
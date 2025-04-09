import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Terms from './pages/legal/terms';
import RefundPolicy from './pages/legal/refunds';
import CancellationPolicy from './pages/legal/cancellation';
import PromotionalTerms from './pages/legal/promotions';
import Portfolio from './pages/Portfolio';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="terms" element={<Terms />} />
        <Route path="refunds" element={<RefundPolicy />} />
        <Route path="cancellation" element={<CancellationPolicy />} />
        <Route path="promotions" element={<PromotionalTerms />} />
      </Route>
    </Routes>
  );
}

export default App;
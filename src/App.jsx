import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import SalesDashboard from './pages/SalesDashboard';
import MarketingDashboard from './pages/MarketingDashboard';
import FinanceDashboard from './pages/FinanceDashboard';
import OperationsDashboard from './pages/OperationsDashboard';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<LoginPage />} /> {/* Reusing Login for now */}

        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<SalesDashboard />} />
          <Route path="marketing" element={<MarketingDashboard />} />
          <Route path="finance" element={<FinanceDashboard />} />
          <Route path="operations" element={<OperationsDashboard />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

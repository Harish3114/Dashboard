import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import AssessmentPage from './pages/AssessmentPage';
import SecurityAnalysisPage from './pages/SecurityAnalysisPage';
import CyberKarmaGPTPage from './pages/CyberKarmaGPTPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AssessmentPage />} />
          <Route path="security-analysis" element={<SecurityAnalysisPage />} />
          <Route path="cyberkarma-gpt" element={<CyberKarmaGPTPage />} />
          <Route path="*" element={<Navigate to="/\" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
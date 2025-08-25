import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TelecomSolutions from './pages/TelecomSolutions';
import ManagedServices from './pages/ManagedServices';
import CyberSecurity from './pages/CyberSecurity';
import AIAndData from './pages/AIAndData';
import Collaboration from './pages/Collaboration';
import ITAssetManagement from './pages/ITAssetManagement';
import OilAndGas from './pages/OilAndGas';
import AudioVisual from './pages/AudioVisual';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/telecom" element={<TelecomSolutions />} />
        <Route path="/managed-services" element={<ManagedServices />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/ai-data" element={<AIAndData />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/itam" element={<ITAssetManagement />} />
        <Route path="/oil-gas" element={<OilAndGas />} />
        <Route path="/audio-visual" element={<AudioVisual />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

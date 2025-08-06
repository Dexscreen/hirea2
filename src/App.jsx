import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import IPhoneHacker from './pages/IPhoneHacker';
import WhatsAppHacker from './pages/WhatsAppHacker';
import FacebookHacker from './pages/FacebookHacker';
import InstagramHacker from './pages/InstagramHacker';
import SnapchatHacker from './pages/SnapchatHacker';
import PrivateInvestigator from './pages/PrivateInvestigator';
import PigButchering from './pages/PigButchering';
import PonziRecovery from './pages/PonziRecovery';
import EthicalHacker from './pages/EthicalHacker';
import MatrixRain from './components/MatrixRain';
import ChatWidget from './components/ChatWidget';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <MatrixRain />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hire-hacker-iphone" element={<IPhoneHacker />} />
            <Route path="/hire-hacker-whatsapp" element={<WhatsAppHacker />} />
            <Route path="/hire-hacker-facebook" element={<FacebookHacker />} />
            <Route path="/hire-hacker-instagram" element={<InstagramHacker />} />
            <Route path="/hire-hacker-snapchat" element={<SnapchatHacker />} />
            <Route path="/private-investigator" element={<PrivateInvestigator />} />
            <Route path="/pig-butchering-scam" element={<PigButchering />} />
            <Route path="/ponzi-scheme-recovery" element={<PonziRecovery />} />
            <Route path="/ethical-hacker-services" element={<EthicalHacker />} />
          </Routes>
        </AnimatePresence>
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
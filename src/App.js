import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Frame from './components/Frame';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

import './App.css';

function App() {
  useEffect(() => {
      document.title = 'Luxury Detailing';
  }, []);
  
  return (
    <div>
      <NavBar />,
      <Hero />
      <Services />
      <Frame />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
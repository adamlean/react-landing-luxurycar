import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar';
import Hero from './components/Hero';

import './App.css';

function App() {
  useEffect(() => {
      document.title = 'Luxury Detailing';
  }, []);
  
  return (
    <div>
      <NavBar />,
      <Hero />
    </div>
  );
}

export default App;
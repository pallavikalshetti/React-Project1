import React from 'react';
import UrlShortener from './components/UrlShortener';
import HeaderPage from './components/Header';
import Hero from './components/Hero';
import FooterSection from './components/FooterSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <main>
      <HeaderPage />
      <Hero/>
      <UrlShortener />
      <StatsSection/>
      <FooterSection/>
      <Footer/>
    </main>
  );
};

export default App;

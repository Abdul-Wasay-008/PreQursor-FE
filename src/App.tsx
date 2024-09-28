import React, { useEffect } from 'react';
import HomeNavBar from './components/HomeNavBar';
import HeroSection from './components/HeroSection';
import Games from './components/Games';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Contact from './components/Contact';
// carousel Setup
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Routing 
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// AOS Setup
import AOS from "aos";
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
    });
  }, []);

  return (
    <div className="App overflow-hidden">
      <HomeNavBar />
      <HeroSection />
      <Games />
      <HowItWorks />
      <About />
      <Contact />
    </div>
  );
}

export default App;


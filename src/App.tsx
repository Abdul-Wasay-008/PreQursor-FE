import React, { useEffect } from 'react';
import HomeNavBar from './components/HomeNavBar';
import HeroSection from './components/HeroSection';
// carousel Setup
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    <div className="App">
      <HomeNavBar />
      <HeroSection />
    </div>
  );
}

export default App;

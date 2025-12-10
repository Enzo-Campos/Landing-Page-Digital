import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Features from './components/Features';
import WhyUs from './components/WhyUs';
import Clients from './components/Clients';
import CTA from './components/CTA';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ExitPopup from './components/ExitPopup';
import WhatsApp from './components/FloatWPP';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Features />
        <WhyUs />
        <Clients />
        <CTA />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
      <ScrollToTop />
      <ExitPopup />
    </div>
  );
};

export default App;
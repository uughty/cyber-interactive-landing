import React, { useRef } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Philosophy from '../components/Philosophy';
import ValueProposition from '../components/ValueProposition';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  const aboutRef = useRef(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Philosophy />
      <ValueProposition />
      <Services />
      <WhyChooseUs />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

'use client';

import * as React from 'react';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import AccordionSection from './components/AccordionSection';
import FiveMinutesSection from './components/5MinuteSection';
import TestimonialsSection from './components/TestomonialSection';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', margin: '0', padding: '0' }}>
      <HeroSection />
      <MissionSection />
      <AccordionSection />
      <FiveMinutesSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;

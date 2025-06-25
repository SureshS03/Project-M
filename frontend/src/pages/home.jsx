import React from 'react';
import ResponsiveNavbar from '../components/responsivenavbar';
import Hero from '../components/hero';
import FeatureSection from '../components/featuresection';
import PopularEvents from '../components/popularevents';
import Registrationsuccess from '../pages/registractionsuccess';

export default function Home() {
  return (
    <>
      <ResponsiveNavbar />
      <Hero />
      <FeatureSection />
      <PopularEvents/>
      <Registrationsuccess />
    </>
  );
}

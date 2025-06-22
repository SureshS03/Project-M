import React from 'react';
import ResponsiveNavbar from '../components/responsivenavbar';
import Hero from '../components/hero';
import FeatureSection from '../components/featuresection';
import AnimatedClock from '../components/animatedclock';
import RankBoard from '../components/rankboard';

export default function Home() {
  return (
    <>
      <ResponsiveNavbar />
      <Hero />
      <FeatureSection />
      <AnimatedClock />
      <RankBoard />
    </>
  );
}

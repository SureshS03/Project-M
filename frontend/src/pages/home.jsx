import React from 'react';
import ResponsiveNavbar from '../components/responsivenavbar';
import Hero from '../components/hero';
import FeatureSection from '../components/featuresection';
import RankBoard from '../components/rankboard';
import styles from './home.module.css'

export default function Home() {
  return (
    <>
      <ResponsiveNavbar />
      <Hero />
      <FeatureSection />
      <RankBoard />
    </>
  );
}

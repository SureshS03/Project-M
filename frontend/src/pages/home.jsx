import React from 'react';
import ResponsiveNavbar from '../components/responsivenavbar';
import Hero from '../components/hero';
import FeatureSection from '../components/featuresection';
import styles from './home.module.css'
import PopularEvents from '../components/popularevents';
import UpcomingEvents from '../components/upcomingevents';
import Categories from '../components/categories';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <ResponsiveNavbar />
      <Hero />
      <FeatureSection />
      <PopularEvents/>
      <UpcomingEvents/>
      <Categories/>
      <Footer/>
      
    </>
  );
}

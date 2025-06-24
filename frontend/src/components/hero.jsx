import React from 'react';
import styles from './hero.module.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/heroillustration.png'; // Make sure to place the image in src/assets/

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: '2rem' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>
            The event platform — Where consistency meets recognition.
          </h1>
          <p className={styles.subtitle}>
            Whether you're a student, organizer, or enthusiast — Project-M rewards consistent participation and helps you discover meaningful meetups.
          </p>
          <motion.button
            className={styles.cta}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleGetStarted}
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: '3rem' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={heroImage} alt="Hero Illustration" className={styles.heroImage} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

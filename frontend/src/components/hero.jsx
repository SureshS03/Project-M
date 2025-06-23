import React from 'react';
import styles from './hero.module.css'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <motion.div
      className={styles.content}
      initial={{opacity: 0, y: 40}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 0.8}}
      >
        <h1 className={styles.title}>Reimagine Your Events</h1>
        <p className={styles.subtitle}>
          QR check-ins. Live chat. Leaderboards. All in one elegant platform.
        </p>
        <motion.button
        className={styles.cta}
        whileHover={{ scale: 1.05}}
        whileTap={{ scale: 0.97}}
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>

  );
};

export default Hero;
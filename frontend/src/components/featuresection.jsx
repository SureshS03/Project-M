import React from 'react';
import styles from './featuresection.module.css';
import { motion } from 'framer-motion';

const features = [
  {
    title: "QR Attendance",
    description: "Quick check-in using unique user QR codes at events",
  },
  {
    title: "Ranking System",
    description: "Gain more respect among the community.",
  },
  {
    title: "Event Analytics",
    description: "Get real-time reports and attendee insights.",
  },
];

const FeatureSection = () => {
  return (
    <section className={styles.featureSection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Platform Features
      </motion.h2>

      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <motion.div
            className={styles.card}
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
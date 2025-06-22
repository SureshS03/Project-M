import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero-bg h-screen flex flex-col items-center justify-center text-white text-center px-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold leading-tight"
      >
        Engage. Track. Grow.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-4 text-lg md:text-2xl max-w-2xl"
      >
        A modern events platform with QR attendance, group chat, dynamic reports, and more.
      </motion.p>
      <motion.a
        href="#features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 inline-block px-8 py-4 bg-white text-primary font-semibold rounded-full shadow-lg hover:scale-105 transform transition"
      >
        Explore Features
      </motion.a>
    </section>
  );
}

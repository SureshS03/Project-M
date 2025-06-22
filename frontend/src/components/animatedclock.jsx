import React from 'react';
import { motion } from 'framer-motion';
import './animatedclock.css';

export default function AnimatedClock() {
  return (
    <div className="flex justify-center items-center py-16 bg-white">
      <motion.div
        className="clock"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
      >
        <div className="clock-face">
          <div className="hand hour"></div>
          <div className="hand minute"></div>
        </div>
      </motion.div>
    </div>
  );
}

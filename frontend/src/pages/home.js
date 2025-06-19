// src/pages/Home.js
import React from 'react';
import './home.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Welcome to <span className="gradient-text">Project-M</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
        >
          Your hub for events, collaboration, and user rankings.
        </motion.p>
        <a href="#features" className="scroll-down">↓ Scroll Down</a>
      </header>

      <section id="features" className="features-section">
        <motion.div 
          className="feature-card" 
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h2>Explore Events</h2>
          <p>Discover tailored events to suit your interests and join live sessions.</p>
        </motion.div>

        <motion.div 
          className="feature-card" 
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2>Live Group Chats</h2>
          <p>Communicate and collaborate instantly with your event peers.</p>
        </motion.div>

        <motion.div 
          className="feature-card" 
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2>Track Progress</h2>
          <p>Monitor your event participation and climb the ranking board.</p>
        </motion.div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2025 Project-M. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

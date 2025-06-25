import React from 'react';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.title}>Project-M</h3>
          <p className={styles.description}>
            Reimagining how you discover and join events.
          </p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subtitle}>Quick Links</h4>
          <ul className={styles.links}>
            <li><Link to="/" className={styles.link}>Home</Link></li>
            <li><Link to="/explore" className={styles.link}>Explore Events</Link></li>
            <li><Link to="/signup" className={styles.link}>Sign Up</Link></li>
            <li><Link to="/login" className={styles.link}>Login</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subtitle}>Legal</h4>
          <ul className={styles.links}>
            <li><Link to="/terms" className={styles.footerLink}>Terms & Conditions</Link></li>
            <li><Link to="/privacy" className={styles.footerLink}>Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} Project-M. All rights reserved.</p>
      </div>
    </footer>
  );
}

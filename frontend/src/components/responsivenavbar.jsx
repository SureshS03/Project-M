import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './responsivenavbar.module.css';

export default function ResponsiveNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock auth state
  const [showDropdown, setShowDropdown] = useState(false);
  const [profilePic, setProfilePic] = useState(null); // Placeholder for user-uploaded image
  const userName = 'User Name';
  const navigate = useNavigate();
  

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowDropdown(false);
    navigate('/');
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/login');
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
    navigate('/');
  };

  const getInitial = () => userName ? userName.charAt(0).toUpperCase() : '?';

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link to="/" className={styles.logo}>
          Project-M
        </Link>
        <Link to="/explore" className={styles.link}>
          Explore Events
        </Link>
      </div>

      <div className={styles.buttonGroup}>
        {!isLoggedIn ? (
          <>
            <button onClick={handleSignup} className={styles.signupButton}>
              Sign Up
            </button>
            <button onClick={handleLogin} className={styles.loginButton}>
              Login
            </button>
          </>
        ) : (
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className={styles.avatarButton}
            >
              {profilePic ? (
                <img src={profilePic} alt="Profile" className={styles.avatarImage} />
              ) : (
                <div className={styles.avatarInitial}>{getInitial()}</div>
              )}
              <span>{userName}</span>
            </button>
            {showDropdown && (
              <div className={styles.dropdown}>
                <Link to="/profile" className={styles.dropdownItem}>
                  Profile
                </Link>
                <button onClick={handleLogout} className={styles.dropdownItem}>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

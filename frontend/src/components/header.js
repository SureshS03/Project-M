import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <Link to="/">
          <img src="/logo.jpg" alt="Logo" className="logo-img" />
        </Link>
      </div>

      <nav className="header-center">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/about">About</Link>
        <Link to="/feedback">Feedback</Link>
      </nav>

      <div className="header-right">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </header>
  );
};

export default Header;

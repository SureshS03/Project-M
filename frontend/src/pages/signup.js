import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    // You can send this to backend using fetch/axios here
  };

  return (
    <div className="signup-container">
      <div className="signup-logo-section">
        <img src="/logo.jpg" alt="Logo" className="signup-logo" />
      </div>

      <div className="signup-form-section">
        <div className="signup-box">
          <h2>Welcome to Project-M</h2>
          <p>Please sign up to continue.</p>

          <label>Email</label>
          <input
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="signup-button" onClick={handleSignup}>
            Continue with Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

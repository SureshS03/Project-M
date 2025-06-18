import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
    navigate('/'); 
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src="/logo.png" alt="Logo" className="login-logo-img" />
      </div>

      <div className="login-form">
        <h2>Login to your account</h2>
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          placeholder="you@example.com"
        />

        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          placeholder="********"
        />

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>

        <p className="switch-auth">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

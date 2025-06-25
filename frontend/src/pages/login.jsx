import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import Logo from '../assets/logo512.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (userName.trim() === '') {
      setError('Username is required');
      return;
    }

    try {
      const res = await fetch('https://localhost/api/tokenlogin/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Something went wrong!');
      console.error(err);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLeft}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <div className={styles.welcomeTextContainer}>
          <h3 className={styles.welcomeText}>Welcome to Project-M</h3>
          <p className={styles.welcomeText}>Please login to continue</p>
        </div>
      </div>

      <div className={styles.loginRight}>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <h2>Login</h2>

          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

          <button type="submit">LogIn</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

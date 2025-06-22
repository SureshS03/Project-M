import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(res => {
        if (res.ok) navigate('/login');
        else throw new Error('Signup failed');
      })
      .catch(err => {
        console.error(err);
        alert('Signup error, please try again.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <label className="block mb-2">Email
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border p-2 rounded" required />
      </label>
      <label className="block mb-4">Password
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border p-2 rounded" required />
      </label>
      <button type="submit" className="w-full py-2 bg-secondary text-white rounded-lg">Register</button>
    </form>
  );
}

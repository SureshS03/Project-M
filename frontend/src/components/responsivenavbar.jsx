import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function ResponsiveNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-primary">Project-M</Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/profile" className="hover:text-primary">Profile</Link>
          <Link to="/explore" className="hover:text-primary">Explore</Link>
          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/login" className="hover:text-primary">Login</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>
          <Link to="/explore" onClick={() => setMenuOpen(false)} className="block">Explore</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block">About</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)} className="block">Login</Link>
        </div>
      )}
    </nav>
  );
}

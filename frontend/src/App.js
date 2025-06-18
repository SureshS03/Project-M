import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import ExploreEvents from './pages/explore';
import About from './pages/About';
import EventDetails from './pages/eventid';
import EventChat from './pages/Eventchat';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Feedback from './pages/Feedback';

function App() {
  return (
    <Router>
      <div>
        {/* Simple Navigation Bar */}
        <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/explore" style={{ marginRight: '10px' }}>Explore Events</Link>
          <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
          <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
          <Link to="/signup" style={{ marginRight: '10px' }}>Signup</Link>
          <Link to="/feedback" style={{ marginRight: '10px' }}>Feedback</Link>
          {/* EventChat will need a specific event ID to work correctly */}
        </nav>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreEvents />} />
          <Route path="/about" element={<About />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/event/:id/chat" element={<EventChat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

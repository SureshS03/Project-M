import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import EventDetails from './pages/eventdetail';
import Login from './pages/login';
import Signup from './pages/signup';
import Feedback from './pages/feedback';
import Navbar from './components/responsivenavbar';

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Explore from './pages/explore';
import About from './pages/about';
import EventDetail from './pages/eventdetail';
import Chat from './pages/chat';
import Login from './pages/login';
import Signup from './pages/signup';
import Profile from './pages/profile';
import Feedback from './pages/feedback';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/events/:id/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

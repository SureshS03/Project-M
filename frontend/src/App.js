import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ExploreEvents from './pages/explore';
import About from './pages/about';
import EventDetails from './pages/eventid';
import EventChat from './pages/eventchat';
import Login from './pages/login';
import Signup from './pages/signup';
import Feedback from './pages/feedback';
import Profile from './pages/profile';
import Header from './components/header';
import Loading from './components/loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreEvents />} />
        <Route path="/about" element={<About />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/event/:id/chat" element={<EventChat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

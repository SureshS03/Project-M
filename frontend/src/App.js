import React from 'react';
import { BrowserRouter as Router, Router, Route } from 'react-router-dom';
import Home from './pages/home';
import ExploreEvents from './pages/ExploreEvents';
import About from './pages/About';
import EventDetails from './pages/EventDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Feedback from '/pages/Feedback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/explore" element= {<ExploreEvents />} />
        <Route path="/about" element= {<About />} />
        <Route path="/event/:id" element= {<EventDetails />} />
        <Route path="/event/:id/chat" element= {<EventChat />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/signup" element= {<Signup />} />
        <Route path="/feedback" element= {<Feedback />} />
      </Routes>
    </Router>
    

  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chatbot from './pages/Chatbot';
import Translator from './pages/Translator';
import Faq from './pages/Faq';
import About from './pages/About';
import Header from './components/Header';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div>
        {/* Header component visible on all pages */}
        <Header />

        {/* Routing Logic */}
        <Routes>
          {/* Home page as default */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

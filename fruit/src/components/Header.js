import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <header>
      <h1>Fruit.ai</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/chatbot">Chatbot</Link>
        <Link to="/translator">Translator</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;

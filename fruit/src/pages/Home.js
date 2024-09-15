import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page-content">
      <h1>Welcome to Fruit.ai</h1>
      <p>Your personal fruit health manager.</p>
      <div>
        <Link to="/chatbot"><button>Chatbot</button></Link>
        <Link to="/translator"><button>Translator</button></Link>
        <Link to="/faq"><button>FAQ</button></Link>
        <Link to="/about"><button>About</button></Link>
      </div>
    </div>
  );
}

export default Home;

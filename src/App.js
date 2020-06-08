import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home Page using React.js
        </p>
        <a
          className="App-link"
          href="https://resume.thenabeelhassan.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit
        </a>
      </header>
    </div>
  );
}

export default App;

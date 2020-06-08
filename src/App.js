import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1
      className="col"
      >
        Nabeel Hassan
      </h1>
      <section
      id="links"
      className="col-lg-6 col-md-12 col-sm-12"
      >
        <section
        id="cv"
        className="col-6"
        >
          <div>
            <i 
            className="i fa fa-file col"
            >
            </i>
          </div>
          <div
          className="a"
          >
            <a
            href="https://resume.thenabeelhassan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="col"
            >
              curriculum vitae
            </a>
          </div>
        </section>
        <section
        id="portfolio"
        className="col-6"
        >
          <div>
            <i 
            className="i fa fa-briefcase col">
            </i>
          </div>
          <div
          className="a"
          >
            <a
            href="https://portfolio.thenabeelhassan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="col"
            >
              Portfolio
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;

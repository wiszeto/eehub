import React from 'react';
import './css/App.css';


import Cards from './components/test';
import About from './components/About';
import Footer from './components/footer';

function App() {
  return (
        <>
          <p id='smallpage'>page width is too small</p>
          <div id='page'>
              
              <div id='aboutsection'></div>
              <div id='section'>
                <About />
              </div>
              
              
              <div id='experiencesection'></div>
              <div id='section'>
              <h1 style={{ color: '#FFF', textAlign: 'center', fontSize: '56px' }}>Labs</h1>
                <Cards />
              </div>

              <div id='xperiencesection'></div>
              <div id='section'>
              <Footer />
              </div>

          </div>
        </>
  );
}

export default App;

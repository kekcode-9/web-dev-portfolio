import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from './components/About.js';
import Works from "./components/Works.js";
import Contact from "./components/Contact.js";

function AppBackup() {
  window.document.body.style.background = "url('images/bg-image-3.png') no-repeat center center fixed";
  window.document.body.style.backgroundSize = "cover";

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <div className='outer-div'>
          <div className='curvy'
          style={{animation: 'bobbing-cloud 3s ease infinite'}}>
          </div>
          <div className='menu'
          onClick={() => {setMenuOpen(!menuOpen)}}
          >
            menu
          </div>
        </div>
        <div className='menu-items'
        style={{display: (menuOpen) ? 'flex' : 'none'}}
        >
          <div id='about'
          style={{animation: (menuOpen) && 'menu-fade-in 0.3s ease forwards'}}
          ></div>
          <div id='projects'
          style={{animation: (menuOpen) && 'menu-fade-in 0.9s ease forwards'}}
          ></div>
          <div id='contact'
          style={{animation: (menuOpen) && 'menu-fade-in 1.5s ease forwards'}}
          ></div>
        </div>
        <Routes>
          <Route path='/about' element={ About }/>
          <Route path='/works' element={ Works }/>
          <Route path='/contact' element={ Contact }/>
        </Routes>
      </div>
    </Router>
  );
}

export default AppBackup;

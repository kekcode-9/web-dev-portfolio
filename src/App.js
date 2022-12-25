import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link, useLocation} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import './App.css';
import Home from "./components/Home";
import About from './components/About';
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  window.document.body.style.background = "url('/images/bg-image-2.png') no-repeat center center fixed";
  window.document.body.style.backgroundSize = "cover";
  
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={ <Home/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/works' element={ <Works/> }/>
          <Route path='/contact' element={ <Contact/> }/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

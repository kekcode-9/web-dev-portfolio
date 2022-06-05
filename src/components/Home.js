import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link, useLocation} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
        <motion.div
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = {{opacity: 0}}
        transition = {{duration: 0.5, delay: 0.2}}
        >
            <div className="home"
            >
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
                    <div>
                        <Link id='about' className="menu-link" to='/about'
                        style={{animation: (menuOpen) && 'menu-fade-in 0.3s ease forwards'}}
                        />
                    </div>
                    <div>
                        <Link id='projects' className="menu-link" to='/works'
                        style={{animation: (menuOpen) && 'menu-fade-in 0.9s ease forwards'}}
                        />
                    </div>
                    <div>
                        <Link id='contact' className="menu-link" to='/contact'
                        style={{animation: (menuOpen) && 'menu-fade-in 0.9s ease forwards'}}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
  }

  export default Home;
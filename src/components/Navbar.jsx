import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

      <motion.nav
      initial={{ x: -100, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ delay: 4.7, duration: 1, ease: "easeInOut" }} 
      style={{
        position: 'fixed',
        width: '100%',
        padding: '1rem 2rem',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(26, 26, 46, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        cursor: 'pointer'
      }}>
        <Link to="home" smooth={true} duration={500} className="nav-link">
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>AMRAJ KOONAR</h1>
        </Link>
        
        <div>
          <Link to="about" smooth={true} duration={500} className="nav-link">About</Link>
          <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
          <Link to="resume" smooth={true} duration={500} className="nav-link">Resume</Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link">Contact</Link>
        </div>
      </div>
    </motion.nav> 
  );
};

export default Navbar;
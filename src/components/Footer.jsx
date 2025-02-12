import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer style={{
      padding: '2rem',
      background: 'var(--primary-color)',
      textAlign: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#bbb'
    }}>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}
      >
        <Link to="home" smooth={true} duration={500} style={navLinkStyle}>Home</Link>
        <Link to="about" smooth={true} duration={500} style={navLinkStyle}>About</Link>
        <Link to="projects" smooth={true} duration={500} style={navLinkStyle}>Projects</Link>
        <Link to="resume" smooth={true} duration={500} style={navLinkStyle}>Resume</Link>
        <Link to="contact" smooth={true} duration={500} style={navLinkStyle}>Contact</Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ marginBottom: '1rem' }}
      >
        <a href="mailto:ask36@sfu.ca" style={contactLinkStyle}>Email</a> |
        <a href="https://linkedin.com/in/amraj-koonar" target="_blank" rel="noopener noreferrer" style={contactLinkStyle}> LinkedIn</a> |
        <a href="https://github.com/AmrajKoonar" target="_blank" rel="noopener noreferrer" style={contactLinkStyle}> GitHub</a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        © 2025 Amraj Koonar. All rights reserved.
      </motion.p>
    </footer>
  );
};

const navLinkStyle = {
  color: '#bbb',
  textDecoration: 'none',
  fontSize: '0.9rem',
  cursor: 'pointer'
};

const contactLinkStyle = {
  color: '#bbb',
  textDecoration: 'none',
  fontSize: '0.9rem',
  margin: '0 0.5rem'
};

export default Footer;

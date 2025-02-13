import React from 'react';
import { motion } from 'framer-motion';

import PythonIcon from '../assets/icons/Python Icon.svg';
import CppIcon from '../assets/icons/C++ Icon.svg';
import CIcon from '../assets/icons/C icon.svg';
import JavascriptIcon from '../assets/icons/javascript icon.svg';
import HtmlIcon from '../assets/icons/html icon.svg';
import CssIcon from '../assets/icons/css icon.svg';

import ReactIcon from '../assets/icons/React icon.svg';
import VSCodeIcon from '../assets/icons/vs code icon.svg';
import GithubIcon from '../assets/icons/github icon.svg';
import GitIcon from '../assets/icons/git icon.svg';
import FigmaIcon from '../assets/icons/figma icon.svg';
import neovimIcon from '../assets/icons/neovim_logo.png';

const TechIcon = ({ src, label, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, filter: 'brightness(1.2)', transition: { duration: 0.2 } }}
    whileTap={{ scale: 0.95 }}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit',
    }}
  >
    <img 
      src={src} 
      alt={label} 
      width="64" 
      height="64" 
    />
    <span style={{ 
      fontSize: '0.9rem', 
      opacity: 0.9, 
      fontWeight: '500' 
      }}>{label}</span>
  </motion.a>
);

const About = () => {
  return (
    <section id="about" style={{ 
      minHeight: '100vh', 
      padding: '6rem 2rem', 
      background: 'var(--gradient-bg)' 
      }}>
      <motion.div className="container"         
        initial={{ opacity: 0, y: 20 }}  
        transition={{ duration: 1  }}  
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
      
      
      <motion.div 
        style={{ 
          textAlign: 'center', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}
        initial={{ opacity: 0, y: 20 }}  
        transition={{ duration: 1  }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        >
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}  
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1  }}
            style={{
              fontSize: '3rem',
              marginBottom: '-1rem', 
              position: 'relative',
              display: 'inline-block' 
            }}
        >
            About me
        </motion.h2>

        
        <motion.div 
            initial={{ scaleX: 0, originX: 0 }} 
            whileInView={{ scaleX: 1 }} 
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }} 
            viewport={{ once: false }} 
            style={{
              height: '4px', 
              background: '#ffffff', 
              width: '22%', 
              marginTop: '5px', 
              transformOrigin: 'left' 
        }} 
    />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 1.4 }} 
        style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          fontSize: '1.1rem', 
          lineHeight: '1.8', 
          marginBottom: '4rem' }}>
          <p>
          I am a third-year Computer Science student at Simon Fraser University passionate about web development, software development, front-end design, and full-stack applications. I specialize in React, JavaScript, and Python, with experience in technologies such as Git, GitHub, and Visual Studio Code. I enjoy building interactive and scalable web solutions.
          </p>
          <p style={{ marginTop: '1rem' }}>
          Beyond technical skills, I thrive in team-oriented environments and enjoy problem-solving, mentoring, and collaborating on innovative ideas. I seek opportunities to apply my knowledge in internships, software development roles, or open-source contributions. I love exploring new technologies, optimizing code, and contributing to the tech community!
          </p>
        </motion.div>

        
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.05)', 
          borderRadius: '20px', padding: '2rem', 
          backdropFilter: 'blur(10px)', 
          maxWidth: '900px', 
          margin: '0 auto' 
          }}>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 2 }} 
            style={{ 
              fontSize: '1.5rem', 
              marginBottom: '2rem', 
              textAlign: 'center', 
              letterSpacing: '2px' 
            }}>
            LANGUAGES
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 2 }} 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2.5rem', 
              marginBottom: '3rem', 
              flexWrap: 'wrap' 
            }}>
            <TechIcon 
              label="Python" 
              src={PythonIcon} 
              link="https://www.python.org" 
            />
            <TechIcon 
              label="C++" 
              src={CppIcon} 
              link="https://isocpp.org" 
            />
            <TechIcon 
              label="C" 
              src={CIcon} 
              link="https://en.cppreference.com/w/c" 
            />
            <TechIcon 
              label="JavaScript" 
              src={JavascriptIcon} 
              link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
            />
            <TechIcon 
              label="HTML" 
              src={HtmlIcon} 
              link="https://developer.mozilla.org/en-US/docs/Web/HTML" 
            />
            <TechIcon 
              label="CSS" 
              src={CssIcon} 
              link="https://developer.mozilla.org/en-US/docs/Web/CSS" 
            />
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 2.2 }} 
            style={{ 
              fontSize: '1.5rem', 
              marginBottom: '2rem', 
              textAlign: 'center', 
              letterSpacing: '2px' 
            }}>
              FRAMEWORKS & DEVELOPER TOOLS
          </motion.h3>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 2.4 }} 
              style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '2.5rem', 
                flexWrap: 'wrap', 
                
              }}>
            <TechIcon 
              label="React" 
              src={ReactIcon} 
              link="https://reactjs.org" 
            />
            <TechIcon 
              label="VS Code" 
              src={VSCodeIcon} 
              link="https://code.visualstudio.com" 
            />
            <TechIcon 
              label="GitHub" 
              src={GithubIcon} 
              link="https://github.com" 
            />
            <TechIcon 
              label="Git" 
              src={GitIcon} 
              link="https://git-scm.com" 
            />
            <TechIcon 
              label="Figma" 
              src={FigmaIcon} 
              link="https://www.figma.com" 
            />
            <TechIcon 
              label="Neovim" 
              src={neovimIcon} 
              link="https://neovim.io/doc/" 
              
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

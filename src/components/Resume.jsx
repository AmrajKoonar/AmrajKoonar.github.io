import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section id="resume" style={{ padding: '6rem 2rem' }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
        }}>
        <h1 style={{ 
            fontSize: '2rem', 
            marginBottom: '1rem' 
            }}>My Resume
        </h1>

        <iframe
            src="/Amraj_Koonar_Resume.pdf" 
            width="65%"
            height="600px"
            style={{ 
                border: '1px solid #ddd', 
                borderRadius: '10px', 
                boxShadow: '0px 4px 10px rgba(255, 255, 255, 0.2)' 
            }}
        ></iframe>

        <motion.a
        href="/Amraj_Koonar_Resume.pdf"
        download="Amraj_Koonar_Resume.pdf"
        style={{
            marginTop: '1.5rem',
            padding: '0.8rem 1.5rem',
            fontSize: '1rem',
            background: 'rgb(61, 59, 59)',
            color: 'rgb(255, 255, 255)',
            textDecoration: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            transition: '0s',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)'
        }}
        whileHover={{ 
            backgroundColor: 'rgb(255, 255, 255)',
            color: 'rgb(0, 0, 0)',
            border: "2px solid #111",
            
            scale: 1.05, 
            filter: 'brightness(1.1)',
        }} 
        whileTap={{ scale: 0.95 }}
        >
        Download Resume
        </motion.a>
        </div>
    </section>
  );
};

export default Resume;

import React from 'react';

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
        
        <a
            href="/Amraj_Koonar_Resume.pdf"
            download="Amraj_Koonar_Resume.pdf"
            style={{
            marginTop: '1.5rem',
            padding: '0.8rem 1.5rem',
            fontSize: '1rem',
            background: '#7C3AED',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            transition: '0.3s',
            boxShadow: '0px 5px 15px rgba(124, 58, 237, 0.3)'
            }}
            onMouseOver={(e) => e.target.style.filter = 'brightness(1.1)'}
            onMouseOut={(e) => e.target.style.filter = 'brightness(1)'}
        >
            Download Resume
        </a>
        </div>
    </section>
  );
};

export default Resume;

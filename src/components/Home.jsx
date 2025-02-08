import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <section id="home" style={{
      background: 'var(--gradient-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>

        {/* ----------------------------- HOMEPAGE INFO ----------------------------------------------------------*/}
      <motion.div
        initial={{ opacity: 0, y: 20 }}  
        animate={{ opacity: 1, y: 0 }}    
        transition={{ duration: 0.8 }}
        className="container"
      >
        <h1 style={{
          fontSize: '4rem',
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
        <ReactTyped
        strings={["Hi, I'm Amraj Koonar."]}
        typeSpeed={50}
        backSpeed={30}
        loop={false}
        />
        </h1>
        <motion.p
          initial={{ opacity: 0 }}                        
          animate={{ opacity: 1 }}                        
          transition={{ delay: 2.2, duration: 1 }}        
          style={{
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}
        >
          Computer Science Student at SFU. Enthusiastic about software
          & web development, problem-solving, and creating innovative
          projects. Always eager to learn, build, and grow!
        </motion.p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>

            {/* ----------------------------- BUTTONS ----------------------------------------------------------*/}
            <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        delayChildren: 3.5,  
                        staggerChildren: 0.3,  // 0.3s delay between each button
                    },
                },
            }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
        >
        {["ABOUT", "PROJECTS", "RESUME", "CONTACT"].map((text, index) => (
            <motion.button
            key={index}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn"
            >
            {text}
            </motion.button>
        ))}
        </motion.div>


          

        </div>
      </motion.div>
    </section>
  );
};

export default Home;
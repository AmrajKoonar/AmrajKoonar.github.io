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
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }} >

          <motion.div
          initial={{ opacity: 0 }}                        
          animate={{ opacity: 1 }}                        
          transition={{ delay: 3.5, duration: 1 }}     
          style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center' 
          }}
        > 
        {["ABOUT", "PROJECTS", "RESUME", "CONTACT"].map((text, index) => (
          <Link 
            key={index} 
            to={text.toLowerCase()}
            smooth={true} 
            duration={500} 
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn"
            >
              {text}
            </motion.button>
          </Link>
        ))}

        </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Home;
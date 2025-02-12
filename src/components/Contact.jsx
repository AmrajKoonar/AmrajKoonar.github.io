import React from 'react';
import { motion } from 'framer-motion';
import githubIMG from '../assets/social_imgs/github_icon.svg';
import linkedinIMG from '../assets/social_imgs/LinkedIn_icon.svg';

const Contact = () => {
  const socials = [
    {
      name: 'GitHub',
      src: githubIMG,
      link: 'https://github.com/AmrajKoonar'
    },
    {
      name: 'LinkedIn',
      src: linkedinIMG,
      link: 'https://www.linkedin.com/in/amraj-koonar/'
    }
  ];

  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh',
        padding: '6rem 2rem',
        background: 'var(--gradient-bg)'
      }}
    >
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: '3rem',
            marginBottom: '3rem',
            textAlign: 'center'
          }}
        >
          Contact me!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            fontSize: '1.1rem',
            lineHeight: '1.8'
          }}
        >
          I'm always interested in hearing about new opportunities, collaborations,
          or just having a chat about technology and development. Feel free to reach
          out through any of the platforms below!
        </motion.p>

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center',
            gap: '1rem',
            marginTop: '2rem'
          }}
        >
          
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '3rem'
            }}
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, filter: 'brightness(1.2)' }}
                whileTap={{ scale: 0.9 }}
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <img
                  src={social.src}
                  alt={social.name}
                  width="64"
                  height="64"
                  style={{
                    padding: '8px'
                  }}
                />
                <span
                  style={{
                    fontSize: '1rem',
                    color: 'white',
                    fontWeight: 'bold',
                    opacity: 0.8
                  }}
                >
                  {social.name}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Buttons (Email & Resume) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1rem'
            }}
          >
            {[
              { text: 'EMAIL', link: 'mailto:ask36@sfu.ca' },
              { text: 'RESUME', link: '#' } 
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  boxShadow: '0px 5px 5px rgb(0, 0, 0)', 
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  textAlign: 'center',
                  minWidth: '100px'
                }}
              >
                {item.text}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

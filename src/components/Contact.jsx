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
    // {
    //   name: 'Email',
    //   src: emailIMG,
    //   link: 'mailto:ask36@sfu.ca'
    // },
    // {
    //   name: 'Resume',
    //   src: resumeIMG,
    //   link: '#' // Update this with your resume link
    // }
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

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginTop: '2rem'
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
                style={{ borderRadius: '0%' }}
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

        

        

        <motion.div
        initial={{ opacity: 0 }}                        
        animate={{ opacity: 1 }}                        
        transition={{ duration: 1 }}     
        style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center' 
        }}
        > 
        
        {["EMAIL", "RESUME", ].map((text, index) => (
            <motion.button
            key={index}

            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn"
            >
            {text}
            </motion.button>
        ))}
        </motion.div>
        </motion.div>
        

      </motion.div>
    </section>
  );
};

export default Contact;

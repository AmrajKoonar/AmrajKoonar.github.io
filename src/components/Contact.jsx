import React from 'react';
import { motion } from 'framer-motion';
import githubIMG from '../assets/social_imgs/github_icon.svg';
import linkedinIMG from '../assets/social_imgs/LinkedIn_icon.svg';
import emailIMG from '../assets/social_imgs/email_logo.png';
import resumeIMG from '../assets/social_imgs/resume_icon.png';

const Contact = () => {

    const socials = [
    {
        name: 'GitHub',
        src: githubIMG,
        link: 'https://github.com/AmrajKoonar'
    },
    {
        name: 'LinkedIN',
        src: linkedinIMG,
        link: 'https://www.linkedin.com/in/amraj-koonar/'
    },
    {
        name: 'Email',
        src: emailIMG,
        link: 'mailto:ask36@sfu.ca'
    },
    {
        name: 'Resume',
        src: resumeIMG,
        link: '#'
    }
    ];

  return (
    <section id="contact" style={{
      minHeight: '100vh',
      padding: '6rem 2rem',
      background: 'var(--gradient-bg)'
    }}>
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

        



      </motion.div>
    </section>
  );
};

export default Contact;
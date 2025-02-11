import React from 'react';
import { motion } from 'framer-motion';
import laptopImg from '../assets/project_imgs/modern-laptop-mockup-with-airpods.png';
import twitterIMG from '../assets/project_imgs/hand-holding-phone-mockup.png';
import shellIMG from '../assets/project_imgs/notebook-mockup-on-desk.png';

const Projects = () => {
  const projects = [
    {
      title: 'Sports Trivia Website',
      src: laptopImg,
      description: 'Developed a React-based trivia game with animated UI, featuring NFL, NBA, MLB, and EPL questions.',
      tech1: "React",
      tech2: "JavaScript",
      tech3: "BallDontLie API",
      link: 'https://github.com/AmrajKoonar/sports-trivia-website'
    },
    {
      title: 'SFU Weather Update Bot',
      src: twitterIMG,
      description: 'Created a Python Twitter bot that scrapes and posts real-time SFU weather and road updates.',
      tech1: "Python",
      tech2: "BeautifulSoup API",
      tech3: "Twitter API",
      link: 'https://github.com/AmrajKoonar/SFU-weather-twitter-bot'
    },
    {
      title: 'Shell Implementation',
      src: shellIMG,
      description: 'Built a Unix shell in C with process execution, internal commands, history recall, and SIGINT handling.',
      tech1: "C",
      tech2: "Neovim",
      tech3: "Linux",
      link: '#'
    }
  ];

  return (
    <section id="projects" style={{
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
          Featured Projects
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          padding: '1rem'
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1}}
              viewport={{ once: false }}

              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                overflow: 'hidden', 
                boxShadow: '0px 5px 15px rgba(255, 255, 255, 0.3)', 
                transition: 'transform 0.3s ease-in-out, box-shadow 0.1s ease-in-out',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              whileHover={{
                y: -15,
                boxShadow: '0px 10px 25px rgba(225, 121, 252, 0.8)',
                scale: 1.030,
                transition: { duration: 0.1 }
              }}
            >
              {/* Image Container */}
              <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
                <img
                  src={project.src}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover' 
                  }}
                />
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.5rem',
                margin: '1rem 0',
                padding: '0 1rem',
                textAlign: 'center'
              }}>
                {project.title}
              </h3>

              {/* Tech Tags */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                paddingBottom: '0.5rem'
                
              }}>
                <span style={{
                  background: '#6c63ff',
                  color: '#fff',
                  padding: '0.4rem 0.7rem',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  {project.tech1}
                </span>
                <span style={{
                  background: '#ff6b6b',
                  color: '#fff',
                  padding: '0.4rem 0.7rem',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  {project.tech2}
                </span>
                <span style={{
                  background: '#ffbd69',
                  color: '#fff',
                  padding: '0.4rem 0.7rem',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  {project.tech3}
                </span>
              </div>

              {/* Description */}
              <p style={{
                marginBottom: '1.5rem',
                padding: '0 1.5rem',
                textAlign: 'center',
                flex: 1
              }}>
                {project.description}
              </p>

              {/* Button */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  width: '80%',
                  margin: '0 auto 1.5rem',
                  padding: '0.8rem 1rem',
                  background: '#6c63ff',
                  color: '#fff',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  transition: 'background 0.3s ease-in-out'
                }}
              >
                VIEW GITHUB
              </motion.a>

            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

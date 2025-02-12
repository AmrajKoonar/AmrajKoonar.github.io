import React from 'react';
import { motion } from 'framer-motion';
import SFUimg from '../assets/sfu_banner.jpg';

const Courses = () => {
  const courses = [
    {
      class: 'CMPT 225',
      src: SFUimg,
      description: 'Data Structures and Programming',
      tag1: 'Algorithms',
      tag2: 'Data Structures',
      tag3: 'OOP',
      link: 'https://www.sfu.ca/outlines.html?2024/fall/cmpt/225/d100'
    },
    {
      class: 'MACM 201',
      src: SFUimg,
      description: 'Discrete Mathematics II',
      tag1: 'Graph Theory',
      tag2: 'Trees',
      tag3: 'Recurrence Relations',
      link: 'https://www.sfu.ca/outlines.html?2024/spring/macm/201/d100'
    },
    {
      class: 'CMPT 276',
      src: SFUimg,
      description: 'Intro Software Engineering',
      tag1: 'Git',
      tag2: 'Design Patterns',
      tag3: 'SDLC',
      link: 'https://www.sfu.ca/outlines.html?2025/spring/cmpt/276/d100'
    },
    {
      class: 'CMPT 201',
      src: SFUimg,
      description: 'Systems Programming',
      tag1: 'Memory',
      tag2: 'Debugging',
      tag3: 'Multithreading',
      link: 'https://www.sfu.ca/outlines.html?2025/spring/cmpt/201/d200'
    },
    {
      class: 'MATH 232',
      src: SFUimg,
      description: 'Applied Linear Algebra',
      tag1: 'Matrices',
      tag2: 'Eigenvalues',
      tag3: 'Vectors',
      link: 'http://www.sfu.ca/outlines.html?2023/fall/math/232/d100'
    },
    {
      class: 'STAT 270',
      src: SFUimg,
      description: 'Probability and Statistics',
      tag1: 'Data Analysis',
      tag2: 'Probability',
      tag3: 'Hypothesis Tests',
      link: 'https://www.sfu.ca/outlines.html?2024/summer/stat/270/ol01'
    }
  ];

  return (
    <section id="courses" style={{
      minHeight: '100vh',
      padding: '6rem 2rem',
      background: 'var(--gradient-bg)'
    }}>
    <motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            style={{
                fontSize: '3rem',
                marginBottom: '3rem',
                textAlign: 'center'
            }}
        >
          Relevant Academic Work
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          padding: '1rem'
        }}>
          {courses.map((courses, index) => (
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
                boxShadow: '0px 10px 25px rgb(231, 66, 66)',
                scale: 1.030,
                transition: { duration: 0.1 }
              }}
            >
              {/* Image Container */}
              <div style={{ width: '100%', height: '110px', overflow: 'hidden' }}>
                <img
                  src={courses.src}
                  alt={courses.class}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover' 
                  }}
                />
              </div>

              {/* class */}
              <h3 style={{
                fontSize: '1.3rem',
                margin: '1rem 0',
                padding: '0 1rem',
                textAlign: 'center'
              }}>
                {courses.class}
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
                  fontSize: '0.7rem',
                  fontWeight: 'bold',
                  height: '1.8rem'
                }}>
                  {courses.tag1}
                </span>
                <span style={{
                  background: '#ff6b6b',
                  color: '#fff',
                  padding: '0.4rem 0.7rem',
                  borderRadius: '10px',
                  fontSize: '0.7rem',
                  fontWeight: 'bold',
                  height: '1.8rem'
                }}>
                  {courses.tag2}
                </span>
                <span style={{
                  background: '#ffbd69',
                  color: '#fff',
                  padding: '0.4rem 0.7rem',
                  borderRadius: '10px',
                  fontSize: '0.7rem',
                  fontWeight: 'bold',
                  height: '1.8rem'
                }}>
                  {courses.tag3}
                </span>
              </div>

              {/* Description */}
              <p style={{
                marginBottom: '1.5rem',
                padding: '0 1.5rem',
                textAlign: 'center',
                flex: 1
              }}>
                {courses.description}
              </p>

              {/* Button */}
              <motion.a
                href={courses.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                    scale: 1.05,
                    background: 'rgb(231, 127, 127)',
                    color: 'rgb(0, 0, 0)'
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  width: '60%',
                  margin: '0 auto 1.5rem',
                  padding: '0.8rem 1rem',
                  background: 'rgb(207, 56, 56)',
                  color: '#fff',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  transition: '0s',
                  fontSize: '0.9rem'
                }}
              >
                VIEW COURSE OUTLINE
              </motion.a>

            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Courses;
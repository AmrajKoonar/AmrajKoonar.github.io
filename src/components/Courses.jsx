import React from 'react';

const Courses = () => {
  const courses = [
    {
      code: 'CMPT 225',
      name: 'Data Structures and Programming',
      link: 'https://www.sfu.ca/outlines.html?2024/fall/cmpt/225/d100'
    },
    {
      code: 'MACM 201',
      name: 'Discrete Mathematics II',
      link: 'https://www.sfu.ca/outlines.html?2024/spring/macm/201/d100'
    },
    {
      code: 'CMPT 276',
      name: 'Intro Software Engineering',
      link: 'https://www.sfu.ca/outlines.html?2025/spring/cmpt/276/d100'
    },
    {
      code: 'CMPT 201',
      name: 'Systems Programming',
      link: 'https://www.sfu.ca/outlines.html?2025/spring/cmpt/201/d200'
    },
    {
      code: 'MATH 232',
      name: 'Applied Linear Algebra',
      link: 'http://www.sfu.ca/outlines.html?2023/fall/math/232/d100'
    },
    {
      code: 'STAT 270',
      name: 'Probability and Statistics',
      link: 'https://www.sfu.ca/outlines.html?2024/summer/stat/270/ol01'
    }
  ];

  return (
    <section id="courses" style={{
      minHeight: '100vh',
      padding: '6rem 2rem',
      background: 'var(--gradient-bg)'
    }}>
    </section>
  );
};

export default Courses;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <Navbar /> 

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Projects />
            <Courses />
            <Contact />
          </>
        } />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;

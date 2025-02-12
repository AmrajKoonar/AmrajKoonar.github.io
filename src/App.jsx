import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Courses />
      <Resume /> 
      <Contact />
      <Footer />
    </>
  );
}

export default App;

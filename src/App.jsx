import { useEffect, useState } from 'react'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Navbar from './components/Navbar'
import initializeIntersectionObserver from './utils/intersectionObserver'

import './index.css'

function App() {
  const [theme, setTheme] = useState('light'); // Default to light theme

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    initializeIntersectionObserver();

    // Scroll to Top Button Logic
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
      const handleScroll = () => {
        if (window.scrollY > 200) { // Show button after scrolling down 200px
          scrollToTopBtn.classList.add('show');
        } else {
          scrollToTopBtn.classList.remove('show');
        }
      };

      const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
      };

      window.addEventListener('scroll', handleScroll);
      scrollToTopBtn.addEventListener('click', handleClick);

      // Cleanup event listeners on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
        scrollToTopBtn.removeEventListener('click', handleClick);
      };
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <div className="section-divider"></div>
      <Contact />
      <button id="scrollToTopBtn" title="Go to top"><i className="fas fa-arrow-up"></i></button>
    </>
  )
}

export default App 
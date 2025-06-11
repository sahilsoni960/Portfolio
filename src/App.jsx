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
    </>
  )
}

export default App 
import React from 'react';
import './Navbar.css';

const SunIconSVG = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="6" fill="#FFC107"/>
<path d="M12 2V4" stroke="#FFC107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20V22" stroke="#FFC107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12H2" stroke="#FFC107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12H20" stroke="#FFC107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.34 6.34L4.93 4.93" stroke="#FFC107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.07 19.07L17.66 17.66" stroke="#FFC107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.66 6.34L19.07 4.93" stroke="#FFC107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.93 19.07L6.34 17.66" stroke="#FFC107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const MoonIconSVG = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

function Navbar({ toggleTheme, currentTheme }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#about">About</a></li>
        <li className="navbar-item"><a href="#skills">Skills</a></li>
        <li className="navbar-item"><a href="#projects">Projects</a></li>
        <li className="navbar-item"><a href="#contact">Contact</a></li>
      </ul>
      <button onClick={toggleTheme} className={`theme-toggle ${currentTheme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <div className="toggle-track">
          <div className="toggle-thumb">
            <div
              className="theme-icon"
              dangerouslySetInnerHTML={{ __html: currentTheme === 'dark' ? SunIconSVG : MoonIconSVG }}
            />
          </div>
        </div>
      </button>
    </nav>
  );
}

export default Navbar; 
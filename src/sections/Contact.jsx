import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <h3>Reach Out to me!</h3>
      <div className="social-links">
        <a href="mailto:sahilsoni960@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/email.svg" alt="Gmail Icon" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/sahil--soni/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.svg" alt="LinkedIn Icon" className="social-icon" />
        </a>
        <a href="https://github.com/sahilsoni960" target="_blank" rel="noopener noreferrer">
          <img src="/icons/git.svg" alt="GitHub Icon" className="social-icon" />
        </a>
      </div>
    </section>
  );
}

export default Contact; 
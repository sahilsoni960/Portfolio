import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <img src="/ssonidp.jpeg" alt="Sahil Soni" className="profile-pic" />
      <div className="left-content-area">
        <div className="home-text-content">
          <h1>Sahil Soni</h1>
          <h3>SENIOR SOFTWARE ENGINEER | AUTOMATION ENGINEER</h3>
          <p>
            With strong expertise in Java programming, Spring Boot microservices, CI/CD, and
            Quality Assurance, I bring a hybrid skillset that bridges development, system reliability,
            and infrastructure.
          </p>
        </div>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Home; 
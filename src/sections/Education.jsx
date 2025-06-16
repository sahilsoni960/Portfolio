import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-entry">
        <img src="/Chitkara_University.png" alt="Chitkara University" className="university-logo" />
        <div className="education-details">
          <h3>Chitkara University</h3>
          <p>B.E. in Computer Science | 2011 - 2015</p>
          <p>CGPA: 8.15</p>
        </div>
      </div>
    </section>
  );
}

export default Education; 
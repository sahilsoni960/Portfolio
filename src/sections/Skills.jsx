import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills & Technologies</h2>
      <div className="skills-container">
        <div className="skills-category">
          <h3>Programming Languages</h3>
          <ul>
            <li><img src="/icons/java.svg" alt="Java icon" />Java</li>
            <li><img src="/icons/typescript.svg" alt="TypeScript icon" />TypeScript</li>
            <li><img src="/icons/javascript.svg" alt="JavaScript icon" />JavaScript</li>
            <li><img src="/icons/c-cpp.svg" alt="C/C++ icon" />C/C++</li>
            <li><img src="/icons/bash.svg" alt="Bash icon" />Bash</li>
            <li><img src="/icons/sql.svg" alt="SQL icon" />SQL</li>
            <li><img src="/icons/unix.svg" alt="Unix icon" />Unix</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>Frameworks & Libraries</h3>
          <ul>
            <li><img src="/icons/spring-boot.svg" alt="Spring Boot icon" />Spring Boot</li>
            <li><img src="/icons/restful-apis.svg" alt="RESTful APIs icon" />RESTful APIs</li>
            <li><img src="/icons/selenium.svg" alt="Selenium icon" />Selenium</li>
            <li><img src="/icons/playwright.svg" alt="Playwright icon" />Playwright</li>
            <li><img src="/icons/cypress.svg" alt="Cypress icon" />Cypress</li>
            <li><img src="/icons/bdd.svg" alt="BDD icon" />BDD Cucumber</li>
            <li><img src="/icons/rest-assured.svg" alt="Rest Assured icon" />Rest Assured</li>
            <li><img src="/icons/maven.svg" alt="Maven icon" />Maven</li>
            <li><img src="/icons/junit.svg" alt="JUnit icon" />JUnit</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>Tools</h3>
          <ul>
            <li><img src="/icons/jenkins.svg" alt="Jenkins icon" />Jenkins</li>
            <li><img src="/icons/mongodb.svg" alt="MongoDB icon" />MongoDB</li>
            <li><img src="/icons/grafana.svg" alt="Grafana icon" />Grafana</li>
            <li><img src="/icons/prometheus.svg" alt="Prometheus icon" />Prometheus</li>
            <li><img src="/icons/git.svg" alt="GIT icon" />GIT</li>
            <li><img src="/icons/jira.svg" alt="JIRA icon" />JIRA</li>
            <li><img src="/icons/docker.svg" alt="Docker icon" />Docker</li>
            <li><img src="/icons/postman.svg" alt="Postman icon" />Postman</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills; 
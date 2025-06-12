import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <h3>Automation Framework For Rest Api Services</h3>
      <ul>
        <li>Developed Framework using Newman and Jenkins tool for running API Regression Tests</li>
        <li>Used Newman HTML Reporter for Reporting Mechanism and Jenkins for deploying new MDM builds and running multiple iterations of API Tests suites</li>
        <li>Utilized scripting languages like Batch, Bash, PowerShell, Python, JavaScript to automate test execution and reporting mechanisms</li>
      </ul>
      <h3>Selenium Automation Framework For Enterprise Applications</h3>
      <ul>
        <li>Developed robust Selenium Framework for automated testing of MDM Entity360 UI and Customer360 UI</li>
        <li>This Framework is based on Page Object Model and includes Sanity Tests and Regression Tests for testing MDM Solutions UI Screens</li>
      </ul>
      <h3>Tqm Dashboard</h3>
      <ul>
        <li>Lead the project to develop Total Quality Management - a dashboard created to track standardization for Product Releases using React, Springboot and MongoDB</li>
        <li>The Dashboard allows to score different phases of release like Planning, Execution and Delivery, while ensuring Quality Assurance by tracking the quality of different Releases</li>
      </ul>
      <h3>Build Certification</h3>
      <ul>
        <li>Initiated the project for Certification of Builds on daily basis</li>
        <li>Worked on Design and Planning of Framework structure to handle parallel certification of different PAM combinations supported by MDM Solution</li>
        <li>Leveraged Jenkins Pipelines and Ant scripts for parallel deployment of builds, validating API and UI tests across various databases, and generate test reports for sanity of builds</li>
      </ul>
      <h3>RFT Automation</h3>
      <ul>
        <li>Automation using IBM RFT (Rational Functional Testing), Designed Framework for RFT Acceptance Testing based on Java to test Hub Console (Swing Based Application)</li>
        <li>Developed Regression and Functional Tests which involved extensive scripting for test cases</li>
      </ul>
    </section>
  );
}

export default Projects; 
import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <h3>AUTOMATION FRAMEWORK FOR MDM REST API SERVICES</h3>
      <ul>
        <li>Developed Framework using Newman and Jenkins tool for running API Regression Tests.</li>
        <li>Used Newman HTML Reporter for Reporting Mechanism and Jenkins for deploying new MDM builds and running multiple iterations of API Tests suites.</li>
        <li>Utilized scripting languages like Batch, Bash, PowerShell, Python, JavaScript to automate test execution and reporting mechanisms.</li>
      </ul>
      <h3>SELENIUM AUTOMATION FRAMEWORK FOR MDM UI TESTS</h3>
      <ul>
        <li>Developed robust Selenium Framework for automated testing of MDM Entity360 UI and Customer360 UI.</li>
        <li>This Framework is based on Page Object Model and includes Sanity Tests and Regression Tests for testing MDM Solutions UI Screens which include Elastic Search, Query Search, Tasks, History, Cross-Reference and Business Entity Screens.</li>
      </ul>
      <h3>TQM DASHBOARD</h3>
      <ul>
        <li>Lead the project to develop Total Quality Management - a dashboard created to track standardization for MDM Releases using React, Springboot and MongoDB.</li>
        <li>The Dashboard allows to score different phases of release like Planning, Execution and Delivery, while ensuring Quality Assurance by tracking the quality of different MDM Releases.</li>
      </ul>
      <h3>BUILD CERTIFICATION</h3>
      <ul>
        <li>Initiated the project for Certification of Builds on daily basis.</li>
        <li>Worked on Design and Planning of Framework structure to handle parallel certification of different PAM combinations supported by MDM Solution.</li>
        <li>Used Jenkins Pipelines and ant scripts for parallel deployment of new builds and certify running API and UI Tests across different databases, and generating reports to test sanity of builds.</li>
      </ul>
      <h3>RFT AUTOMATION</h3>
      <ul>
        <li>Automation using IBM RFT (Rational Functional Testing), Designed Framework for RFT Acceptance Testing based on Java to test Hub Console (Swing Based MDM Application).</li>
        <li>Developed Regression and Functional Tests which involved extensive scripting for test cases.</li>
      </ul>
    </section>
  );
}

export default Projects; 
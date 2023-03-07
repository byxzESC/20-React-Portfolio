import React from "react";

export default function Resume() {
  return (
    <div id="resume">
      <h3 className="title">Resume</h3>

      {/* downloadable resume but it is empty */}
      <a href="./resume/resumeSample.txt" download>
        Download my resume
      </a>
      <div className="skills">
        <ul>Front-end Proficiencies</ul>
        <li>HTML</li>
        <li>CSS, Bootstrap, Tailwind</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive design</li>
        <li>React</li>
        <ul>Back-end Proficiencies</ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>Rest</li>
        <li>GraphQL</li>
      </div>
    </div>
  );
}

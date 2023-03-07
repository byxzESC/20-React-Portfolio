import React from "react";
import RenderProject from "../Project";

export default function Portfolio() {
  const projects = [
    {
      name: "Event Planner",
      image: "./images/eventPlanner.JPG",
      deployLink: "https://byxzesc.github.io/01-GroupProject-EventPlanner/",
      gitLink: "https://github.com/byxzESC/01-GroupProject-EventPlanner",
    },
    {
      name: "Note Sharing",
      image: "images/noteable.JPG",
      deployLink: "https://ancient-hollows-85855.herokuapp.com/",
      gitLink: "https://github.com/byxzESC/Note-sharing",
    },
    {
      name: "Text Editor",
      image: "images/textEditor.JPG",
      deployLink: "https://evening-island-59545.herokuapp.com/",
      gitLink: "https://github.com/byxzESC/19-PWA-Text_editor",
    },
    {
      name: "Social Network API",
      image: "images/socialNetworkApi.JPG",
      deployLink:
        "https://drive.google.com/file/d/1ESktqBgYguUnF-3ZVpdCuoN0tQ2DWUd4/view",
      gitLink: "https://github.com/byxzESC/18-NoSQL-Social_network_API",
    },
    {
      name: "Code Quiz",
      image: "images/codeQuiz.JPG",
      deployLink: "https://byxzesc.github.io/04-Code-Quiz/",
      gitLink: "https://github.com/byxzESC/04-Code-Quiz",
    },
    {
      name: "Weather Dashboard",
      image: "images/weatherDashBoard.JPG",
      deployLink: "https://byxzesc.github.io/06-Weather-Dashboard/",
      gitLink: "https://github.com/byxzESC/06-Weather-Dashboard",
    },
  ];

  return (
    <ul id="portfolio" className="project-list">
      {projects.map((project, index) => {
        return <RenderProject key={index} {...project} />;
      })}
    </ul>
  );
}

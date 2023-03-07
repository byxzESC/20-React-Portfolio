import React from "react";
import RenderProject from "../Project";
import eventPlannerImage from "./images/eventPlanner.JPG";
import noteableImage from "./images/noteable.JPG";
import textEditorImage from "./images/textEditor.JPG";
import socialNetworkApiImage from "./images/socialNetworkApi.JPG";
import codeQuizImage from "./images/codeQuiz.JPG";
import weatherDashboardImage from "./images/weatherDashBoard.JPG";

export default function Portfolio() {
  const projects = [
    {
      name: "Event Planner",
      image: eventPlannerImage,
      deployLink: "https://byxzesc.github.io/01-GroupProject-EventPlanner/",
      gitLink: "https://github.com/byxzESC/01-GroupProject-EventPlanner",
    },
    {
      name: "Note Sharing",
      image: noteableImage,
      deployLink: "https://ancient-hollows-85855.herokuapp.com/",
      gitLink: "https://github.com/byxzESC/Note-sharing",
    },
    {
      name: "Text Editor",
      image: textEditorImage,
      deployLink: "https://evening-island-59545.herokuapp.com/",
      gitLink: "https://github.com/byxzESC/19-PWA-Text_editor",
    },
    {
      name: "Social Network API",
      image: socialNetworkApiImage,
      deployLink:
        "https://drive.google.com/file/d/1ESktqBgYguUnF-3ZVpdCuoN0tQ2DWUd4/view",
      gitLink: "https://github.com/byxzESC/18-NoSQL-Social_network_API",
    },
    {
      name: "Code Quiz",
      image: codeQuizImage,
      deployLink: "https://byxzesc.github.io/04-Code-Quiz/",
      gitLink: "https://github.com/byxzESC/04-Code-Quiz",
    },
    {
      name: "Weather Dashboard",
      image: weatherDashboardImage,
      deployLink: "https://byxzesc.github.io/06-Weather-Dashboard/",
      gitLink: "https://github.com/byxzESC/06-Weather-Dashboard",
    },
  ];

  return (
    <ul id="portfolio">
      <h3 className="title">Portfolio</h3>
      <div className="project-list">
        {projects.map((project) => {
          return <RenderProject key={project.name} project={project} />;
        })}
      </div>
    </ul>
  );
}

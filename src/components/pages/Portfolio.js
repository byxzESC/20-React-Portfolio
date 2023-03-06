import React from "react";

export default function portfolio() {
  const Projects = [
    { name: "Event Planner", image: "", deployLink: "https://byxzesc.github.io/01-GroupProject-EventPlanner/", gitLink: "https://github.com/byxzESC/01-GroupProject-EventPlanner" },
    { name: "Note Sharing", image: "", deployLink: "https://ancient-hollows-85855.herokuapp.com/", gitLink: "https://github.com/byxzESC/Note-sharing" },
    { name: "Text Editor", image: "", deployLink: "https://evening-island-59545.herokuapp.com/", gitLink: "https://github.com/byxzESC/19-PWA-Text_editor" },
    { name: "", image: "", deployLink: "", gitLink: "" },
    { name: "", image: "", deployLink: "", gitLink: "" },
    { name: "", image: "", deployLink: "", gitLink: "" },
  ];

  return (
    <ul id="portfolio" className="project-list">
      {props.projects.map((project) => {
        return (
          <li className="list-project" key={project.id}>
            {project.name}
            {project.repoLink}
          </li>
        );
      })}
    </ul>
  );
}

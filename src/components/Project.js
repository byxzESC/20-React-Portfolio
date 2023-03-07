import React from "react";

export default function renderProject(project) {
  
  return (
    <div className="project card">
      <label className="project-label">{project.name}</label>
      <a className="deploy-link" href={project.deployLink} alt="deploy link">
        Deployed here
      </a>
      <a className="git-link" href={project.gitLink}>
        <img src={project.image} alt={project.name} />
      </a>
    </div>
  );
}

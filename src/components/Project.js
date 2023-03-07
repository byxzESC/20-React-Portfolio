import React from "react";

export default function renderProject({ project }) {
  return (
    <div className="project-card">
      <div class="label-and-git">
        <label className="project-label">{project.name}</label>
        <a className="git-link" href={project.gitLink} alt="git-link">
          Github Repo Here
        </a>
      </div>
      <a className="deploy-link" href={project.deployLink}>
        <img className="project-image" src={project.image} alt={project.name} />
      </a>
    </div>
  );
}

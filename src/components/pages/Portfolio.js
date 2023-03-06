import React from 'react';

export default function portfolio(props) {
    return (
        <ul id="portfolio" className="project-list">
            {props.projects.map((project) => {
                return (<li className="list-project" key={project.id}>
                    {project.name}
                    {project.repoLink}
                </li>
            )})}
        </ul>
    );
}
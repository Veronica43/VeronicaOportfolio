import React from "react";
import "./projects.css";
import { projects } from "../data";
import Project from "../project/Project";

function Projects() {
  return (
    <div id="projects" className="projects-list">
      <h1 className="projects-list-title">My Projects</h1>
      <div className="projects-list-list">
        {projects.map(({ title, image, url, id, description, code }) => (
          <Project
            key={id}
            imageSource={image}
            title={title}
            url={url}
            description={description}
            code={code}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

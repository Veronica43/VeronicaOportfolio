import React from "react";

import "./project.css";

function Project({ imageSource, title, url, description, code }) {
  return (
    <div className="project-main">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={imageSource} alt="" className="project-img" />
      </a>

      <h4 className="card-title">{title}</h4>
      <br />

      <p className="card-text ">{description}</p>
      <button className="button-code">
        <a href={code} target="_blank" rel="noreferrer">
          See Code!
        </a>
      </button>
    </div>
  );
}

export default Project;

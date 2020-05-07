import React from "react";

const WebCardElement = (props) => (
  <a
    href={props.url}
    target="_blank"
    rel="noopener noreferrer"
    className="project project-tile"
  >
    <img className="project-image" src={props.imageUrl} alt="project" />

    <p className="project-title">
      <span className="code">&lt;</span>
      {props.title}
      <span className="code">&#47;&gt;</span>
    </p>
  </a>
);

export default WebCardElement;

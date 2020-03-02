import React from "react";

const WebCardElement = props => (
  <a href={props.url} target="_blank" className="project project-tile">
    <img className="project-image" src={props.imageUrl} alt="project" />

    <p className="project-title">
      <span className="code">&lt;</span>
      {props.title}
      <span className="code">&#47;&gt;</span>
    </p>
  </a>
);

export default WebCardElement;

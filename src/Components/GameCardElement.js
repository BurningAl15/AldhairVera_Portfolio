import React from "react";

const GameCardElement = props => (
  <div className="project project-tile">
    <iframe
      src={props.url}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="project-video"
    />

    <p className="project-title-video">
      <span className="code">&lt;</span>
      {props.title}
      <span className="code">&#47;&gt;</span>
    </p>
  </div>
);

export default GameCardElement;

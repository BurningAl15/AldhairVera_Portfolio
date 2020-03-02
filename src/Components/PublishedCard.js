import React from "react";

const PublishedCard = props => (
  <div className="published-card">
    <h2 className="published-card-job">{props.job}</h2>
    <p className="published-card-place">
      <strong>{props.place}</strong>
    </p>
    <p className="published-card-time">{props.time}</p>
    <p className="published-card-description">{props.description}</p>
    <ul className="published-card-List">
      {props.descriptionElements.map(descript => {
        return (
          <li className="published-card-description">{descript.description}</li>
        );
      })}
    </ul>
  </div>
);

export default PublishedCard;

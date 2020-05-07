import React from "react";

const PublishedCard = (props) => (
  <div className="published-card">
    <h2 className="published-card-job">{props.job}</h2>
    <p className="published-card-place">
      <strong>{props.place}</strong>
    </p>
    <p className="published-card-time">{props.time}</p>
    <p className="published-card-description">{props.description}</p>
    <ul className="published-card-List">
      {props.descriptionElements.map((descript) => {
        return (
          <React.Fragment>
            {descript.description !== "" && (
              <li className="published-card-description">
                <span>{descript.description}</span>
                {descript.url !== "" && (
                  <a
                    className=""
                    href={descript.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go
                  </a>
                )}
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  </div>
);

export default PublishedCard;

import React from "react";

import WebCardElement from "../CardElement";

class WebCardList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="projects-grid">
          {this.props.webCardElements.map((element) => {
            return (
              <WebCardElement
                key={element.id}
                url={element.url}
                imageUrl={element.imageUrl}
                title={element.title}
              />
            );
          })}
        </div>
        <a
          href="https://codepen.io/burningal15"
          className="btn btn-show-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show all <p className="minor"> > </p>
        </a>
      </React.Fragment>
    );
  }
}

export default WebCardList;

import React from "react";

import GameCardElement from "../GameCardElement";
// import { Link } from "react-router-dom";

class GameCardList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="projects-grid-game">
          {this.props.gameCardElements.map((element) => {
            return (
              <GameCardElement
                key={element.id}
                url={element.url}
                title={element.title}
              />
            );
          })}
        </div>
        <a
          href="https://www.youtube.com/channel/UCdcgOD_SQ9Pm1CyAC58-aZA/videos?view_as=subscriber"
          className="btn-game btn-show-all-game"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show all <p className="minor"> > </p>
        </a>
      </React.Fragment>
    );
  }
}

export default GameCardList;

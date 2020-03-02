import React from "react";

import GameCardElement from "../GameCardElement";
import { Link } from "react-router-dom";

class GameCardList extends React.Component {
  render() {
    return (
      <div className="projects-grid-game">
        {this.props.gameCardElements.map(element => {
          return (
            <GameCardElement
              key={element.id}
              url={element.url}
              title={element.title}
            />
          );
        })}
        <a
          href="https://aldhairvera.wordpress.com"
          className="btn-game btn-show-all-game"
          target="_blank"
        >
          Show all <p className="minor"> > </p>
        </a>

        {/* <Link
          to="/Gaming"
          className="btn-game btn-show-all-game"
        >
          Show all <p className="minor"> > </p>
        </Link> */}
      </div>
    );
  }
}

export default GameCardList;

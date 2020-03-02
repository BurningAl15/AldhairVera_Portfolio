import React from "react";

import PublishedCard from "../PublishedCard";

class PublishedCardList extends React.Component {
  render() {
    return (
      <div className="published-projects">
        {this.props.publishedCardElements.map(element => {
          return (
            <PublishedCard
              key={element.id}
              job={element.job}
              place={element.place}
              time={element.time}
              descriptionElements={element.descriptionCardData.data}
            />
          );
        })}
        {/* <a
          href="https://codepen.io/burningal15"
          class="btn btn-show-all"
          target="_blank"
        >
          Show all <p className="minor"> > </p>
        </a> */}
      </div>
    );
  }
}

export default PublishedCardList;

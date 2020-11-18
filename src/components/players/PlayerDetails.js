import React from "react";
import "./PlayerDetails.css";

class PlayerDetails extends React.Component {
  render() {
    return `Player id = ${this.props.match.params.id}`;
  }
}

export default PlayerDetails;

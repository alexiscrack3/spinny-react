import React from "react";
import "./Player.css";

class Player extends React.Component {
  render() {
    if (this.props && this.props.player) {
      return (
        <span>
          `{this.props.player.first_name} {this.props.player.last_name} (
          {this.props.player.email})`
        </span>
      );
    }
    return "";
  }
}

export default Player;

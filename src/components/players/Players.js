import React from "react";
import "./Players.css";
import Player from "./Player";
import playersService from "./PlayersService";

class Players extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchPlayers();
  }

  fetchPlayers = async () => {
    try {
      const response = await playersService.getPlayers();
      this.setState({
        loading: false,
        error: null,
        data: response.data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: null,
      });
      return "Error...";
    }
  };

  render() {
    if (this.state.loading === true) {
      return "Loading...";
    }
    return (
      <React.Fragment>
        <ul>
          {this.state.data.map((player) => {
            return (
              <li key={player._id}>
                <Player player={player} />
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Players;

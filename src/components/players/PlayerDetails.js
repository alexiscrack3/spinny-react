import React from "react";
import { Button } from "react-bootstrap";
import "./PlayerDetails.css";
import playersService from "./PlayersService";

class PlayerDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchPlayerById(id);
  }

  fetchPlayerById = async (id) => {
    try {
      const response = await playersService.getPlayerById(id);
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
      <div>
        <div>
          <p>ID = {this.state.data._id}</p>
          <p>
            Name = {this.state.data.first_name} {this.state.data.last_name}
          </p>
          <p>Email = {this.state.data.email}</p>
          <p>Rating = {this.state.data.rating}</p>
        </div>
        <Button>Back</Button>
      </div>
    );
  }
}

export default PlayerDetails;

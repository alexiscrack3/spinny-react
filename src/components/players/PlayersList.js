import React from "react";
import Table from "react-bootstrap/Table";
import "./PlayersList.css";
import playersService from "./PlayersService";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <Table striped bordered hover className="players-list">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((player, index) => {
              return (
                <tr key={player._id}>
                  <td>{index + 1}</td>
                  <td>{player._id}</td>
                  <td>
                    {player.first_name} {player.last_name}
                  </td>
                  <td>{player.email}</td>
                  <td>{player.rating}</td>
                  <td>
                    <Link to={`/players/${player._id}`}>
                      <Button variant="primary">View</Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default Players;

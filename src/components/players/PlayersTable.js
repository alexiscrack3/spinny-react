import React from "react";
import Table from "react-bootstrap/Table";
import "./PlayersTable.css";
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Rating</th>
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

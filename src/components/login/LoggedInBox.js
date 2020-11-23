import React from "react";
import Nav from "react-bootstrap/Nav";
import playersService from "../../services/playersService";
import tokenStorage from "../../helpers/tokenStorage";
import "./LoggedInBox.css";

class LoggedInBox extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.fetchProfile();
  }

  fetchProfile = async () => {
    const response = await playersService.getProfile();
    this.setState({
      user: response.data,
    });
  };

  handleLogout() {
    tokenStorage.clear();
  }

  render() {
    let element;
    if (this.state.user) {
      element = (
        <React.Fragment>
          <Nav.Link href="/profile">{this.state.user.email}</Nav.Link>
          <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
        </React.Fragment>
      );
    } else {
      element = (
        <React.Fragment>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/sign_up">Sign Up</Nav.Link>
        </React.Fragment>
      );
    }
    return element;
  }
}

export default LoggedInBox;

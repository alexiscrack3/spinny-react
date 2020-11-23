import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import LoggedInBox from "../login/LoggedInBox";
import "./Layout.css";
import logo from "../../logo.svg";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <span className="navbar-title ml-2">Spinny</span>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/players">Players</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <LoggedInBox />
          </Navbar.Collapse>
        </Navbar>
        <Container fluid>{this.props.children}</Container>
      </React.Fragment>
    );
  }
}

export default Layout;

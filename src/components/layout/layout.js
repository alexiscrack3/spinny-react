import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./layout.css";
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
        </Navbar>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Layout;

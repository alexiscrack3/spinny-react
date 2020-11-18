import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./layout.css";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light">
          <Navbar.Brand href="/">Spinny</Navbar.Brand>
        </Navbar>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Layout;

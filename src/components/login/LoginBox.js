import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./LoginBox.css";

class LoginBox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Form className="login-box-form">
          <div className="login-box-header mt-3 d-flex flex-column align-items-center">
            <h1>Sign in to Spinny</h1>
          </div>
          <div className="login-box-content border rounded p-3">
            <Form.Group controlId="username">
              <Form.Label className="font-weight-bold">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label className="font-weight-bold">Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Sign in
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }
}

export default LoginBox;

import React from "react";
import Redirect from "react-router-dom/Redirect";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import loginService from "../../services/loginService";
import tokenStorage from "../../helpers/tokenStorage";
import "./LoginBox.css";

class LoginBox extends React.Component {
  state = {
    loading: false,
    redirectToReferrer: false,
    input: {
      email: "",
      password: "",
    },
    errors: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      const { email, password } = this.state.input;
      this.setState({ email: "", password: "" });
      this.signIn(email, password);
    }
  };

  handleChange = (e) => {
    let input = this.state.input;
    input[e.target.name] = e.target.value;

    this.setState({
      input,
    });
  };

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["email"]) {
      const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter a valid email address";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please a valid password";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  signIn = async (email, password) => {
    this.setState({
      loading: true,
    });
    try {
      const response = await loginService.signIn(email, password);
      if (response.data && response.data.token) {
        const accessToken = response.data.token;
        tokenStorage.setAccessToken(accessToken);
      }
      this.setState({
        loading: false,
        redirectToReferrer: true,
      });
    } catch (error) {
      this.setState({
        loading: false,
      });
      console.log(error);
    }
  };

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to="/" />;
    }
    const spinner = (
      <React.Fragment>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="sr-only">Loading</span>
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <Form
          className="login-box-form"
          onSubmit={this.handleSubmit}
          noValidate
        >
          <div className="login-box-header mt-3 d-flex flex-column align-items-center">
            <h1>Sign in to Spinny</h1>
          </div>
          <div className="login-box-content border rounded p-3">
            <Form.Group controlId="email-input">
              <Form.Label className="font-weight-bold">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={this.state.input.email}
                placeholder="Enter your email"
                onChange={this.handleChange}
              />
              <Form.Text className="text-danger">
                {this.state.errors.email}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="password-input">
              <Form.Label className="font-weight-bold">Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={this.state.input.password}
                placeholder="Enter your password"
                onChange={this.handleChange}
              />
              <Form.Text className="text-danger">
                {this.state.errors.password}
              </Form.Text>
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              {this.state.loading ? spinner : "Sign in"}
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }
}

export default LoginBox;

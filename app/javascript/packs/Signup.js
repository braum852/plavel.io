import React, {Component} from "react";
import {Button, Form, Grid, Header, Message, Segment} from "semantic-ui-react";
import {BrowserRouter as Link} from "react-router-dom";

export default class Signup extends Component {
  state = {
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: ""
  };

  register = () => {
    fetch("/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Invalid Login");
        }
      })
      .then(data => {})
      .then(this.props.history.push("/"));
  };

  usernameHandle = e => {
    this.setState({
      username: e.target.value
    });
  };

  passHandle = e => {
    this.setState({
      password: e.target.value
    });
  };

  firstHandle = e => {
    this.setState({
      firstname: e.target.value
    });
  };

  lastHandle = e => {
    this.setState({
      lastname: e.target.value
    });
  };

  emailHandle = e => {
    this.setState({
      email: e.target.value
    });
  };

  render() {
    return (
      <div
        style={{ backgroundColor: "transparent" }}
      >

        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header color="teal" textAlign="center">
              <div
                style={{
                  color: "#ffffff",
                  fontFamily: "Baloo Thambi",
                  marginTop: "10px"
                }}
              >
                Create A New Account
              </div>
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  onChange={this.usernameHandle}
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                />
                <Form.Input
                  onChange={this.passHandle}
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <div style={{ display: "flex" }}>
                  <Form.Input
                    onChange={this.firstHandle}
                    style={{ width: "95%", right: "5px" }}
                    icon="user circle outline"
                    iconPosition="left"
                    placeholder="First Name"
                  />
                  <Form.Input
                    onChange={this.lastHandle}
                    style={{ width: "95%", right: "5px" }}
                    icon="user circle outline"
                    iconPosition="left"
                    placeholder="Last Name"
                  />
                </div>
                <Form.Input
                  onChange={this.emailHandle}
                  fluid
                  icon="envelope outline"
                  iconPosition="left"
                  placeholder="Email"
                />

                <Button onClick={this.register} color="blue" fluid size="large">
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Message>
              Already have an account? <Link to={"/"}>Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

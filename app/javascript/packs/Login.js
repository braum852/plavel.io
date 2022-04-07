import React, {Component} from "react";
import {Button, Form, Grid, Header, Message, Segment} from "semantic-ui-react";
import {BrowserRouter as Link} from "react-router-dom";

export default class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  login = () => {
    fetch("/api/v1/login", {
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
      .then(data => {
        localStorage.setItem("accessToken", data.jwt);
        localStorage.setItem("user_id", data.user.id);
        localStorage.setItem("username", data.user.username);
        this.props.history.push("/trips");
      })
      .catch(error => {
        alert("Invalid Login", error);
      });
  };

  nameHandle = e => {
    this.setState({
      username: e.target.value
    });
  };

  passHandle = e => {
    this.setState({
      password: e.target.value
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
                Login to your account
              </div>
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  onChange={this.nameHandle}
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

                <Button onClick={this.login} color="blue" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to={"/signup"}>Sign Up </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

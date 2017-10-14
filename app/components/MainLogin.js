import React, { Component } from "react";
import Login from "./common/Login";

class MainLogin extends Component {
  state = {
    user: 'default',
    authenticated: false,
  };

  retrieveUserInfoCallback = (user) => {
    this.setState({user: user.username, authenticated: true});
  }

  render() {
    return (
      <div>
        <Login
          retrieveUserInfoCallback={this.retrieveUserInfoCallback}
        />
      </div>
    );
  }
}

export default MainLogin;
import React, { Component } from "react";
import Login from "./common/Login";

class MainLogin extends Component {
  state = {
    user: 'default',
    authenticated: false,
  };

  retrieveUserInfoCallback = (user) => {
    this.setState({user: user.username, authenticated: true});
    window.CONTEXT = {month: "", day: "", currentdate: "", data: "", user:""};
    window.CONTEXT.user = user.username;
  }

  render() {
    return (
      <div>
        <Login
          retrieveUserInfoCallback={this.retrieveUserInfoCallback}
          user
        />
      </div>
    );
  }
}

export default MainLogin;
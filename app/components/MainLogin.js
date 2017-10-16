import React, { Component } from "react";
import Login from "./common/Login";

class MainLogin extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <Login
          onLoginClick={this.props.onLoginClick}
        />
      </div>
    );
  }
}

export default MainLogin;
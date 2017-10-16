import React, { Component } from "react";
import Login from "./common/Login";

class MainLogin extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <Login
        />
      </div>
    );
  }
}

export default MainLogin;
import React, { Component } from "react";
import Login from "./common/Login";

class MainLogin extends Component {
  state = {
    user: 'default',
    imageData: [],
  };

  render() {
    return (
      <div>
        <Login/>
      </div>
    );
  }
}

export default MainLogin;
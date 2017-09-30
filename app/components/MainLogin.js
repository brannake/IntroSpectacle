import React, { Component } from "react";
import Login from "./common/Login";
import Navbar2 from "./common/Navbar2";


class MainLogin extends Component {
  state = {
    user: 'default',
    imageData: [],
  };

  render() {
    return (
      <div>
        <Navbar2/>       
        <Login/>
      </div>
    );
  }
}

export default MainLogin;
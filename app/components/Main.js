import React, { Component } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Login from "./common/Login";

class Main extends Component {
  state = {
    user: 'default',
    imageData: [],
    loaded: false
  };

  render() {
    return (
      <div>
        <Login/>
      </div>
    );
  }
}

export default Main;
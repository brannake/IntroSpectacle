import React, { Component } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Login from "./common/Login";
import Home from "./common/Home";

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

export default Login;
import React, { Component } from "react";
import Navbar2 from "./common/Navbar2";
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
        <Navbar2 />
         <Login />
         
      </div>
    );
  }
}

export default Main;
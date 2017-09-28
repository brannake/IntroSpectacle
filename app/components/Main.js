import React, { Component } from "react";
import Navbar2 from "./common/Navbar2";
import Footer from "./common/Footer";
import LoginPage from "./common/LoginPage";


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
         <LoginPage />
         
      </div>
    );
  }
}

export default Main;
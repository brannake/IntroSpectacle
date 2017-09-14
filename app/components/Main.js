import React, { Component } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Login from "./common/Login";

class Main extends Component {
  state = {
    user: 'default',
    images: []
  };

moduleDidMount = () => {

  $.ajax({
    url: '/api/load',
    type: 'GET',
    data: this.state.user,
    success: (data) => {
      } 
  });
}

  render() {
    this.moduleDidMount();
    return (
      <div>
        <Login/>
      </div>
    );
  }
}

export default Main;

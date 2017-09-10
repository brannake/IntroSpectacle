import React, { Component } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./common/Home";

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
        console.log(data);
        console.log(data[0]);
        console.log(data[0].image.data);
      } 
  });
}

  render() {
    this.moduleDidMount();
    return (
      <div>
        <Home/>
      </div>
    );
  }
}

export default Main;

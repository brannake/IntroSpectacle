import React, { Component } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./common/Home";

class Main extends Component {
  state = {
    user: 'default',
    images: [],
    loaded: false
  };

componentWillMount() {

    $.ajax({
      url: '/api/load',
      type: 'GET',
      data: this.state.user,
      success: (data) => {
        console.log(data);
        this.setState({images:data});
          }
        });
      }

  render() {
    return (
      <div>
        <Home
        images={this.state.images}
        />
      </div>
    );
  }
}

export default Main;

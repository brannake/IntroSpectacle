import React, { Component } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./common/Home";

class Main extends Component {
  state = {
    user: 'default',
    imageData: [],
    loaded: false
  };

componentWillMount= () => {

    $.ajax({
      url: '/api/load',
      type: 'GET',
      data: this.state.user,
      success: (data) => {
        console.log(data);
        this.setState({imageData:data});
          }
        });
      }

  render() {
    return (
      <div>
        <Home
        imageData={this.state.imageData}
        refreshImages={this.componentWillMount}
        />
      </div>
    );
  }
}

export default Main;
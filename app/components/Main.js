import React, { Component } from "react";
import Home from "./common/Home";

class Main extends Component {
  state = {
    user: 'default',
    imageData: [],
  };

componentWillMount= () => {

  //Hackish way of moving month/day across routes without a state manager
  window.CONTEXT = {month: "", day: "", currentdate: ""};

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
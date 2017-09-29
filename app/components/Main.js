import React, { Component } from "react";
import Home from "./common/Home";

class Main extends Component {
  state = {
    user: 'default',
    imageData: [],
  };

componentWillMount= () => {

  //Hackish way of moving month/day across React routes without a state manager
  if (!this.state.loaded) {
    window.CONTEXT = {month: "", day: "", currentdate: ""};
  }

  //Initial API call to load user data
    $.ajax({
      url: '/api/load',
      type: 'GET',
      data: this.state.user,
      success: (data) => {
        this.setState({imageData:data});
        this.setState({loaded: true});
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
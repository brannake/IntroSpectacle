import React, { Component } from "react";
import SubLogin from "./common/SubLogin";
import {Redirect} from 'react-router-dom';

class Login extends Component {
  state = {
    linkURL: "/calendar"
  }

  updateLinkURL = (user) => {
    this.setState({linkURL: "/calendar/"+user})
  }

  render() {
    if (this.props.authenticated === true) {
      return (
          <Redirect to={this.state.linkURL}/>
      )} else {
    return (
      <div>
        <SubLogin
          onLoginClick={this.props.onLoginClick}
          confirmAuthentication={this.props.confirmAuthentication}
          updateLinkURL={this.updateLinkURL}
        />
      </div>
    )};
  }
}

export default Login;
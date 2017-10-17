import React, { Component } from "react";
import SubLogin from "./common/SubLogin";
import {Redirect, HashRouter } from 'react-router-dom';

class Login extends Component {

  render() {
    console.log(this.props)
    if (this.props.authenticated === true) {
      return (
            <Redirect to="/calendar"/>
            )} else {
    return (
      <div>
        <SubLogin
          onLoginClick={this.props.onLoginClick}
          confirmAuthentication={this.props.confirmAuthentication}
        />
      </div>
    )};
  }
}

export default Login;
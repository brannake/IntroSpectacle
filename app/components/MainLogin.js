import React, { Component } from "react";
import Login from "./common/Login";

class MainLogin extends Component {

  render() {
    return (
      <div>
        <Login
          retrieveUserInfoCallback={this.props.onTodoClick}
        />
      </div>
    );
  }
}

export default MainLogin;
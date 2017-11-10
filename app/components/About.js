import React, { Component } from "react";
import NavbarCustom from "./common/NavbarCustom";
import {Redirect} from 'react-router-dom';

class About extends Component {
  state = {
  }

  render() {
    return (
      <div>
          <NavbarCustom/>
        Hello!!
      </div>
    )};
};

export default About;
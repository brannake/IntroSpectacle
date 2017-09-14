import React, { Component } from "react";
import { render } from 'react-dom';
import API from "../../utils/API";
import Panel from "./Panel";
import SubmitForm from "./SubmitForm";
import SubmitTextForm from "./SubmitTextForm";
import {Modal, Button, Slider, Slide, Navbar, NavItem, Footer,fixedItem} from 'react-materialize';

class Login extends Component {
  state = {

  };

  render() {
    return (
    <div>
      <Navbar brand='introspectiv' right>
	      <NavItem href=''>Home</NavItem>
	      <NavItem href=''>Analytics</NavItem>
        <NavItem href=''>Login</NavItem>
      </Navbar>
      <Slider>
        <Slide
          src="https://static.pexels.com/photos/290623/pexels-photo-290623.jpeg"
          title="Create a digital memory">
          by capturing the highlight of your day
        </Slide>
        <Slide
          src="https://static.pexels.com/photos/196655/pexels-photo-196655.jpeg"
          title="Reflect on your life"
          placement="left">
          one snap shot at a time
        </Slide>
        <Slide
          src="https://static.pexels.com/photos/106344/pexels-photo-106344.jpeg"
          title="View statistics"
          placement="right">
          on your activity over time
        </Slide>
      </Slider>
    </div>
    );
  }
}

export default Login;
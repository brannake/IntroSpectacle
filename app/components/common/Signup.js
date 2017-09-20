import React, { Component } from "react";
import { render } from 'react-dom';
import API from "../../utils/API";
import {Modal, Button, Navbar, NavItem, Slider, Slide} from 'react-materialize';

class Signup extends Component {
    constructor() {
      super();
      this.state = {
        inputValue: ""
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleButtonClick = this.handleButtonClick.bind(this);
    }
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
            src="https://static.pexels.com/photos/7764/pexels-photo.jpg"
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

export default Signup;
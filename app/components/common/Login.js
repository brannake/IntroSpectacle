import React, { Component } from "react";
import { render } from 'react-dom';
import API from "../../utils/API";
import {Modal, Button, Navbar, NavItem, Slider, Slide} from 'react-materialize';

class Login extends Component {
    constructor() {
      super();
      this.state = {
        inputValue: ""
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleButtonClick = this.handleButtonClick.bind(this);
    }

//renders submit form after modal button is clicked


handleButtonClick () {
    alert("you clicked me");

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
            <Modal
	            header='Modal Header'
            	trigger={<Button waves='light'>Sign Up <Icon right> Create</Icon></Button>}>
                    <Row>
                        <Input s={6} label="User Name" validate><Icon>account_circle</Icon></Input>
                        <Input s={6} label="Select Password" validate type='tel'><Icon>lock</Icon></Input>
                    </Row>
                    <button
                    onClick={this.handleButtonClick}
                    className="btn btn-success"
                    style={styles.buttonStyle}    >
                    Submit
                </button>
            </Modal>
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
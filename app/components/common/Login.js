import React, { Component } from "react";
import { render } from 'react-dom';
import API from "../../utils/API";
// import SignupForm from "./SignupForm";
import SubmitForm from "./SubmitForm";
import {Modal, Button, Navbar, NavItem, Slider, Slide, Icon, Input} from 'react-materialize';







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
    
        <div class="wrapper">
        <Button 
            id="signup-btn"
            waves='light'    
            onClick={() => {
            $('#signup').modal('open')
        }}>Sign up  <Icon right> create </Icon>    
        </Button>
        </div>
        <Modal
            id='signup'
            header='Sign up'
            >
                <Input s={6} label="User Name" validate><Icon>account_circle</Icon></Input>
                <Input s={6} label="Password" validate type='tel'><Icon>lock</Icon></Input>
                <div class="modal-footer">
                <Button
                     className="btn waves-effect waves-light modal-action"
                     onClick={this.signupUser}
                 > 
                 Submit
                </Button>
                </div>

               
        </Modal>
        
    </div>
    );
  }
}


// const styles = {
//     buttonStyle: {
//      position: abolute,
//      top: 50%
//     }
// };



export default Login;
import React, { Component } from "react";
import { render } from 'react-dom';
import API from "../../utils/API";
// import SignupForm from "./SignupForm";
import SubmitForm from "./SubmitForm";
import {Modal, Button, Navbar, NavItem, Slider, Slide, Icon, Input} from 'react-materialize';

class Login extends Component {
    constructor() {
        super();
        this.state = {
          newUserInput: "",
          passwordInput:""
        }
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
        if (name === "password") {
          value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };
        handleFormSubmit = (event) => {
            // Preventing the default behavior of the form submit (which is to refresh the page)
            event.preventDefault();

          
    
     
            $.ajax({
                url: '/api/signup',
                data:{
                    user: this.state.newUserInput,
                    password: this.state.passwordInput
                },
                processData: false,
                contentType: false,
                type: 'POST',
                success: function(data){
                    console.log(data);
                } 
            });        

            // console.log("new user: " + this.state.newUserInput);
            // console.log("password: " + this.state.passwordInput)
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
        <div className="wrapper">
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
            header='Sign up'>
             <form className="form">
                <Input s={6} 
                value={this.state.newUserInput}
                name="newUserInput"
                type="text"
                label="User Name"         
                onChange={this.handleInputChange}
                validate><Icon>account_circle</Icon>
                </Input>

                <Input s={6} label="Password"               
                value={this.state.passwordInput}
                name="passwordInput"
                type="text"
                onChange={this.handleInputChange}
                validate type='tel'><Icon>lock</Icon>
                </Input>
             </form>
                <div className="modal-footer">
                <Button className="btn waves-effect waves-light modal-action" onClick={this.handleFormSubmit} > Submit </Button>
                </div>            
        </Modal>
    </div>
    );
  }
}



export default Login;
import React, { Component } from "react";
import { render } from 'react-dom';
<<<<<<< HEAD
// import API from "../../utils/API";
// import SignupForm from "./SignupForm";
// import SubmitForm from "./SubmitForm";
import {Modal, Button, Navbar, NavItem, Slider, Slide, Icon, Input, Footer} from 'react-materialize';

import { BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'


class Login extends Component {
    constructor() {
        super();
        this.state = {
         firstNameInput: "",
          lastNameInput: "",
          emailInput: "",
          newUserInput: "",
          passwordInput:""
        }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    };
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
            if (!this.state.newUserInput || !this.state.passwordInput) {
                alert("Fill out all fieds please!");
              } else if (this.state.passwordInput.length < 6) {
                alert(
                  `Choose a more secure password ${this.state.newUserInput}`
                );
              } else {
                alert(`Hello ${this.state.newUserInput}`);
              }
              if (!this.state.newUserInput || !this.state.passwordInput)  {
                return;
              }
            
            let first_name = this.state.firstNameInput      
            let last_name = this.state.lastNameInput
            let email = this.state.emailInput
            let user = this.state.newUserInput      
            let password = this.state.passwordInput

            $.ajax({
                url: '/api/signup',
                data: { first_name, last_name, email, user , password },
                type: 'POST',
                success: (data) => {
                    console.log(data); // "/members" 
                    console.log(data.id);
                    this.setState({
                      firstNameInput: "",
                      lastNameInput: "",
                      emailInput: "",
                      newUserInput: "",
                      passwordInput:""});
                     }
                  });       
                console.log("new user: " + this.state.newUserInput);
                console.log("password: " + this.state.passwordInput);
        };
  render() {
    return (
    <div>
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

    <Footer
     copyrights="Copyright &copy; 2017 introspectiv"
                className='example'
            >
         <h5 className="white-text">Get started with your photo journal!</h5>
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
                value={this.state.firstNameInput}
                name="firstNameInput"
                type="text"
                label="First Name"         
                onChange={this.handleInputChange}
                validate><Icon>account_circle</Icon>
                </Input>

                <Input s={6} 
                value={this.state.lastNameInput}
                name="lastNameInput"
                type="text"
                label="Last Name"         
                onChange={this.handleInputChange}
                validate><Icon>account_circle</Icon>
                </Input>

                <Input s={6} 
                value={this.state.emailInput}
                name="emailInput"
                type="email"
                label="Email Address"         
                onChange={this.handleInputChange}
                validate><Icon>account_circle</Icon>
                </Input>

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
                validate type='password'><Icon>lock</Icon>
                </Input>
             </form>
             <div className="modal-footer">
             <Button
                 id="submit-button"
                 className="btn waves-effect waves-light modal-action"
                 onClick={this.handleFormSubmit}> 
             Submit
             </Button>
             </div>            
        </Modal>
        </Footer>
=======
import API from "../../utils/API";
import {Modal, Button, Navbar, NavItem, Slider, Slide, Footer, Row, Input, Icon, image} from 'react-materialize';
import {Link} from "react-router";

class Login extends Component {
  state = {

  };

  render() {
    return (
    <div>
        <Navbar brand='introspectiv' left>
            <NavItem>
                <Link to="/heatmaps">TRENDS</Link>
            </NavItem>
            <NavItem>
                <Link to="/calendar">MY CALENDAR</Link>
            </NavItem>
            <div className="wrapper">
                    <Button 
                    id="login-btn"
                    waves='light'    
                    onClick={() => {
                $('#login').modal('open')
                }}>Login      
                </Button>
                </div>
                <Modal className= "page-footer example"
                    id='login'
                    header='Login'>
                    <form>
                        <Input 
                        name="user"
                        s={6} label="User Name"
                        value={this.state.newUserInput}
                        onChange={this.handleInputChange}              
                        validate><Icon>account_circle</Icon></Input>
                        <Input
                        name="Password"
                        s={6} 
                        label="Password"
                        onChange={this.handleInputChange}
                        value={this.state.passwordInput}                
                        validate type='tel'><Icon>lock</Icon></Input>
                    </form>
                        <div className="modal-footer">
                        <Button 
                            id="submit-button"
                            className="btn waves-effect waves-light modal-action"
                            onClick={this.loginUser}
                        > 
                        Submit
                        </Button>
                        </div>            
                </Modal>
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
                title="Gain quantitative insight"
                placement="right">
                on your mood over time
            </Slide>
            </Slider>
            <Footer copyrights="Copyright &copy; 2017 introspectiv"
                className='example'
            >
                    <h5 className="white-text">Get started with your photo journal!</h5>
                <div className="wrapper">
                    <Button 
                    id="signup-btn"
                    waves='light'    
                    onClick={() => {
                $('#signup').modal('open')
                }}>Sign up  <Icon right> create </Icon>    
                </Button>
                </div>
                <Modal className= "page-footer example"
                    id='signup'
                    header='Sign up'>
                    <form>
                        <Input 
                        name="user"
                        s={6} label="User Name"
                        value={this.state.newUserInput}
                        onChange={this.handleInputChange}              
                        validate><Icon>account_circle</Icon></Input>
                        <Input
                        name="Password"
                        s={6} 
                        label="Password"
                        onChange={this.handleInputChange}
                        value={this.state.passwordInput}                
                        validate type='tel'><Icon>lock</Icon></Input>
                    </form>
                        <div className="modal-footer">
                        <Button
                            id="submit-button"
                            className="btn waves-effect waves-light modal-action"
                            onClick={this.signupUser}> 
                        Submit
                        </Button>
                        </div>            
                </Modal>
            </Footer>
>>>>>>> 0448cae06fd4f4d58f455f83d02e23a6fec22517
    </div>
    );
  }
}

<<<<<<< HEAD


=======
>>>>>>> 0448cae06fd4f4d58f455f83d02e23a6fec22517
export default Login;
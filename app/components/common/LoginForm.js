import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {Modal, Button, Navbar, NavItem, Slider, Slide, Icon, Input} from 'react-materialize';

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            passwordInput:''
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
          }

          handleFormSubmit = (event) => {
            // Preventing the default behavior of the form submit (which is to refresh the page)
            event.preventDefault();
          }
        

        render() {
            return (
             <form>
                <Input 
                    name="user"
                    s={6}
                    label="User Name"
                    onChange={this.handleInputChange}
                    validate><Icon>account_circle</Icon>
                </Input>
                <Input
                    name="Password"
                    s={6} 
                    label="Password"
                    onChange={this.handleInputChange}
                    validate type='password'><Icon>lock</Icon>
                </Input>
            </form>
           
              
         //add button       
       
            )
        }
        
    }
    

export default LoginForm;
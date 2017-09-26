import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {Modal, Button, Navbar, NavItem, Slider, Slide, Icon, Input} from 'react-materialize';

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            userInput: "",
            loginPasswordInput:""
        }
        this.loginUser = this.loginUser.bind(this);
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

          loginUser = (event) => {
            // Preventing the default behavior of the form submit (which is to refresh the page)
            event.preventDefault();

            let userLogin = this.state.userInput      
            let passwordLogin = this.state.loginPasswordInput

            $.ajax({
                url: '/api/login',
                data: { userLogin , passwordLogin },
                type: 'POST',
                success: (data) => {
                    console.log(data);
                    console.log(data.id);
                    this.setState({userInput: "",
                    loginPasswordInput:""});
                     }
                  })
                  
                  .then(function(data) {
                       window.location.replace(data);   
                     })
             //show who is currently signed in        
             $.ajax({
                 url: '/api/user_data',
                 type: 'GET',
                 success: (data) => {
                     console.log(`welcome ${this.state.userInput}!`)
                 }
             })        
                    
                    // .catch(function(err) {
                    //     console.log(err);
                    // })
                      
                      
                console.log("user: " + this.state.userInput);
                console.log("password: " + this.state.loginPasswordInput)
        

          };
        

        render() {
            return (
             <form>
                <Input 
                    value={this.state.userInput}
                    name="userInput"
                    s={6}
                    type="text"
                    label="User Name"
                    onChange={this.handleInputChange}
                    validate><Icon>account_circle</Icon>
                </Input>
                <Input
                    value={this.state.loginPasswordInput}
                    name="loginPasswordInput"
                    s={6} 
                    type="text"
                    label="Password"
                    onChange={this.handleInputChange}
                    validate type='password'><Icon>lock</Icon>
                </Input>          
                <Button className="btn waves-effect waves-light modal-action" onClick={this.loginUser} > Submit </Button>
            </form>
              
                 
       
            )
        }
        
    }
    

export default LoginForm;
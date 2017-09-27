import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-materialize'

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  //Sets the selected month to state, passes it up to the Home parent component

    handleSubmit = (event) => {
      


      $.ajax({
        url: '/api/signup',
        type: 'POST',
        success: function(data){
            console.log(data);
        }     
      })
    }
  }
  render() {
    return (
          <form className="form">
            <Row>
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
             </Row>
    )
};


  
export default SignupForm;
import React, { Component } from "react";
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

        
    }

   


  userInfo() {


  }


  //Nested conditional statements here again
  //If the user has selected a day, display that
  //Otherwise, display the current day/month
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  };
    
};


export default SignupForm;;
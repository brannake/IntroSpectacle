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
        <div>                
           <form ref="uploadForm" className="asdf" >
              <Row>
              <Input s={6} label="User Name" validate><Icon>account_circle</Icon></Input>
              <Input s={6} label="Password" validate type='tel'><Icon>lock</Icon></Input>
              </Row>
               <input type="button" ref="button" value="Upload" onClick={this.uploadFile} />
           </form>
        </div>
    )
};


  
export default SignupForm;
import React, { Component } from "react";
import ReactDOM from 'react-dom';

class SubmitTextForm extends React.Component {
    constructor() {
      super();
      this.state = {
        text: "",
      };
      
      this.publish = this.publish.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    
    //Sets state to the caption text
    handleChange({ target }) {
      this.setState({
        [target.name]: target.value
      });
    }
  
    //Calls the server, posts the caption text
    publish() {

        $.ajax({
            url: '/api/text',
            data: this.state,
            type: 'POST',
            success: (data) => {
                console.log(data);
                console.log(data.id);
                this.setState({text:""});
            } 
        });
    }
  
    render() {
      return <div>
        <input 
          id="caption-text"
          type="text" 
          name="text" 
          placeholder="Enter caption here" 
          value={ this.state.text }
          onChange={ this.handleChange } 
        />
        <button value="Send" onClick={ this.publish }>Publish</button>
      </div>
    }
  }

export default SubmitTextForm;
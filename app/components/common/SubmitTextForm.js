import React, { Component } from "react";
import ReactDOM from 'react-dom';

class SubmitTextForm extends React.Component {
    constructor() {
      super();
      this.state = {
        topicBox: "",
      };
      
      this.publish = this.publish.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange({ target }) {
      this.setState({
        [target.name]: target.value
      });
    }
  
    publish() {

        $.ajax({
            url: '/api/text',
            data: this.state,
            type: 'POST',
            success: function(data){
                console.log(data);
            } 
        });
    }
    
    render() {
      return <div>
        <input 
          type="text" 
          name="topicBox" 
          placeholder="Enter topic here..." 
          value={ this.state.topicBox }
          onChange={ this.handleChange } 
        />
        <button value="Send" onClick={ this.publish }>Publish</button>
      </div>
    }
  }

export default SubmitTextForm;
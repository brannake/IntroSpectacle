import React, { Component } from "react";
import ReactDOM from 'react-dom';

class SideDisplay extends Component {
  constructor() {
    super();
    this.state = {
      imageSrc: ""
    };
  };

  render() {
    return (
      <div id="side-display-container">
        <div id="side-display">
          <div id="side-display-img-container">
            <img 
              id="side-display-img"
              src={this.props.imageSrc}
            />            
          </div>
        </div>
      </div>
    );
  }
}

export default SideDisplay;
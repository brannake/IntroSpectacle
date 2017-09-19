import React, { Component } from "react";
import ReactDOM from 'react-dom';

class SideDisplay extends Component {
  constructor() {
    super();
    this.state = {
      imageSrc: "https://www.resortcollection.com/wp-content/themes/resortcollection/property-images/summit/summit-beach-resort-panama-city-beach-fl-beach-01.jpg"
    };
  };

  render() {
    return (
      <div id="side-display-container">
        <div id="side-display">
          <div id="side-display-img-container">
            {(this.props.imageSrc) ?
            <img 
              id="side-display-img"
              src={this.props.imageSrc}
            /> :
            <img 
              id="side-display-img"
              src={this.state.imageSrc}
            />}     
          </div>
          <div id="side-display-caption-container">
            dsfdsfd
          </div>
        </div>
      </div>
    );
  }
}

export default SideDisplay;
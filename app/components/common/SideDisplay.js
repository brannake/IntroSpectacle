import React, { Component } from "react";
import {Link} from "react-router";
import HeatMaps from "../../components/HeatMaps";
import ReactDOM from 'react-dom';
import {Button} from 'react-materialize'

class SideDisplay extends Component {
  constructor() {
    super();
    this.state = {
    };
  };

  render() {
    return (
      <div id="side-display-container">
        <div id="side-display">
          <div id="side-display-text-container">
            Views
            <br/>
            <Button
              onClick= {() => {this.props.getView("monthly")}}
            >
            Monthly
            </Button>
            <br/>
            <Button
              onClick= {() => {this.props.getView("yearly")}}
            >
            Yearly
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDisplay;
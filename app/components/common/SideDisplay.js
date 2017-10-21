import React, { Component } from "react";
import {Button} from 'react-materialize'

class SideDisplay extends Component {

  render() {
    return (
      <div id="side-display-container">
        <div id="side-display">
          <div id="side-display-text-container">
            Views
            <br/>
            <Button
              onClick= {() => {this.props.storeSelectedView("monthly");
              this.props.toggleMonthlyView()}}
            >
            Monthly
            </Button>
            <br/>
            <Button
              onClick= {() => {this.props.storeSelectedView("yearly");
              this.props.toggleYearlyView()}}
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
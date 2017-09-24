import React, { Component } from "react";

class DayHeadingPanel extends Component {
  
  render() {
      return (
        <div 
          className="main-panel col s1"
        >
            <div 
              className="panel-body"
              >
                <div
                  id="date-holder"
                >
                  {this.props.date}
                </div>
            </div>
      </div>
    )};
  };

export default DayHeadingPanel;
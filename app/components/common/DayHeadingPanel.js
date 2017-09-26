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
                  id="panel-day-heading"
                >
                  {this.props.date}
                </div>
            </div>
      </div>
    )};
  };

export default DayHeadingPanel;
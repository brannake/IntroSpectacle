import React, { Component } from "react";
import API from "../../utils/API";


class Panel extends Component {

  //Passes the selected day up to the Home component
  handleDayChange = (event) => {
    event.preventDefault();
    let selectedDay = ($(event.target).text());
    this.props.callbackfromParent(selectedDay);
  }

  render() {
    return (
      <div className="col s1">
          <div className="panel-body"
          onClick={this.handleDayChange}>
            {this.props.date}
          </div>
      </div>
    );
  }
}

export default Panel;

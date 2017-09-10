import React, { Component } from "react";
import API from "../../utils/API";


class Panel extends Component {

  //Passes the selected day up to the Home component
  handleDayChange = (event) => {
    event.preventDefault();
    let selectedDay = ($(event.target).text());
    this.props.callbackfromParent(selectedDay);
  }

  //This renders each panel as a plain white square, unless it is the current date or a selected date
  render() {
    return (
      <div className="col s1">
        {(this.props.date == this.props.dateselected) ?
          <div className="panel-body"
          id="dateselected"
          onClick={this.handleDayChange}>
            {this.props.date}
          </div>
          :
          <div>
        {(this.props.date == this.props.currentdate) ?
          <div className="panel-body"
          id="currentdate"
          onClick={this.handleDayChange}>
            {this.props.date}
          </div>:
          <div className="panel-body"
          onClick={this.handleDayChange}>
            {this.props.date}
          </div>}
          </div>}
      </div>
    );
  }
}

export default Panel;

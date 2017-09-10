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
    console.log(this.props.date);
    console.log(this.props.currentdate);
    return (
      <div className="col s1">
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
      </div>
    );
  }
}

export default Panel;

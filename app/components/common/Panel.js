import React, { Component } from "react";
import API from "../../utils/API";


class Panel extends Component {
  state = {
  };
  //Passes the selected day up to the Home component
  handleDayChange = (event) => {
    event.preventDefault();
    let selectedDay = ($(event.target).text());
    this.props.callbackfromParent(selectedDay);
  }

  //This renders each panel as a plain white square, unless it is the current date or a selected date
  //If state has been set, load images.props into each panel by checking the image date
  render() {
      return (
        //This ternary checks to see if the date being rendered is the date selected
        <div className="col s1">
          {(this.props.date == this.props.dateselected) ?
            <div 
              className="panel-body"
              id="dateselected"
              onClick={this.handleDayChange}>
              {this.props.date}
              <img id={this.props}/>
            </div>
          :
          //This ternary again checks to see if the date being rendered is the current date
          //Otherwise, render basic date panel
          <div>
            {(this.props.date == this.props.currentdate) ?
            <div
              className="panel-body"
              id="currentdate"
              onClick={this.handleDayChange}>
              {this.props.date}
              <img id={this.props}/>
            </div>:
            <div 
              className="panel-body"
              onClick={this.handleDayChange}>
              {this.props.date}
              <img/>
            </div>}
          </div>}
      </div>
    )} 
  }

export default Panel;

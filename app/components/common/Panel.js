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

  //Renders all the image matches on the page
  renderImageIfMatch = (datePanelDay, datePanelMonth, imageArray) => {
    if (this.props.imageData) {
      for (let i=0; i < imageArray.length; i++) {    
        if (datePanelDay === parseInt(imageArray[i].day) && datePanelMonth === imageArray[i].month) {
          return (
            <img
              src={imageArray[i].image}
            />
          );
        } else {
          console.log("no matches here");
        }
      }
    }
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
                {this.renderImageIfMatch(this.props.date, this.props.currentmonth, this.props.imageData)}
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
              {this.renderImageIfMatch(this.props.date, this.props.currentmonth, this.props.imageData)}
            </div>:
            <div 
              className="panel-body"
              onClick={this.handleDayChange}>
              {this.props.date}
              {this.renderImageIfMatch(this.props.date, this.props.currentmonth, this.props.imageData)}
              <img/>
            </div>}
          </div>}
      </div>
    )} 
  }

export default Panel;

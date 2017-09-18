import React, { Component } from "react";

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
              onClick= {() => {this.props.callbackforImage(imageArray[i].image)}}
            />
          );
        } else {
          console.log("no match here");
        }
      }
    }
  }

  //This renders each panel as a plain white square, unless it is the current date or a selected date
  //If state has been set, load the image into each panel by checking the image date
  render() {
      return (
        //Checks to see if the date being rendered is the date selected
        <div className="main-panel col s1">
          {(this.props.date == this.props.dateselected) ?
            <div 
              className="panel-body"
              id="dateselected"
              onClick={this.handleDayChange}
              >
                <div
                  id="date-holder"
                >
                  {this.props.date}
                </div>
                {this.renderImageIfMatch(this.props.date, this.props.month, this.props.imageData)}
            </div>
          :
          //Checks to see if the date being rendered is the current date
          //Otherwise, render basic date panel
          <div>
            {(this.props.date == this.props.currentdate && this.props.month == this.props.currentmonth) ?
            <div
              className="panel-body"
              id="currentdate"
              onClick={this.handleDayChange}
              >
              <div
                  id="date-holder"
                >
                  {this.props.date}
                </div>
                {this.renderImageIfMatch(this.props.date, this.props.month, this.props.imageData)}
            </div>:
            <div 
              className="panel-body"
              id="normaldate"
              onClick={this.handleDayChange}
              >
              <div
                  id="date-holder"
                >
                  {this.props.date}
                </div>
                {this.renderImageIfMatch(this.props.date, this.props.month, this.props.imageData)}
          </div>}
        </div>}
      </div>
    )} 
  }

export default Panel;
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {MediaBox} from 'react-materialize';

class Panel extends Component {

  //Passes the selected day up to the Home component
  handleDayChange = () => {
    event.preventDefault();
    let domNode = ReactDOM.findDOMNode(this);
    let calendarDate = domNode.innerText.trim();
    console.log(calendarDate);
    this.props.storeSelectedDate(calendarDate);
  }

  //Renders all the image matches on the page
  renderImageIfMatch = (datePanelDay, datePanelMonth, imageArray) => {
    if (this.props.imageData) {
      for (let i=0; i < imageArray.length; i++) {
        if (parseInt(datePanelDay) === parseInt(imageArray[i].day) && datePanelMonth === imageArray[i].month) {
          return (
            <div id="media-container">
              <MediaBox
                src={imageArray[i].image}
                onClick= {() => {this.props.callbackforImage(imageArray[i].image)}}
              />
            </div>
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
    console.log(this.props);
      return (
        //Checks to see if the date being rendered is the date selected
        <div 
          className="main-panel col s1"
          onClick={this.handleDayChange}
        >
          {(this.props.date == this.props.dateselected) ?
            <div 
              className="panel-body"
              id="dateselected"
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
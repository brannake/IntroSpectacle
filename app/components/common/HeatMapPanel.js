import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {MediaBox} from 'react-materialize';

class HeatMapPanel extends Component {
  state = {
    chartConfigs: {
        type: "Column2D",
        className: "fc-column2d", // ReactJS attribute-name for DOM classes
        dataFormat: "JSON",
        dataSource: {
            chart:{},
            data: [{value: 500}, {value: 600}, {value: 700}]
        }
    }
  };

  //This renders each panel as a plain white square, unless it is the current date or a selected date
  //If state has been set, load the image into each panel by checking the image date
  render() {
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
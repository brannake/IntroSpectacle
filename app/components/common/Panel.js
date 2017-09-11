import React, { Component } from "react";
import API from "../../utils/API";


class Panel extends Component {
  state = {
    images: [],
    mounted: false
  };
  //Passes the selected day up to the Home component
  handleDayChange = (event) => {
    event.preventDefault();
    let selectedDay = ($(event.target).text());
    console.log(this.props.images);
    this.props.callbackfromParent(selectedDay);
  }

  componentDidMount= () => {
    if (this.state.mounted === false) {
      console.log("IT REALLY WORKED");
      this.setState({images: this.props.images, mounted: true});
    } else {
      console.log("already loaded!");
    };
  };

  //This renders each panel as a plain white square, unless it is the current date or a selected date
  render() {
    if (this.state.images) {
    return (
      <div className="col s1">
        {(this.props.date == this.props.dateselected) ?
          <div className="panel-body"
          id="dateselected"
          onClick={this.handleDayChange}>
            {this.props.date}
            <img src={this.props.images[2].image}/>
          </div>
          :
          <div>
        {(this.props.date == this.props.currentdate) ?
          <div className="panel-body"
          id="currentdate"
          onClick={this.handleDayChange}>
            {this.props.date}
              <img src={this.state.images}/>
          </div>:
          <div className="panel-body"
          onClick={this.handleDayChange}>
            {this.props.date}
              <img src={this.state.images}/>
          </div>}
          </div>}
      </div>
    )} else{
      return (
        <div className="col s1">
          {(this.props.date == this.props.dateselected) ?
            <div className="panel-body"
            id="dateselected"
            onClick={this.handleDayChange}>
              {this.props.date}
              <img src="https://d3g919u5f14ld1.cloudfront.net/assets/images/users/default-avatar.svg"/>
            </div>
            :
            <div>
          {(this.props.date == this.props.currentdate) ?
            <div className="panel-body"
            id="currentdate"
            onClick={this.handleDayChange}>
              {this.props.date}
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/1859-Martinique.web.jpg"/>
            </div>:
            <div className="panel-body"
            onClick={this.handleDayChange}>
              {this.props.date}
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/1859-Martinique.web.jpg"/>
            </div>}
            </div>}
        </div>
      )}
    }
  }

export default Panel;

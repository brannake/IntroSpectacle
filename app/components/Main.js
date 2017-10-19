import React, { Component } from "react";
import Home from "./common/Home";

class Main extends Component {
  state = {
    user: this.props.user,
    authenticated: this.props.authenticated,
    imageData: this.props.imageData
  };

  //This is a big fat function that calculates the average mood of each month
  //Also packages the daily mood scores for each month
  //Will need to refactor and break into two for testing

  calculateMonthlyMoodAverage = (arrayResponse) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthlyMoodAverages = [];
    let monthlyMoodLogs = [];
    for (let i=0; i < months.length; i++) {
      let currentMonthRunningTotal = [];
      let dailyMoodLog = [];
      for (let j=0; j < arrayResponse.length; j++) {
        if (months[i] === arrayResponse[j].month) {
          currentMonthRunningTotal.unshift(100*arrayResponse[j].joy_score);
          let dayDataPointObject = {name: arrayResponse[j].day, uv: 100*arrayResponse[j].joy_score};
          dailyMoodLog.unshift(dayDataPointObject);
        }
      }
      let dailyMoodScoresForThisMonth = {month: months[i], scores: dailyMoodLog};
      monthlyMoodLogs.push(dailyMoodScoresForThisMonth);
      let average = this.findAverage(currentMonthRunningTotal);
      let monthlyAverage = {name: months[i], uv: average};
      monthlyMoodAverages.push(monthlyAverage);
    }
  }

  findAverage = (elmt) => {
    let sum = 0;
      for(let i = 0; i < elmt.length; i++ ){
        sum += parseInt(elmt[i]);
      }
    let avg = sum/elmt.length;
    return avg;
  }

  requestImagesFromServer = () => {
    $.ajax({
      url: '/api/load',
      type: 'POST',
      data: this.state,
      success: (data) => {
        console.log(data);
        this.props.storeImageData(data);
        this.calculateMonthlyMoodAverage(data);
      }
    });
  }

  //Takes calendar to the current date
  //Need to separate these out into other files to reduce clutter
  getCurrentDate= () => {
    let date = new Date();
    let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    this.props.storeCurrentDate(dd);
    let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    if (MM == "01") {
      this.props.storeCurrentMonth("January");
    }
    if (MM == "02") {
      this.props.storeCurrentMonth("February");
    }
    if (MM == "03") {
      this.props.storeCurrentMonth("March");
    }
    if (MM == "04") {
      this.props.storeCurrentMonth("April");
    }
    if (MM == "05") {
      this.props.storeCurrentMonth("May");
    }
    if (MM == "06") {
      this.props.storeCurrentMonth("June");
    }
    if (MM == "07") {
      this.props.storeCurrentMonth("July");
    }
    if (MM == "08") {
      this.props.storeCurrentMonth("August");
    }
    if (MM == "09") {
      this.props.storeCurrentMonth("September");
    }
    if (MM == "10") {
      this.props.storeCurrentMonth("October");
    }
    if (MM == "11") {
      this.props.storeCurrentMonth("November");
    }
    if (MM == "12") {
      this.props.storeCurrentMonth("December");
    }
  }

componentWillMount= () => {
    this.getCurrentDate();
    this.requestImagesFromServer();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Home
          user={this.props.user}
          imageData={this.props.imageData}
          refreshImages={this.requestImagesFromServer}
          currentDate={this.props.currentDate}
          currentMonth={this.props.currentMonth}
          selectedDate={this.props.selectedDate}
          selectedMonth={this.props.selectedMonth}
          storeSelectedDay={this.props.storeSelectedDay}
          storeSelectedMonth={this.props.storeSelectedMonth}
          storeSelectedView={this.props.storeSelectedView}
        />
      </div>
    );
  }
}

export default Main;
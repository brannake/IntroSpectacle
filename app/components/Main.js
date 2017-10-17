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
  //Attaches to the window for now (*hack*)
  //Will need to refactor and use state manager for data flow

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
    window.CONTEXT.data = monthlyMoodAverages;
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
      data: this.props,
      success: (data) => {
        console.log(data);
        this.props.storeData(data);
        this.calculateMonthlyMoodAverage(data);
      }
    });
  }

  //Takes calendar to the current date
  //Need to separate these out into other files to reduce clutter
  getCurrentDate= () => {
    let date = new Date();
    let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    this.setState({currentDate: dd});
    window.CONTEXT.currentdate = dd;
    let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    if (MM == "01") {
      this.setState({currentMonth: "January"});
    }
    if (MM == "02") {
      this.setState({currentMonth: "February"});
    }
    if (MM == "03") {
      this.setState({currentMonth: "March"});
    }
    if (MM == "04") {
      this.setState({currentMonth: "April"});
    }
    if (MM == "05") {
      this.setState({currentMonth: "May"});
    }
    if (MM == "06") {
      this.setState({currentMonth: "June"});
    }
    if (MM == "07") {
      this.setState({currentMonth: "July"});
    }
    if (MM == "08") {
      this.setState({currentMonth: "August"});
    }
    if (MM == "09") {
      this.setState({currentMonth: "September"});
    }
    if (MM == "10") {
      this.setState({currentMonth: "October"});
    }
    if (MM == "11") {
      this.setState({currentMonth: "November"});
    }
    if (MM == "12") {
      this.setState({currentMonth: "December"});
    }
  }

componentWillMount= () => {
  console.log("freak");
    this.getCurrentDate();
    this.requestImagesFromServer();
  }

  //Initial API call to load user data
  render() {
    console.log("why wont this load");
    return (
      <div>
        <Home
          imageData={this.state.imageData}
          refreshImages={this.requestImagesFromServer}
          currentDate={this.state.currentDate}
          currentMonth={this.state.currentMonth}
        />
      </div>
    );
  }
}

export default Main;
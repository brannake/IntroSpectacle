import React, { Component } from "react";
import Home from "./common/Home";

class Main extends Component {
  state = {
    user: window.CONTEXT.user,
    imageData: [],
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

componentWillMount= () => {

  //Initial API call to load user data
    $.ajax({
      url: '/api/load',
      type: 'POST',
      data: window.CONTEXT,
      success: (data) => {
        console.log(data);
        this.setState({imageData:data});
        this.calculateMonthlyMoodAverage(data);
        this.setState({loaded: true});
      }
    });
  }

  render() {
    return (
      <div>
        <Home
          imageData={this.state.imageData}
          refreshImages={this.componentWillMount}
        />
      </div>
    );
  }
}

export default Main;
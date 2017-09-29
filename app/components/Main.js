import React, { Component } from "react";
<<<<<<< HEAD
import Navbar2 from "./common/Navbar2";
import Footer from "./common/Footer";
import Login from "./common/Login";

=======
import Home from "./common/Home";
>>>>>>> 0448cae06fd4f4d58f455f83d02e23a6fec22517

class Main extends Component {
  state = {
    user: 'default',
    imageData: [],
<<<<<<< HEAD
    loaded: false
  };

  render() {
    return (
      <div>
        <Navbar2 />
         <Login />
         
=======
  };

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

  //Hackish way of moving month/day across React routes without a state manager
  if (!this.state.loaded) {
    window.CONTEXT = {month: "", day: "", currentdate: "", data: ""};
  }

  //Initial API call to load user data
    $.ajax({
      url: '/api/load',
      type: 'GET',
      data: this.state.user,
      success: (data) => {
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
>>>>>>> 0448cae06fd4f4d58f455f83d02e23a6fec22517
      </div>
    );
  }
}

export default Main;
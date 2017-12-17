import React, { Component } from "react";
import Home from "./common/Home";

class Main extends Component {
  state = {
    user: this.props.user,
    authenticated: this.props.authenticated,
    imageData: this.props.imageData
  };

  //Calculates the average mood of each month for trends page.
  calculateYearlyViewData = (arrayResponse, emotion) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];    
    let monthlyMoodAverages = [];
      for (let i=0; i < months.length; i++) {
        let currentMonthRunningTotal = [];
        for (let j=0; j < arrayResponse.length; j++) {
          if (months[i] === arrayResponse[j].month) {
            switch (emotion) {
              case "joy":
                currentMonthRunningTotal.unshift(100*arrayResponse[j].joy_score);
                break;
              case "fear":
                currentMonthRunningTotal.unshift(100*arrayResponse[j].fear_score);
                break;
              case "anger":
                currentMonthRunningTotal.unshift(100*arrayResponse[j].anger_score);
                break;
              case "disgust":
                currentMonthRunningTotal.unshift(100*arrayResponse[j].disgust_score);
                break;
            }
          }
        }
        let average = this.findAverage(currentMonthRunningTotal);
        let monthlyAverage = {name: months[i], uv: average};
        monthlyMoodAverages.push(monthlyAverage);
      }
    //After calculating the averages, put them in the store
    //Kind of a big function, may want to break up in future
    switch (emotion) {
      case "joy": this.props.storeYearlyViewDataJoy(monthlyMoodAverages);
      case "fear": this.props.storeYearlyViewDataFear(monthlyMoodAverages);
      case "anger": this.props.storeYearlyViewDataAnger(monthlyMoodAverages);
      case "disgust": this.props.storeYearlyViewDataDisgust(monthlyMoodAverages);
    }
  }

  //Packages every submission date by month for trends page
  calculateMonthlyViewData = (arrayResponse, emotion) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];        
    let monthlyMoodLogs = [];
    for (let i=0; i < months.length; i++) {
      let dailyMoodLog = [];
      for (let j=0; j < arrayResponse.length; j++) {
        if (months[i] === arrayResponse[j].month) {
          switch (emotion) {
            case "joy": 
              let dayDataPointObject1 = {name: arrayResponse[j].day, uv: 100*arrayResponse[j].joy_score};
              dailyMoodLog.unshift(dayDataPointObject1);
              break;
            case "fear": 
              let dayDataPointObject2 = {name: arrayResponse[j].day, uv: 100*arrayResponse[j].fear_score};
              dailyMoodLog.unshift(dayDataPointObject2);
              break;
            case "anger": 
              let dayDataPointObject3 = {name: arrayResponse[j].day, uv: 100*arrayResponse[j].anger_score};
              dailyMoodLog.unshift(dayDataPointObject3);
              break;
            case "disgust": 
              let dayDataPointObject4 = {name: arrayResponse[j].day, uv: 100*arrayResponse[j].disgust_score};
              dailyMoodLog.unshift(dayDataPointObject4);
              break;
          }
        }
      }
      let dailyMoodScoresForThisMonth = {month: months[i], scores: dailyMoodLog};
      monthlyMoodLogs.push(dailyMoodScoresForThisMonth);
    }

    switch (emotion) {
      case "joy": this.props.storeMonthlyViewData(monthlyMoodLogs);
      case "fear": this.props.storeYearlyViewDataFear(monthlyMoodAverages);
      case "anger": this.props.storeYearlyViewDataAnger(monthlyMoodAverages);
      case "disgust": this.props.storeYearlyViewDataDisgust(monthlyMoodAverages);
    }
  }

  //Calculates the average :)
  findAverage = (elmt) => {
    let sum = 0;
      for(let i = 0; i < elmt.length; i++ ){
        sum += parseInt(elmt[i]);
      }
    let avg = sum/elmt.length;
    return avg;
  }

  //This requests the images and the data for each date
  //It also invokes other functions which process the data
  //And store it in the Redux store for global access
  requestImagesFromServer = () => {

    $.ajax({
      url: '/api/load',
      type: 'POST',
      data: this.state,
      success: (data) => {
        this.props.storeImageData(data);
        this.calculateYearlyViewData(data, "joy");
        this.calculateYearlyViewData(data, "fear");
        this.calculateYearlyViewData(data, "anger");
        this.calculateYearlyViewData(data, "disgust");
        this.calculateMonthlyViewData(data, "joy");
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
          storeSelectedDate={this.props.storeSelectedDate}
          storeSelectedMonth={this.props.storeSelectedMonth}
          storeSelectedView={this.props.storeSelectedView}
          dates={this.props.dates}
        />
      </div>
    );
  }
}

export default Main;
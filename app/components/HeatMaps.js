import React, { Component } from "react";
import ReactDOM from 'react-dom';
// Load the charts module
import Footer from "./common/Footer";
import SideDisplay from "./common/SideDisplay";
import Navbar from "./common/Navbar";
import {AreaChart, Area, linearGradient , XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


class HeatMaps extends Component {
  state = {
    user: 'default',
    data: [],
    currentdate: window.CONTEXT.currentdate,
    month: window.CONTEXT.month,
    date: window.CONTEXT.day,
    selectedView: "monthly",
    monthlyMoodAverages: '',
    dailyMoodData: [],
    data: window.CONTEXT.data
  };

toggleMonthlyView = () => {
  for (let i=0; i < this.state.dailyMoodData.length; i++) {
    if (this.state.dailyMoodData[i].month === this.state.month) {
      this.setState({data: this.state.dailyMoodData[i].scores});
    }
  }
}

toggleYearlyView = () => {
  this.setState({data: this.state.monthlyMoodAverages})
}

  //Callback to pass view up from Side Display
  viewCallback = (view) => {
    this.setState({selectedView: view});
  }

  findAverage = (elmt) => {
    let sum = 0;
      for(let i = 0; i < elmt.length; i++ ){
        sum += parseInt(elmt[i]);
      }
    let avg = sum/elmt.length;
    return avg;
  }

  //Big fat function to sort through the response object of all the user submissions
  //Packages days by month (monthlyMoodLogs) and loads them onto state as dailyMoodData for analytics rendering
  //Also averages the mood score for each month for the yearly view and loads onto state as monthlyMoodAverages
  //Should refactor when possible
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
    this.setState({monthlyMoodAverages: monthlyMoodAverages});
    this.setState({dailyMoodData: monthlyMoodLogs});
  }

  componentWillMount= () => {
    
    //Initial API call to load user data
      $.ajax({
        url: '/api/load',
        type: 'GET',
        data: this.state.user,
        success: (response) => {
          this.calculateMonthlyMoodAverage(response);
        }
      });
    }
    
  myMonthCallback = (dataFromChild) => {
    this.setState({month: dataFromChild, day: ''}, () => {
      if (this.state.month === "January") {
        this.setState({secondRowDates: [1, 2, 3, 4, 5, 6, 7],
                       thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
                       fourthRowDates: [15, 16, 17, 18, 19, 20, 21],
                       fifthRowDates: [22, 23, 24, 25, 26, 27, 28],
                       sixthRowDates: [29, 30, 31]
                      });
      }
      if (this.state.month === "February") {
        this.setState({secondRowDates: ["", " ", "  ", 1, 2, 3, 4],
                       thirdRowDates: [5, 6, 7, 8, 9, 10, 11],
                       fourthRowDates: [12, 13, 14, 15, 16, 17, 18],
                       fifthRowDates: [19, 20, 21, 22, 23, 24, 25],
                       sixthRowDates: [26, 27, 28]
                      });
      }
      if (this.state.month === "March") {
        this.setState({secondRowDates: ["", " ", "  ", 1, 2, 3, 4],
                       thirdRowDates: [5, 6, 7, 8, 9, 10, 11],
                       fourthRowDates: [12, 13, 14, 15, 16, 17, 18],
                       fifthRowDates: [19, 20, 21, 22, 23, 24, 25],
                       sixthRowDates: [26, 27, 28, 29, 30, 31]
                      });
      }
      if (this.state.month === "April") {
        this.setState({secondRowDates: ["", " ", "  ", "   ", "    ", "     ", 1],
                       thirdRowDates: [2, 3, 4, 5, 6, 7, 8],
                       fourthRowDates: [9, 10, 11, 12, 13, 14, 15],
                       fifthRowDates: [16, 17, 18, 19, 20, 21, 22],
                       sixthRowDates: [23, 24, 25, 26, 27, 28, 29]
                      });
      }
      if (this.state.month === "May") {
        this.setState({secondRowDates: ["", 1, 2, 3, 4, 5, 6],
                       thirdRowDates: [7, 8, 9, 10, 11, 12, 13],
                       fourthRowDates: [14, 15, 16, 17, 18, 19, 20],
                       fifthRowDates: [21, 22, 23, 24, 25, 26, 27],
                       sixthRowDates: [28, 29, 30, 31]
                      });
      }               
      if (this.state.month === "June") {
        this.setState({secondRowDates: ["", " ", "  ", "   ", 1, 2, 3],
                       thirdRowDates: [4, 5, 6, 7, 8, 9, 10],
                       fourthRowDates: [11, 12, 13, 14, 15, 16, 17],
                       fifthRowDates: [18, 19, 20, 21, 22, 23, 24],
                       sixthRowDates: [25, 26, 27, 28, 29, 30]
                      });
      }       
      if (this.state.month === "July") {
        this.setState({secondRowDates: ["", " ", "  ", "   ", "    ", "     ", 1],
                       thirdRowDates: [2, 3, 4, 5, 6, 7, 8],
                       fourthRowDates: [9, 10, 11, 12, 13, 14, 15],
                       fifthRowDates: [16, 17, 18, 19, 20, 21, 22],
                       sixthRowDates: [29, 30, 31]
                      });
      }
      if (this.state.month === "August") {
        this.setState({secondRowDates: ["", " ", 1, 2, 3, 4, 5],
                       thirdRowDates: [6, 7, 8, 9, 10, 11, 12],
                       fourthRowDates: [13, 14, 15, 16, 17, 18, 19],
                       fifthRowDates: [20, 21, 22, 23, 24, 25, 26],
                       sixthRowDates: [27, 28, 29, 30, 31]
                      });
      }
      if (this.state.month === "September") {
        this.setState({secondRowDates: ["", " ", "  ", "   ", "    ", 1, 2],
                       thirdRowDates: [3, 4, 5, 6, 7, 8, 9],
                       fourthRowDates: [10, 11, 12, 13, 14, 15, 16],
                       fifthRowDates: [17, 18, 19, 20, 21, 22, 23],
                       sixthRowDates: [24, 25, 26, 27, 28, 29, 30]
                      });
      }
      if (this.state.month === "October") {
        this.setState({secondRowDates: [1, 2, 3, 4, 5, 6, 7],
                       thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
                       fourthRowDates: [15, 16, 17, 18, 19, 20, 21],
                       fifthRowDates: [22, 23, 24, 25, 26, 27, 28,],
                       sixthRowDates: [29, 30, 31]
                      });
      }
      if (this.state.month === "November") {
        this.setState({secondRowDates: ["", " ", "  ", 1, 2, 3, 4],
                       thirdRowDates: [5, 6, 7, 8, 9, 10, 11],
                       fourthRowDates: [12, 13, 14, 15, 16, 17, 18],
                       fifthRowDates: [19, 20, 21, 22, 23, 24, 25],
                       sixthRowDates: [26, 27, 28]
                      });
      }
      if (this.state.month === "December") {
        this.setState({secondRowDates: ["", " ", "  ", "    ", "     ", 1, 2],
                       thirdRowDates: [3, 4, 5, 6, 7, 8, 9],
                       fourthRowDates: [10, 11, 12, 13, 14, 15, 16],
                       fifthRowDates: [17, 18, 19, 20, 21, 22, 23],
                       sixthRowDates: [24, 25, 26, 27, 28, 29, 30, 31]
                      });     
      };
    });
  };

  render() {
    console.log(window.CONTEXT.data);
    console.log("rerendered");
    console.log(this.state.data);
    return (
      <div>
      <Navbar
        callbackfromParent={this.myMonthCallback}
        currentdate={this.state.currentdate}
        day={this.state.date}
        month={this.state.month}
        currentMonth={this.state.currentmonth}
      />
        <div id="chart-container">
          <AreaChart 
            id="lineChart"
            width={940} 
            height={500} 
            data={this.state.data} 
          >
          <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />>
        </AreaChart>
        <div id="X-axis-display">
            Date
          </div>
          <div id="Y-axis-display">
            Mood
          </div>
        </div>
      <SideDisplay
        getView= {this.viewCallback}
        selectedView={this.state.selectedView}
        toggleMonthlyView={this.toggleMonthlyView}
        toggleYearlyView={this.toggleYearlyView}
      />
      <Footer
        className = "footer"
        />
      </div>
    );
  }
}

export default HeatMaps;
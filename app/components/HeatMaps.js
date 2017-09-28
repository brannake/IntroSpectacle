import React, { Component } from "react";
import ReactDOM from 'react-dom';
// Load the charts module
import Footer from "./common/Footer";
import SideDisplay from "./common/SideDisplay";
import Navbar from "./common/Navbar";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


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
    data: [
      {name: 'March', uv: 40},
      {name: 'April', uv: 30},
      {name: 'May', uv: 20},
      {name: 'June', uv: 28},
      {name: 'July', uv: 19},
      {name: 'August', uv: 29},
      {name: 'September', uv: 49}]
  };

toggleMonthlyView = () => {
  this.setState({data: this.state.dailyMoodData});
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

  pullOutEachDayJoyScore = (arrayResponse) => {
    let pulledScores = [];
    for (let i=0; i < arrayResponse.length; i++) {
      pulledScores.unshift({name: arrayResponse[i].day, uv: 100*arrayResponse[i].joy_score});
    }
    this.setState({dailyMoodData: pulledScores});
  }

  calculateMonthlyMoodAverage = (arrayResponse) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthlyMoodAverages = [];
    for (let i=0; i < months.length; i++) {
      let currentMonthRunningTotal = [];
      for (let j=0; j < arrayResponse.length; j++) {
        if (months[i] === arrayResponse[j].month) {
          currentMonthRunningTotal.push(100*arrayResponse[j].joy_score);
        }
      }
      let average = this.findAverage(currentMonthRunningTotal);
      let monthlyAverage = {name: months[i], average: average};
      monthlyMoodAverages.push(monthlyAverage);
    }
    this.setState({monthlyMoodAverages: monthlyMoodAverages});
    console.log(monthlyMoodAverages);
    return monthlyMoodAverages;
  }

  componentWillMount= () => {
    
    //Initial API call to load user data
      $.ajax({
        url: '/api/load',
        type: 'GET',
        data: this.state.user,
        success: (response) => {
          this.pullOutEachDayJoyScore(response);
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
          <LineChart 
            id="lineChart"
            width={940} 
            height={500} 
            data={this.state.data} 
          >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />>
        </LineChart>
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
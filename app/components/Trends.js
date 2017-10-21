import React, { Component } from "react";
import ReactDOM from 'react-dom';
// Load the charts module
import Footer from "./common/Footer";
import SideDisplay from "./common/SideDisplay";
import Navbar from "./common/Navbar";
import {AreaChart, Area, linearGradient , XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


class Trends extends Component {

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

  render() {
    return (
      <div>
        <Navbar
          storeSelectedMonth={this.props.storeSelectedMonth}
          currentdate={this.props.currentDate}
          selectedDate={this.props.selectedDate}
          selectedMonth={this.props.selectedMonth}
          currentMonth={this.props.currentMonth}
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
                <stop offset="5%" stopColor="#FFF" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#FFF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
              <XAxis dataKey="name"/>
              <YAxis/>
              <Tooltip/>
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
    )
  }
}

export default Trends;
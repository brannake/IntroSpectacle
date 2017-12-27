import React, { Component } from "react";
// Load the charts module
import Footer from "./common/Footer";
import SideDisplay from "./common/SideDisplay";
import Navbar from "./common/Navbar";
import {AreaChart, Area, linearGradient , XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


class Trends extends Component {

  findAverage = (elmt) => {
    let sum = 0;
      for(let i = 0; i < elmt.length; i++ ){
        sum += parseInt(elmt[i]);
      }
    let avg = sum/elmt.length;
    return avg;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div id="background-overlay"></div>
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
              width={1000} 
              height={500} 
              data={this.props.graphData} 
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1BB1CC" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#1BB1CC" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="#1BB1CC"/>
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
          storeSelectedView= {this.props.storeSelectedView}
          storeSelectedEmotion={this.props.storeSelectedEmotion}
          displayGraph={this.props.displayGraph}
        />
        <Footer
          className="footer"
        />
      </div>
    )
  }
}

export default Trends;
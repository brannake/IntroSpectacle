import React, { Component } from "react";
import ReactDOM from 'react-dom';
// Load the charts module
import Footer from "./common/Footer";
import SideDisplay from "./common/SideDisplay";
import {Navbar, NavItem, Icon} from 'react-materialize'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


class HeatMaps extends Component {
  state = {
    user: 'default',
    imageData: [],
    loaded: false,
    data: [
        {name: 'March', uv: 40, pv: 240, amt: 240},
        {name: 'April', uv: 30, pv: 138, amt: 221},
        {name: 'May', uv: 20, pv: 980, amt: 229},
        {name: 'June', uv: 28, pv: 398, amt: 200},
        {name: 'July', uv: 19, pv: 480, amt: 218},
        {name: 'August', uv: 29, pv: 380, amt: 250},
        {name: 'September', uv: 49, pv: 430, amt: 210},
      ]
  };

  render() {
    return (
      <div id="base-container">
        
        <Navbar
          className="navbar">
        </Navbar>
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
          <Tooltip />
        </LineChart>
        </div>
      <SideDisplay
      />
      <Footer
        className = "footer"
        />
      </div>
    );
  }
}

export default HeatMaps;
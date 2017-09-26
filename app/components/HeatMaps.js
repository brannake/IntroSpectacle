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
        {name: 'March', uv: 400, pv: 240, amt: 240},
        {name: 'April', uv: 300, pv: 138, amt: 221},
        {name: 'May', uv: 200, pv: 980, amt: 229},
        {name: 'June', uv: 278, pv: 398, amt: 200},
        {name: 'July', uv: 189, pv: 480, amt: 218},
        {name: 'August', uv: 239, pv: 380, amt: 250},
        {name: 'September', uv: 349, pv: 430, amt: 210},
      ]
  };

  render() {
    return (
      <div id="base-container">
        <Navbar brand='logo' right>
          <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
        </Navbar>
        <div id="chart-container">
          <LineChart 
            id="lineChart"
            width={800} 
            height={400} 
            data={this.state.data} 
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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
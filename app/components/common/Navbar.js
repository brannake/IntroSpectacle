import React, { Component } from "react";
import SideNavMod from "./SideNavMod";
import {Dropdown, Button, NavItem} from 'react-materialize'
import {Link} from "react-router-dom";

class Navbar extends Component {

  //Sets the selected month to state, passes it up to the Home parent component
  handleChange = (event) => {
      event.preventDefault();
      let selectedMonth = ($(event.target).text());
      this.props.storeSelectedMonth(selectedMonth);
      this.props.displayGraph();
    }

  //Function to render the individual Nav items for month
  renderMonths() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months.map(month => (
      <NavItem
        key={month}
        id={month}
        onClick={this.handleChange}
      >
        {month}
      </NavItem>
    ));
  }

  //Nested conditional statements here again
  //If the user has selected a day, display that
  //Otherwise, display the current day/month
  render() {
    return (
    <div>
      <nav className="navbar navbar-inverse">
        <Link to="/calendar">
          <Button 
            id="calendar-btn"   
          >
            My Calendar
          </Button>
        </Link>
        <Link to="/trends">
          <Button 
          id="trends-btn"  
        >
          Trends
      </Button>
      </Link>
      <Link to="/about">
        <Button 
          id="about-btn"  
        >
          Help
        </Button>
      </Link>
      <div className="container-fluid">
      <div className="navbar-header">
      </div>
      <div className="nav navbar-nav">
          <div id="date-display">
            {(!this.props.month) ?
              (!this.props.selectedDate) ?
              <Dropdown 
                trigger={
              <Button
                style={{color: "#44DBA7", background: "white"}}
              >{this.props.currentMonth + " " + this.props.currentdate}</Button>
              }>
                {this.renderMonths()}
              </Dropdown>:
              <Dropdown 
                trigger={
                <Button
                  style={{ background: "#44DBA7", color: "white" }}
                >{this.props.currentMonth + " " + this.props.selectedDate}</Button>
                }>
                {this.renderMonths()}
              </Dropdown>
            :
              (this.props.selectedDate.replace(/\s/g, '').length === 0) ?
              <Dropdown 
                trigger={
              <Button
                style={{color: "#44DBA7", background: "white"}}
              >{this.props.month + " " + this.props.currentdate}</Button>
              }>
                {this.renderMonths()}
              </Dropdown>:
              <Dropdown 
                trigger={
                <Button
                  style={{ background: "#44DBA7", color: "white" }}
                >{this.props.month + " " + this.props.selectedDate}</Button>
                }>
                {this.renderMonths()}
              </Dropdown>
            }
          </div>
        </div>
      </div>
    </nav>
  </div>
    );
  }
}

export default Navbar;
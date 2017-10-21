import React, { Component } from "react";
import SideNavMod from "./SideNavMod";
import {Dropdown, Button, NavItem} from 'react-materialize'

class Navbar extends Component {

  //Sets the selected month to state, passes it up to the Home parent component
  handleChange = (event) => {
      event.preventDefault();
      let selectedMonth = ($(event.target).text());
      console.log(selectedMonth);
      this.props.storeSelectedMonth(selectedMonth);
    }

  //Function to render the individual Nav items for month
  renderMonths() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months.map(month => (
      <NavItem
        key={month}
        id={month}
        onClick={this.handleChange} >
        {month}
      </NavItem>
    ));
  }

  //Nested conditional statements here again
  //If the user has selected a day, display that
  //Otherwise, display the current day/month
  render() {
    console.log(this.props.selectedDate);
    return (
    <div>
    <nav className="navbar navbar-inverse">
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
                style={{color: "black", background: "white"}}
              >{this.props.currentMonth + " " + this.props.currentdate}</Button>
              }>
                {this.renderMonths()}
              </Dropdown>:
              <Dropdown 
                trigger={
                <Button
                  style={{ background: "black", color: "white" }}
                >{this.props.currentMonth + " " + this.props.selectedDate}</Button>
                }>
                {this.renderMonths()}
              </Dropdown>
            :
              (this.props.selectedDate.replace(/\s/g, '').length === 0) ?
              <Dropdown 
                trigger={
              <Button
                style={{color: "black", background: "white"}}
              >{this.props.month + " " + this.props.currentdate}</Button>
              }>
                {this.renderMonths()}
              </Dropdown>:
              <Dropdown 
                trigger={
                <Button
                  style={{ background: "black", color: "white" }}
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
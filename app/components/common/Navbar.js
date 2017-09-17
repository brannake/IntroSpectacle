import React, { Component } from "react";
import { Link } from "react-router";
import {Dropdown, Button, NavItem} from 'react-materialize'

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      currentMonth: ""
    };
  }

  //Sets the selected month to state, passes it up to the Home parent component
  handleChange = (event) => {
      event.preventDefault();
      let selectedMonth = ($(event.target).text());
      this.setState({
        currentMonth: selectedMonth
      });
      this.props.callbackfromParent(selectedMonth);
    }

    //Function to render the individual Nav items for month
  renderMonths() {
    return this.state.months.map(month => (
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
    return (
    <div>
    <nav style={{ marginBottom: 40 }} className="navbar navbar-inverse">
      <div className="container-fluid">
      <div className="navbar-header">
      </div>
      <div className="nav navbar-nav">
          <div id="date-display">
            {(!this.props.month) ?
              (!this.props.day) ?
              <Dropdown 
                trigger={
              <Button
                style={{color: "lightblue", background: "white"}}
              >{this.props.currentMonth + " " + this.props.currentdate}</Button>
              }>
                {this.renderMonths()}
              </Dropdown>:
              <Dropdown 
                trigger={
                <Button
                  style={{ background: "lightblue" }}
                >{this.props.currentMonth + " " + this.props.day}</Button>
                }>
                {this.renderMonths()}
              </Dropdown>
            :
              (!this.props.day) ?
              <Dropdown 
                trigger={
              <Button
                style={{color: "lightblue", background: "white"}}
              >{this.props.month + " " + this.props.currentdate}</Button>
              }>
                {this.renderMonths()}
              </Dropdown>:
              <Dropdown 
                trigger={
                <Button
                  style={{ background: "lightblue" }}
                >{this.props.month + " " + this.props.day}</Button>
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
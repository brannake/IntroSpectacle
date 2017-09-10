import React, { Component } from "react";
import { Link } from "react-router";
import {Dropdown, Button, NavItem} from 'react-materialize'

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      currentMonth: 'January'
    };
  }

  handleChange = (event) => {
      event.preventDefault();
      let selectedMonth = ($(event.target).text());
      this.setState({
        currentMonth: selectedMonth
      });
      this.props.callbackfromParent(selectedMonth);
    }

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

  render() {
    return (<div>
      <Dropdown trigger={
        <Button>{this.state.currentMonth}</Button>
        }>
        {this.renderMonths()}
    </Dropdown>
    <nav style={{ marginBottom: 40 }} className="navbar navbar-inverse">
      <div className="container-fluid">
      <div className="navbar-header">
      </div>
      <ul className="nav navbar-nav">
        <li className={location.pathname === "/" && "active"}>
        </li>
        <li className={location.pathname === "/favorites" && "active"}>
          <Link id="date-display" to="/favorites">{this.props.month+" "+this.props.day}
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  </div>
    );
  }
}

export default Navbar;


import React, { Component } from "react";
import { Link } from "react-router";
import {Dropdown, Button, NavItem} from 'react-materialize'

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      currentMonth: ''
    };
  }

  renderMonths() {
    return this.state.months.map(month => (
      <NavItem
        key={month}>
      {month}
      </NavItem>
    ));
  }

  render() {
    return (<div>
      <Dropdown trigger={
        <Button>Month</Button>
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
        <Link to="/favorites">Navbar</Link>
      </li>
    </ul>
  </div>
</nav>
</div>
    );
  }
}

export default Navbar;


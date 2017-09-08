import React from "react";
import { Link } from "react-router";

const Navbar = () => (
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
);

export default Navbar;

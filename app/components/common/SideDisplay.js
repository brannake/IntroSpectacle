import React, { Component } from "react";
import {Link} from "react-router";
import HeatMaps from "../../components/HeatMaps";

class SideDisplay extends Component {
  constructor() {
    super();
    this.state = {
      imageSrc: ""
    };
  };

  render() {
    return (
      <div id="side-display-container">
        <div id="side-display">
          <div id="side-display-text-container">
            <Link to="/heatmaps">Mood Tracker</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDisplay;
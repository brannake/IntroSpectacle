import React, { Component } from "react";
import {Link} from "react-router";
import HeatMaps from "../../components/HeatMaps";

class SideDisplay extends Component {
  constructor() {
    super();
    this.state = {
      imageSrc: "https://www.resortcollection.com/wp-content/themes/resortcollection/property-images/summit/summit-beach-resort-panama-city-beach-fl-beach-01.jpg"
    };
  };

  render() {
    return (
      <div id="side-display-container">
        <div id="side-display">
          <div id="side-display-text-container">
            <Link to="/heatmaps">HeatMaps</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDisplay;
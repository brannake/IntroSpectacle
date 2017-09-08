import React, { Component } from "react";
import API from "../../utils/API";
import Panel from "./Panel";

class Home extends Component {
  state = {
    dates: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  };
  // Getting all quotes when the component mounts
  componentDidMount() {
  }

  renderDates() {
    return this.state.dates.map(date => (
      <Panel
        date={date}
      >
      </Panel>
    ));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
        </div>
        <div className="row">
          <hr />
          {this.renderDates()}
        </div>
      </div>
    );
  }
}

export default Home;

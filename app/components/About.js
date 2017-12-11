import React, { Component } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import AboutInsert from "./common/AboutInsert";

class About extends Component {

  render() {
    return (
      <div>
        <Navbar
          currentdate={this.props.currentDate}
          selectedDate={this.props.selectedDate}
          month={this.props.selectedMonth}
          currentMonth={this.props.currentMonth}
        >
        </Navbar>
        <AboutInsert/>
        <Footer/>
      </div>
    )};
};

export default About;
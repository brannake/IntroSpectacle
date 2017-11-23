import React, { Component } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

class About extends Component {

  render() {
    console.log("how can this run without the console log firing???");
    return (
      <div>
        <Navbar
          currentdate={this.props.currentDate}
          selectedDate={this.props.selectedDate}
          month={this.props.selectedMonth}
          currentMonth={this.props.currentMonth}
        >
        </Navbar>
        WHY THE FUCKf

        gfh
        fgh
        fgh
        fghs
        <Footer/>
      </div>
    )};
};

export default About;
import React, { Component } from "react";
import API from "../../utils/API";
import Panel from "./Panel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SubmitForm from "./SubmitForm";
import SubmitTextForm from "./SubmitTextForm";


class Home extends Component {
  state = {
    month: '',
    day:'',
    firstRowDates: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    secondRowDates: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    thirdRowDates: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  };

  // Getting all quotes when the component mounts
  componentDidMount() {
  }

myMonthCallback = (dataFromChild) => {
    this.setState({month: dataFromChild});
    console.log(this.state.month);
}

myDayCallback = (dataFromChild) => {
  this.setState({day: dataFromChild});
  console.log(this.state.day);
}

  renderFirstDates() {
    return this.state.firstRowDates.map(date => (
      <Panel
        key={date}
        date={date}
        callbackfromParent = {this.myDayCallback}
      >
      </Panel>
    ));
  }
  renderSecondDates() {
    return this.state.secondRowDates.map(date => (
      <Panel
        key={date}
        date={date}
        callbackfromParent = {this.myDayCallback}
      >
      </Panel>
    ));
  }
  renderThirdDates() {
    return this.state.thirdRowDates.map(date => (
      <Panel
        key={date}
        date={date}
        callbackfromParent = {this.myDayCallback}
      >
      </Panel>
    ));
  }

  render() {
    return (
    <div>
      <Navbar
      callbackfromParent={this.myMonthCallback}
      />
      <div className="calendar">
        <div className="row">
        {this.renderFirstDates()}
        </div>
        <div className="row">
          <hr />
          {this.renderSecondDates()}
        </div>
        <div className="row">
          <hr />
          {this.renderThirdDates()}
        </div>
      </div>
      <Footer/>
      <SubmitForm/>
      <SubmitTextForm/>
    </div>
    );
  }
}

export default Home;

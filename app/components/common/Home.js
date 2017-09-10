import React, { Component } from "react";
import { render } from 'react-dom';
import API from "../../utils/API";
import Panel from "./Panel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SubmitForm from "./SubmitForm";
import SubmitTextForm from "./SubmitTextForm";
import {Modal, Button} from 'react-materialize'

class Home extends Component {
  state = {
    month: '',
    day:'',
    dateSelected: false,
    firstRowDates: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    secondRowDates: [1, 2, 3, 4, 5, 6, 7],
    thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
    fourthRowDates: [15, 16, 17, 18, 19, 20, 21,],
    fifthRowDates: [22, 23, 24, 25, 26, 27, 28,],
    sixthRowDates: [29, 30, 31]
  };

  // Getting all quotes when the component mounts
  componentDidMount() {
  }

myMonthCallback = (dataFromChild) => {
    this.setState({month: dataFromChild});
}

myDayCallback = (dataFromChild) => {
  this.setState({day: dataFromChild});
}

//Rendering 7 days per row
//First 7 panels are for the day headings (Monday, Tuesday, etc...)
  renderFirstDates() {
    return this.state.firstRowDates.map(date => (
      <Panel
        id="day-headings-replace"
        key={date}
        date={date}
      >
      </Panel>
    ));
  }
  renderSecondDates(datesArray) {
    return datesArray.map(date => (
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
      day = {this.state.day}
      month = {this.state.month}
      />
      <div className="calendar">
        <div className="row" id="day-headings">
        {this.renderFirstDates()}
        </div>
        <div className="row">
          <hr/>
          {this.renderSecondDates(this.state.secondRowDates)}
        </div>
        <div className="row">
          <hr />
          {this.renderSecondDates(this.state.thirdRowDates)}
        </div>
        <div className="row">
          <hr />
          {this.renderSecondDates(this.state.fourthRowDates)}
        </div>
        <div className="row">
          <hr />
          {this.renderSecondDates(this.state.fifthRowDates)}
        </div>
        <div className="row">
          <hr />
          {this.renderSecondDates(this.state.sixthRowDates)}
        </div>
        </div>
      <Footer/>
      <div>
	      <Button onClick={() => {
		      $('#foo').modal('open')
	        }}>Submit</Button>
	      <Modal
		      id='foo'
		      header='Daily Submission'>
		      Add a photo you think captures your mood and a brief description of what you did.
          <SubmitForm/>
          <SubmitTextForm/>
	      </Modal>
      </div>;
    </div>
    );
  }
}

export default Home;

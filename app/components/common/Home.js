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

//These are separated out so you can see what it's doing
//Rendering 10 (or 11) days per row
  renderFirstDates() {
    return this.state.firstRowDates.map(date => (
      <Panel
        id="day-headings-replace"
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
  renderFourthDates() {
    return this.state.fourthRowDates.map(date => (
      <Panel
        key={date}
        date={date}
        callbackfromParent = {this.myDayCallback}
      >
      </Panel>
    ));
  }

  renderFifthDates() {
    return this.state.fifthRowDates.map(date => (
      <Panel
        key={date}
        date={date}
        callbackfromParent = {this.myDayCallback}
      >
      </Panel>
    ));
  }
  renderSixthDates() {
    return this.state.sixthRowDates.map(date => (
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
          {this.renderSecondDates()}
        </div>
        <div className="row">
          <hr />
          {this.renderThirdDates()}
        </div>
        <div className="row">
          <hr />
          {this.renderFourthDates()}
        </div>
        <div className="row">
          <hr />
          {this.renderFifthDates()}
        </div>
        <div className="row">
          <hr />
          {this.renderSixthDates()}
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

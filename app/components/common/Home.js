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
    user: 'default',
    images: [],
    month: '',
    day: '',
    dateSelected: '',
    mounted: false,
    firstRowDates: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    secondRowDates: [1, 2, 3, 4, 5, 6, 7],
    thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
    fourthRowDates: [15, 16, 17, 18, 19, 20, 21,],
    fifthRowDates: [22, 23, 24, 25, 26, 27, 28,],
    sixthRowDates: [29, 30, 31]
  };

  //Takes calendar to the current date
  componentWillMount() {
    if (this.state.mounted === false ) {
      let date = new Date();
      let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
      this.setState({day: dd});
      let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
      if (MM == "01") {
        this.setState({month: "January"})
      }
      if (MM == "02") {
        this.setState({month: "February"})
      }
      if (MM == "03") {
        this.setState({month: "March"})
      }
      if (MM == "04") {
        this.setState({month: "April"})
      }
      if (MM == "05") {
        this.setState({month: "May"})
      }
      if (MM == "06") {
        this.setState({month: "June"})
      }
      if (MM == "07") {
        this.setState({month: "July"})
      }
      if (MM == "08") {
        this.setState({month: "August"})
      }
      if (MM == "09") {
        this.setState({month: "September"})
      }
      if (MM == "10") {
        this.setState({month: "October"})
      }
      if (MM == "11") {
        this.setState({month: "November"})
      }
      if (MM == "12") {
        this.setState({month: "December"})
      }
    }
    this.setState({mounted: true});
  }

  //Callback passed down to child components (Navbar) to get back user-selected month
  //All the dates for the year are stored here
  //May consider separating this out into another file to reduce clutter
  myMonthCallback = (dataFromChild) => {
    this.setState({month: dataFromChild, day: ''}, () => {
      if (this.state.month === "January") {
        this.setState({secondRowDates: [1, 2, 3, 4, 5, 6, 7],
                       thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
                       fourthRowDates: [15, 16, 17, 18, 19, 20, 21],
                       fifthRowDates: [22, 23, 24, 25, 26, 27, 28,],
                       sixthRowDates: [29, 30, 31]
                      });
      }
      if (this.state.month === "February") {
        this.setState({secondRowDates: [1, 2, 3, 4, 5, 6, 7],
                       thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
                       fourthRowDates: [15, 16, 17, 18, 19, 20, 21],
                       fifthRowDates: [22, 23, 24, 25, 26, 27, 28,],
                       sixthRowDates: [29, 30, 31]
                      });
      }
      if (this.state.month === "March") {
        this.setState({secondRowDates: [1, 2, 3, 4, 5, 6, 7],
                       thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
                       fourthRowDates: [15, 16, 17, 18, 19, 20, 21],
                       fifthRowDates: [22, 23, 24, 25, 26, 27, 28,],
                       sixthRowDates: [29, 30, 31]
                      });
      }
      if (this.state.month === "April") {
        this.setState({secondRowDates: [1, 2, 3, 4, 5, 6, 7],
                       thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
                       fourthRowDates: [15, 16, 17, 18, 19, 20, 21],
                       fifthRowDates: [22, 23, 24, 25, 26, 27, 28,],
                       sixthRowDates: [29, 30, 31]
                      });
      }
      if (this.state.month === "May") {
        this.setState({secondRowDates: [1, 2, 3, 4, 5, 6, 7],
                       thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
                       fourthRowDates: [15, 16, 17, 18, 19, 20, 21],
                       fifthRowDates: [22, 23, 24, 25, 26, 27, 28,],
                       sixthRowDates: [29, 30, 31]
                      });
      }               
      if (this.state.month === "June") {
        this.setState({secondRowDates: [1, 2, 3, 4, 5, 6, 7],
                       thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
                       fourthRowDates: [15, 16, 17, 18, 19, 20, 21],
                       fifthRowDates: [22, 23, 24, 25, 26, 27, 28,],
                       sixthRowDates: [29, 30, 31]
                      });
      }       
      if (this.state.month === "July") {
        this.setState({secondRowDates: [1, 2, 3, 4, 5, 6, 7],
                       thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
                       fourthRowDates: [15, 16, 17, 18, 19, 20, 21],
                       fifthRowDates: [22, 23, 24, 25, 26, 27, 28,],
                       sixthRowDates: [29, 30, 31]
                      });
      }
      if (this.state.month === "August") {
        this.setState({secondRowDates: [1, 2, 3, 4, 5, 6, 7],
                       thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
                       fourthRowDates: [15, 16, 17, 18, 19, 20, 21],
                       fifthRowDates: [22, 23, 24, 25, 26, 27, 28,],
                       sixthRowDates: [29, 30, 31]
                      });
      }
      if (this.state.month === "September") {
        this.setState({secondRowDates: [1, 2, 3, 4, 5, 6, 7],
                       thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
                       fourthRowDates: [15, 16, 17, 18, 19, 20, 21],
                       fifthRowDates: [22, 23, 24, 25, 26, 27, 28,],
                       sixthRowDates: [29, 30, 31]
                      });
      }
      if (this.state.month === "October") {
        this.setState({secondRowDates: [1, 2, 3, 4, 5, 6, 7],
                       thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
                       fourthRowDates: [15, 16, 17, 18, 19, 20, 21],
                       fifthRowDates: [22, 23, 24, 25, 26, 27, 28,],
                       sixthRowDates: [29, 30, 31]
                      });
      }
      if (this.state.month === "November") {
        this.setState({secondRowDates: [1, 2, 3, 4, 5, 6, 7],
                       thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
                       fourthRowDates: [15, 16, 17, 18, 19, 20, 21],
                       fifthRowDates: [22, 23, 24, 25, 26, 27, 28,],
                       sixthRowDates: [29, 30, 31]
                      });
      }
      if (this.state.month === "December") {
        this.setState({secondRowDates: [1, 2, 3, 4, 5, 6, 7],
                       thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
                       fourthRowDates: [15, 16, 17, 18, 19, 20, 21],
                       fifthRowDates: [22, 23, 24, 25, 26, 27, 28,],
                       sixthRowDates: [29, 30, 31]
                      });     
      };
    });
  };

   //Callback passed down to child components (Panel) to get back user-selected day
  myDayCallback = (dataFromChild) => {
    this.setState({dateSelected: dataFromChild});
  }

//Rendering 7 days per row
//First 7 panels are for the day headings (Monday, Tuesday, etc...)
  renderFirstDates(datesArray) {
    return datesArray.map(date => (
      <Panel
        id="day-headings-replace"
        key={date}
        date={date}
      >
      </Panel>
    ));
  }

  //Renders the actual numeric dates on the calendar
  renderSecondDates(datesArray) {
    return datesArray.map(date => (
      <Panel
        key={date}
        date={date}
        currentdate={this.state.day}
        dateselected={this.state.dateSelected}
        callbackfromParent = {this.myDayCallback}
        images={this.props.images}
      >
      </Panel>
    ));
  }

  render() {
    return (
    <div>
      <Navbar
      callbackfromParent={this.myMonthCallback}
      day = {this.state.dateSelected}
      month = {this.state.month}
      />
      <div className="calendar">
        <div className="row" id="day-headings">
        {this.renderFirstDates(this.state.firstRowDates)}
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
      <div className="row">
        <div className="col s4">
        </div>
	      <Button
          id="modal-submit" 
          onClick={() => {
		        $('#foo').modal('open')
	          }}>
          Submit
        </Button>
	      <Modal
		      id='foo'
		      header={this.state.month +" "+ this.state.dateSelected}>
		      Add a photo you think captures your mood and a brief description of what you did.
          <SubmitForm
            selectedDate={this.state.dateSelected}
            selectedMonth={this.state.month}/>
          <SubmitTextForm/>
	      </Modal>
      </div>
    </div>
    );
  }
}

export default Home;

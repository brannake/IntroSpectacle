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
    imageData: [],
    month: '',
    currentMonth: '',
    day: '',
    currentDate: '',
    dateSelected: '',
    mounted: false,
    firstRowDates: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    secondRowDates: ["", " ", "  ", "   ", "    ", 1, 2],
    thirdRowDates: [3, 4, 5, 6, 7, 8, 9],
    fourthRowDates: [10, 11, 12, 13, 14, 15, 16],
    fifthRowDates: [17, 18, 19, 20, 21, 22, 23],
    sixthRowDates: [24, 25, 26, 27, 28, 29, 30]
  };

  //Takes calendar to the current date
  componentWillMount() {
    if (this.state.mounted === false ) {
      let date = new Date();
      let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
      this.setState({day: dd, currentDate: dd});
      let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
      if (MM == "01") {
        this.setState({month: "January", currentMonth: "January"})
      }
      if (MM == "02") {
        this.setState({month: "February", currentMonth: "February"})
      }
      if (MM == "03") {
        this.setState({month: "March", currentMonth: "March"})
      }
      if (MM == "04") {
        this.setState({month: "April", currentMonth: "April"})
      }
      if (MM == "05") {
        this.setState({month: "May", currentMonth: "May"})
      }
      if (MM == "06") {
        this.setState({month: "June", currentMonth: "June"})
      }
      if (MM == "07") {
        this.setState({month: "July", currentMonth: "July"})
      }
      if (MM == "08") {
        this.setState({month: "August", currentMonth: "August"})
      }
      if (MM == "09") {
        this.setState({month: "September", currentMonth: "September"})
      }
      if (MM == "10") {
        this.setState({month: "October", currentMonth: "October"})
      }
      if (MM == "11") {
        this.setState({month: "November", currentMonth: "November"})
      }
      if (MM == "12") {
        this.setState({month: "December", currentMonth: "December"})
      }
    }
    this.setState({mounted: true});
  }

  //Callback passed down to child components (Navbar) to get back user-selected month
  //All the dates for the year are stored here
  //NEED TO SEPARATE this out into another file to reduce clutter
  myMonthCallback = (dataFromChild) => {
    this.setState({month: dataFromChild, day: ''}, () => {
      if (this.state.month === "January") {
        this.setState({secondRowDates: [1, 2, 3, 4, 5, 6, 7],
                       thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
                       fourthRowDates: [15, 16, 17, 18, 19, 20, 21],
                       fifthRowDates: [22, 23, 24, 25, 26, 27, 28],
                       sixthRowDates: [29, 30, 31]
                      });
      }
      if (this.state.month === "February") {
        this.setState({secondRowDates: ["", " ", "  ", 1, 2, 3, 4],
                       thirdRowDates: [5, 6, 7, 8, 9, 10, 11],
                       fourthRowDates: [12, 13, 14, 15, 16, 17, 18],
                       fifthRowDates: [19, 20, 21, 22, 23, 24, 25],
                       sixthRowDates: [26, 27, 28]
                      });
      }
      if (this.state.month === "March") {
        this.setState({secondRowDates: ["", " ", "  ", 1, 2, 3, 4],
                       thirdRowDates: [5, 6, 7, 8, 9, 10, 11],
                       fourthRowDates: [12, 13, 14, 15, 16, 17, 18],
                       fifthRowDates: [19, 20, 21, 22, 23, 24, 25],
                       sixthRowDates: [26, 27, 28, 29, 30, 31]
                      });
      }
      if (this.state.month === "April") {
        this.setState({secondRowDates: ["", " ", "  ", "   ", "    ", "     ", 1],
                       thirdRowDates: [2, 3, 4, 5, 6, 7, 8],
                       fourthRowDates: [9, 10, 11, 12, 13, 14, 15],
                       fifthRowDates: [16, 17, 18, 19, 20, 21, 22],
                       sixthRowDates: [23, 24, 25, 26, 27, 28, 29]
                      });
      }
      if (this.state.month === "May") {
        this.setState({secondRowDates: ["", 1, 2, 3, 4, 5, 6],
                       thirdRowDates: [7, 8, 9, 10, 11, 12, 13],
                       fourthRowDates: [14, 15, 16, 17, 18, 19, 20],
                       fifthRowDates: [21, 22, 23, 24, 25, 26, 27],
                       sixthRowDates: [28, 29, 30, 31]
                      });
      }               
      if (this.state.month === "June") {
        this.setState({secondRowDates: ["", " ", "  ", "   ", 1, 2, 3],
                       thirdRowDates: [4, 5, 6, 7, 8, 9, 10],
                       fourthRowDates: [11, 12, 13, 14, 15, 16, 17],
                       fifthRowDates: [18, 19, 20, 21, 22, 23, 24],
                       sixthRowDates: [25, 26, 27, 28, 29, 30]
                      });
      }       
      if (this.state.month === "July") {
        this.setState({secondRowDates: ["", " ", "  ", "   ", "    ", "     ", 1],
                       thirdRowDates: [2, 3, 4, 5, 6, 7, 8],
                       fourthRowDates: [9, 10, 11, 12, 13, 14, 15],
                       fifthRowDates: [16, 17, 18, 19, 20, 21, 22],
                       sixthRowDates: [29, 30, 31]
                      });
      }
      if (this.state.month === "August") {
        this.setState({secondRowDates: ["", " ", 1, 2, 3, 4, 5],
                       thirdRowDates: [6, 7, 8, 9, 10, 11, 12],
                       fourthRowDates: [13, 14, 15, 16, 17, 18, 19],
                       fifthRowDates: [20, 21, 22, 23, 24, 25, 26],
                       sixthRowDates: [27, 28, 29, 30, 31]
                      });
      }
      if (this.state.month === "September") {
        this.setState({secondRowDates: ["", " ", "  ", "   ", "    ", 1, 2],
                       thirdRowDates: [3, 4, 5, 6, 7, 8, 9],
                       fourthRowDates: [10, 11, 12, 13, 14, 15, 16],
                       fifthRowDates: [17, 18, 19, 20, 21, 22, 23],
                       sixthRowDates: [24, 25, 26, 27, 28, 29, 30]
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
        this.setState({secondRowDates: ["", " ", "  ", 1, 2, 3, 4],
                       thirdRowDates: [5, 6, 7, 8, 9, 10, 11],
                       fourthRowDates: [12, 13, 14, 15, 16, 17, 18],
                       fifthRowDates: [19, 20, 21, 22, 23, 24, 25],
                       sixthRowDates: [26, 27, 28]
                      });
      }
      if (this.state.month === "December") {
        this.setState({secondRowDates: ["", " ", "  ", "    ", "     ", 1, 2],
                       thirdRowDates: [3, 4, 5, 6, 7, 8, 9],
                       fourthRowDates: [10, 11, 12, 13, 14, 15, 16],
                       fifthRowDates: [17, 18, 19, 20, 21, 22, 23],
                       sixthRowDates: [24, 25, 26, 27, 28, 29, 30, 31]
                      });     
      };
    });
  };

   //Callback passed down to child components (Panel) to get back user-selected day
  myDayCallback = (dataFromPanel) => {
    this.setState({dateSelected: dataFromPanel});
  }

  //Takes imageData from Main before passing it down to Panel
  storeImageData() {
    this.setState({imageData: this.props.imageData});
  }

//Rendering 7 days per row
//First 7 panels are for the day headings (Monday, Tuesday, etc...)
  renderFirstDates(datesArray) {
    return datesArray.map(date => (
      <Panel
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
        day={this.state.day}
        currentdate={this.state.currentDate}
        month={this.state.month}
        currentmonth={this.state.currentMonth}
        dateselected={this.state.dateSelected}
        callbackfromParent={this.myDayCallback}
        imageData={this.props.imageData}
      >
      </Panel>
    ));
  }

  handleModalMessage = (date) => {
    console.log(date);
    if (date == "") {
      return (
        <div>Please select a date before submitting.</div>
      )
    } else {
      return (
        <div>Submit a photo and a brief description of your day.</div>
      )
    }
  }

  render() {
    return (
    <div>
      <Navbar
      callbackfromParent={this.myMonthCallback}
      currentdate={this.state.day}
      day={this.state.dateSelected}
      month={this.state.month}
      currentMonth={this.state.currentMonth}
      />
      <div className="calendar">
        <div className="row" id="day-headings">
          {this.renderFirstDates(this.state.firstRowDates)}
        </div>
        <div className="row">
          {this.renderSecondDates(this.state.secondRowDates)}
        </div>
        <div className="row">
          {this.renderSecondDates(this.state.thirdRowDates)}
        </div>
        <div className="row">
          {this.renderSecondDates(this.state.fourthRowDates)}
        </div>
        <div className="row">
          {this.renderSecondDates(this.state.fifthRowDates)}
        </div>
        <div className="row">
          {this.renderSecondDates(this.state.sixthRowDates)}
        </div>
      </div>
      <div id="side-display-container">
        <div id="side-display">sdfsdf</div>
      </div>
      <Footer/>
      <div className="row">
        <div className="col s3">
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
            {this.handleModalMessage(this.state.dateSelected)}
          <SubmitForm
            selectedDate={this.state.dateSelected}
            selectedMonth={this.state.month}
            refreshImages={this.props.refreshImages}
            />
          <SubmitTextForm/>
	      </Modal>
      </div>
    </div>
    );
  }
}

export default Home;
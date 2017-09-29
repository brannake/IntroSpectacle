import React, { Component } from "react";
import { render } from 'react-dom';
import API from "../../utils/API";
import Panel from "./Panel";
import DayHeadingPanel from "./DayHeadingPanel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SubmitForm from "./SubmitForm";
<<<<<<< HEAD
import SubmitTextForm from "./SubmitTextForm";
import SideDisplay from "./SideDisplay";
import {Modal, Button, Slide, Slider} from 'react-materialize';

=======
import SideDisplay from "./SideDisplay";
import {Modal, Button} from 'react-materialize';
import CalendarHeatmap from 'react-calendar-heatmap';
>>>>>>> 0448cae06fd4f4d58f455f83d02e23a6fec22517

class Home extends Component {
  state = {
    user: 'default',
    imageData: [],
    month: '',
    currentMonth: '',
    day: '',
    currentDate: '',
<<<<<<< HEAD
=======
    selectedView: 'monthly',
>>>>>>> 0448cae06fd4f4d58f455f83d02e23a6fec22517
    dateSelected: '',
    dateSelectedSrc: "",
    mounted: false,
    firstRowDates: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    secondRowDates: ["", " ", "  ", "   ", "    ", 1, 2],
    thirdRowDates: [3, 4, 5, 6, 7, 8, 9],
    fourthRowDates: [10, 11, 12, 13, 14, 15, 16],
    fifthRowDates: [17, 18, 19, 20, 21, 22, 23],
    sixthRowDates: [24, 25, 26, 27, 28, 29, 30]
  };

  //Takes calendar to the current date
  //Need to separate these out into other files to reduce clutter
  componentWillMount() {
    if (this.state.mounted === false ) {
      let date = new Date();
      let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
      this.setState({day: dd, currentDate: dd});
<<<<<<< HEAD
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
=======
      window.CONTEXT.currentdate = dd;
      let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
      if (MM == "01") {
        this.setState({month: "January", currentMonth: "January"})
        window.CONTEXT.month = "January";
      }
      if (MM == "02") {
        this.setState({month: "February", currentMonth: "February"})
        window.CONTEXT.month = "February";
      }
      if (MM == "03") {
        this.setState({month: "March", currentMonth: "March"})
        window.CONTEXT.month = "March";
      }
      if (MM == "04") {
        this.setState({month: "April", currentMonth: "April"})
        window.CONTEXT.month = "April";
      }
      if (MM == "05") {
        this.setState({month: "May", currentMonth: "May"})
        window.CONTEXT.month = "May";
      }
      if (MM == "06") {
        this.setState({month: "June", currentMonth: "June"})
        window.CONTEXT.month = "June";
      }
      if (MM == "07") {
        this.setState({month: "July", currentMonth: "July"})
        window.CONTEXT.month = "July";
      }
      if (MM == "08") {
        this.setState({month: "August", currentMonth: "August"})
        window.CONTEXT.month = "August";
      }
      if (MM == "09") {
        this.setState({month: "September", currentMonth: "September"})
        window.CONTEXT.month = "September";
      }
      if (MM == "10") {
        this.setState({month: "October", currentMonth: "October"})
        window.CONTEXT.month = "October";
      }
      if (MM == "11") {
        this.setState({month: "November", currentMonth: "November"})
        window.CONTEXT.month = "November";
      }
      if (MM == "12") {
        this.setState({month: "December", currentMonth: "December"})
        window.CONTEXT.month = "December";
>>>>>>> 0448cae06fd4f4d58f455f83d02e23a6fec22517
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
<<<<<<< HEAD
=======
    window.CONTEXT.day = dataFromPanel; 
>>>>>>> 0448cae06fd4f4d58f455f83d02e23a6fec22517
  }

  getImageCallback = (imageSrc) => {
    this.setState({dateSelectedSrc: imageSrc})
  }

  //Takes imageData from Main before passing it down to Panel
  storeImageData() {
    this.setState({imageData: this.props.imageData});
  }

//Rendering 7 days per row
//First 7 panels are for the day headings (Monday, Tuesday, etc...)
  renderFirstDates(datesArray) {
    return datesArray.map(date => (
<<<<<<< HEAD
      <Panel
=======
      <DayHeadingPanel
>>>>>>> 0448cae06fd4f4d58f455f83d02e23a6fec22517
        key={date}
        date={date}
      >
      </DayHeadingPanel>
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
        callbackforImage={this.getImageCallback}
        imageData={this.props.imageData}
      >
      </Panel>
    ));
  }

<<<<<<< HEAD
  //Generates the modal message, forces the user to pick a date
  handleModalMessage = (date) => {
    if (date.replace(/\s/g, '').length === 0) {
      return (
        <div id="warning-modal">Please select a date before submitting.</div>
      )
    } else {
      return (
        <div>Submit a photo and a brief description of your day.</div>
      )
    }
  }
=======
  //Adds the user-submitted caption to the examination modal
  //Forces the user to pick a date before they can examine
  handleModalMessage = (data, date, month) => {
    if (date.replace(/\s/g, '').length === 0) {
      return (
        <div id="warning-modal">Please select a date to examine.</div>
      )
    } else {
        for (let i=0; i < data.length; i++) {
          if (parseInt(date) === parseInt(data[i].day) && month === data[i].month) {
            return (
              <div>
              <div id="caption-text-display-message">{data[i].text}</div>
                <table className="bordered" id="score-display">
                <thead>
                  <tr>
                    <th>Mood</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Overall
                      <img
                        className="emoticon"
                        id="overall"
                        src="https://cdn.pixabay.com/photo/2017/03/05/21/55/emoticon-2120024_960_720.png"
                      />
                    </td>
                    <td>{parseFloat(data[i].joy_score * 100).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td
                    >Anger
                    <img
                        className="emoticon"
                        id="angry"
                        src="https://i.pinimg.com/736x/4f/49/65/4f4965192fc86eeb8057219075ebc2bd--angry-emoji-the-emoji.jpg"
                      />
                    </td>
                    <td>{parseFloat(data[i].anger_score * 100).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Fear
                    <img
                        className="emoticon"
                        id="fear"
                        src="http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-10/256/face-screaming-in-fear.png"
                      />
                    </td>
                    <td>{parseFloat(data[i].fear_score * 100).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Disgust
                    <img
                        className="emoticon"
                        id="disgusts"
                        src="http://cdn.makeuseof.com/wp-content/uploads/2015/06/23_emoji.png?x85023"
                      />
                    </td>
                    <td>{parseFloat(data[i].disgust_score * 100).toFixed(2)}</td>
                  </tr>
                </tbody>
               </table>
              </div>
            )
          }
        }
      }
    }
>>>>>>> 0448cae06fd4f4d58f455f83d02e23a6fec22517

  render() {
    return (
    <div>
      <Navbar
<<<<<<< HEAD
      callbackfromParent={this.myMonthCallback}
      currentdate={this.state.day}
      day={this.state.dateSelected}
      month={this.state.month}
      currentMonth={this.state.currentMonth}
=======
        callbackfromParent={this.myMonthCallback}
        currentdate={this.state.day}
        day={this.state.dateSelected}
        month={this.state.month}
        currentMonth={this.state.currentMonth}
>>>>>>> 0448cae06fd4f4d58f455f83d02e23a6fec22517
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
<<<<<<< HEAD
      <SideDisplay
        imageSrc={this.state.dateSelectedSrc}
      />
      <Footer/>
      <div className="row">
        <div className="col s3">
        </div>
	      <Button
=======
      <Footer/>
      <div className="row">
	      <Button 
          waves='light'
>>>>>>> 0448cae06fd4f4d58f455f83d02e23a6fec22517
          id="modal-submit" 
          onClick={() => {
		        $('#modal').modal('open')
	          }}>
          Examine
        </Button>
	      <Modal
		      id="modal"
<<<<<<< HEAD
		      header={this.state.month +" "+ this.state.dateSelected}>
            {this.handleModalMessage(this.state.dateSelected)}
=======
		      header={this.state.month +" "+ this.state.dateSelected}
        >
            <div id="caption-text-display">
              {this.handleModalMessage(this.props.imageData, this.state.dateSelected, this.state.month)}
            </div>
>>>>>>> 0448cae06fd4f4d58f455f83d02e23a6fec22517
          <SubmitForm
            data={this.props.imageData}
            selectedDate={this.state.dateSelected}
            selectedMonth={this.state.month}
            refreshImages={this.props.refreshImages}
<<<<<<< HEAD
            />
          <SubmitTextForm/>
=======
          />
>>>>>>> 0448cae06fd4f4d58f455f83d02e23a6fec22517
	      </Modal>
        <div id="side-display-container"></div>
      </div>
    </div>
    );
  }
}

export default Home;
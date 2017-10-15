import React, { Component } from "react";
import { render } from 'react-dom';
import Panel from "./Panel";
import DayHeadingPanel from "./DayHeadingPanel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SubmitForm from "./SubmitForm";
import SideDisplay from "./SideDisplay";
import {Modal, Button} from 'react-materialize';

class Home extends Component {
  state = {
    user: 'default',
    imageData: [],
    month: this.props.currentMonth,
    currentMonth: this.props.currentMonth,
    day: this.props.currentDate,
    currentDate: this.props.currentDate,
    selectedView: 'monthly',
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

  buildCalendarDates = () => {
      if (this.state.currentMonth === "January") {
        this.setState({secondRowDates: [1, 2, 3, 4, 5, 6, 7],
                       thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
                       fourthRowDates: [15, 16, 17, 18, 19, 20, 21],
                       fifthRowDates: [22, 23, 24, 25, 26, 27, 28],
                       sixthRowDates: [29, 30, 31]
                      });
      }
      if (this.state.currentMonth === "February") {
        this.setState({secondRowDates: ["", " ", "  ", 1, 2, 3, 4],
                       thirdRowDates: [5, 6, 7, 8, 9, 10, 11],
                       fourthRowDates: [12, 13, 14, 15, 16, 17, 18],
                       fifthRowDates: [19, 20, 21, 22, 23, 24, 25],
                       sixthRowDates: [26, 27, 28]
                      });
      }
      if (this.state.currentMonth === "March") {
        this.setState({secondRowDates: ["", " ", "  ", 1, 2, 3, 4],
                       thirdRowDates: [5, 6, 7, 8, 9, 10, 11],
                       fourthRowDates: [12, 13, 14, 15, 16, 17, 18],
                       fifthRowDates: [19, 20, 21, 22, 23, 24, 25],
                       sixthRowDates: [26, 27, 28, 29, 30, 31]
                      });
      }
      if (this.state.currentMonth === "April") {
        this.setState({secondRowDates: ["", " ", "  ", "   ", "    ", "     ", 1],
                       thirdRowDates: [2, 3, 4, 5, 6, 7, 8],
                       fourthRowDates: [9, 10, 11, 12, 13, 14, 15],
                       fifthRowDates: [16, 17, 18, 19, 20, 21, 22],
                       sixthRowDates: [23, 24, 25, 26, 27, 28, 29]
                      });
      }
      if (this.state.currentMonth === "May") {
        this.setState({secondRowDates: ["", 1, 2, 3, 4, 5, 6],
                       thirdRowDates: [7, 8, 9, 10, 11, 12, 13],
                       fourthRowDates: [14, 15, 16, 17, 18, 19, 20],
                       fifthRowDates: [21, 22, 23, 24, 25, 26, 27],
                       sixthRowDates: [28, 29, 30, 31]
                      });
      }               
      if (this.state.currentMonth === "June") {
        this.setState({secondRowDates: ["", " ", "  ", "   ", 1, 2, 3],
                       thirdRowDates: [4, 5, 6, 7, 8, 9, 10],
                       fourthRowDates: [11, 12, 13, 14, 15, 16, 17],
                       fifthRowDates: [18, 19, 20, 21, 22, 23, 24],
                       sixthRowDates: [25, 26, 27, 28, 29, 30]
                      });
      }       
      if (this.state.currentMonth === "July") {
        this.setState({secondRowDates: ["", " ", "  ", "   ", "    ", "     ", 1],
                       thirdRowDates: [2, 3, 4, 5, 6, 7, 8],
                       fourthRowDates: [9, 10, 11, 12, 13, 14, 15],
                       fifthRowDates: [16, 17, 18, 19, 20, 21, 22],
                       sixthRowDates: [29, 30, 31]
                      });
      }
      if (this.state.currentMonth === "August") {
        this.setState({secondRowDates: ["", " ", 1, 2, 3, 4, 5],
                       thirdRowDates: [6, 7, 8, 9, 10, 11, 12],
                       fourthRowDates: [13, 14, 15, 16, 17, 18, 19],
                       fifthRowDates: [20, 21, 22, 23, 24, 25, 26],
                       sixthRowDates: [27, 28, 29, 30, 31]
                      });
      }
      if (this.state.currentMonth === "September") {
        this.setState({secondRowDates: ["", " ", "  ", "   ", "    ", 1, 2],
                       thirdRowDates: [3, 4, 5, 6, 7, 8, 9],
                       fourthRowDates: [10, 11, 12, 13, 14, 15, 16],
                       fifthRowDates: [17, 18, 19, 20, 21, 22, 23],
                       sixthRowDates: [24, 25, 26, 27, 28, 29, 30]
                      });
      }
      if (this.state.currentMonth === "October") {
        this.setState({secondRowDates: [1, 2, 3, 4, 5, 6, 7],
                       thirdRowDates: [8, 9, 10, 11, 12, 13, 14],
                       fourthRowDates: [15, 16, 17, 18, 19, 20, 21],
                       fifthRowDates: [22, 23, 24, 25, 26, 27, 28,],
                       sixthRowDates: [29, 30, 31]
                      });
      }
      if (this.state.currentMonth === "November") {
        this.setState({secondRowDates: ["", " ", "  ", 1, 2, 3, 4],
                       thirdRowDates: [5, 6, 7, 8, 9, 10, 11],
                       fourthRowDates: [12, 13, 14, 15, 16, 17, 18],
                       fifthRowDates: [19, 20, 21, 22, 23, 24, 25],
                       sixthRowDates: [26, 27, 28, 29, 30]
                      });
      }
      if (this.state.currentMonth === "December") {
        this.setState({secondRowDates: ["", " ", "  ", "   ", "    ", 1, 2],
                       thirdRowDates: [3, 4, 5, 6, 7, 8, 9],
                       fourthRowDates: [10, 11, 12, 13, 14, 15, 16],
                       fifthRowDates: [17, 18, 19, 20, 21, 22, 23],
                       sixthRowDates: [24, 25, 26, 27, 28, 29, 30],
                       seventhRowDates: [31]
                      });     
      };
  };

  //Callback passed down to child components (Navbar) to get back user-selected month
  myMonthCallback = (dataFromChild) => {
    this.setState({month: dataFromChild})
  };

  //Callback passed down to child components (Panel) to get back user-selected day
  myDayCallback = (dataFromPanel) => {
    this.setState({dateSelected: dataFromPanel});
  }

  //Callback passed down to child components (Panel) to get back image
  getImageCallback = (imageSrc) => {
    this.setState({dateSelectedSrc: imageSrc})
  }

  //Takes imageData from Main before passing it down to Panel
  storeImageData = () => {
    this.setState({imageData: this.props.imageData});
  }

//Rendering 7 days per row
//First 7 panels are for the day headings (Monday, Tuesday, etc...)
  renderFirstDates(datesArray) {
    return datesArray.map(date => (
      <DayHeadingPanel
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

    componentWillMount= () => {
      this.buildCalendarDates();
    }

  render() {
    return (
    <div>
      <Navbar
        callbackfromParent={this.myMonthCallback}
        currentdate={this.state.day}
        day={this.state.dateSelected}
        month={this.state.month}
        currentMonth={this.props.currentMonth}
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
      <Footer/>
      <div className="row">
	      <Button 
          waves='light'
          id="modal-submit" 
          onClick={() => {
		        $('#modal').modal('open')
	          }}>
          Examine
        </Button>
	      <Modal
		      id="modal"
		      header={this.state.month +" "+ this.state.dateSelected}
        >
            <div id="caption-text-display">
              {this.handleModalMessage(this.props.imageData, this.state.dateSelected, this.state.month)}
            </div>
          <SubmitForm
            data={this.props.imageData}
            selectedDate={this.state.dateSelected}
            selectedMonth={this.state.month}
            refreshImages={this.props.refreshImages}
          />
	      </Modal>
        <div id="side-display-container"></div>
      </div>
    </div>
    );
  }
}

export default Home;
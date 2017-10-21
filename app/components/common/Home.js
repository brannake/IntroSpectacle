import React, {Component} from "react";
import {render} from 'react-dom';
import Panel from "./Panel";
import DayHeadingPanel from "./DayHeadingPanel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SubmitForm from "./SubmitForm";
import SideDisplay from "./SideDisplay";
import {Modal, Button} from 'react-materialize';

class Home extends Component {
  state = {
    dateSelectedSrc: "",
    firstRowHeadings: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dates: [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27, 28],
      [29, 30, 31]
    ]
  };

  buildCalendarDates = () => {
      if (this.props.currentMonth === "January") {
        this.setState({dates: [
          [1, 2, 3, 4, 5, 6, 7], 
          [8, 9, 10, 11, 12, 13, 14],
          [15, 16, 17, 18, 19, 20, 21],
          [22, 23, 24, 25, 26, 27, 28],
          [29, 30, 31]
        ]});
      }

      if (this.props.currentMonth === "February") {
        this.setState({dates: [
          ["", " ", "  ", 1, 2, 3, 4],
          [5, 6, 7, 8, 9, 10, 11],
          [12, 13, 14, 15, 16, 17, 18],
          [19, 20, 21, 22, 23, 24, 25],
          [26, 27, 28]
        ]});
      }

      if (this.props.currentMonth === "March") {
        this.setState({dates: [
          ["", " ", "  ", 1, 2, 3, 4],
          [5, 6, 7, 8, 9, 10, 11],
          [12, 13, 14, 15, 16, 17, 18],
          [19, 20, 21, 22, 23, 24, 25],
          [26, 27, 28, 29, 30, 31]
        ]});
      }

      if (this.props.currentMonth === "April") {
        this.setState({dates: [
          ["", " ", "  ", "   ", "    ", "     ", 1],
          [2, 3, 4, 5, 6, 7, 8],
          [9, 10, 11, 12, 13, 14, 15],
          [16, 17, 18, 19, 20, 21, 22],
          [23, 24, 25, 26, 27, 28, 29]
        ]});
      }

      if (this.props.currentMonth === "May") {
        this.setState({dates: [
          ["", 1, 2, 3, 4, 5, 6],
          [7, 8, 9, 10, 11, 12, 13],
          [14, 15, 16, 17, 18, 19, 20],
          [21, 22, 23, 24, 25, 26, 27],
          [28, 29, 30, 31]
        ]});
      }

      if (this.props.currentMonth === "June") {
        this.setState({dates: [
          ["", " ", "  ", "   ", 1, 2, 3],
          [4, 5, 6, 7, 8, 9, 10],
          [11, 12, 13, 14, 15, 16, 17],
          [18, 19, 20, 21, 22, 23, 24],
          [25, 26, 27, 28, 29, 30]
        ]});
      }

      if (this.props.currentMonth === "July") {
        this.setState({dates: [
          ["", " ", "  ", "   ", "    ", "     ", 1],
          [2, 3, 4, 5, 6, 7, 8],
          [9, 10, 11, 12, 13, 14, 15],
          [16, 17, 18, 19, 20, 21, 22],
          [29, 30, 31]
        ]});
      }

      if (this.props.currentMonth === "August") {
        this.setState({dates: [
          ["", " ", 1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10, 11, 12],
          [13, 14, 15, 16, 17, 18, 19],
          [20, 21, 22, 23, 24, 25, 26],
          [27, 28, 29, 30, 31]
        ]});
      }

      if (this.props.currentMonth === "September") {
        this.setState({dates: [
          ["", " ", "  ", "   ", "    ", 1, 2],
          [3, 4, 5, 6, 7, 8, 9],
          [10, 11, 12, 13, 14, 15, 16],
          [17, 18, 19, 20, 21, 22, 23],
          [24, 25, 26, 27, 28, 29, 30]
        ]});
      }

      if (this.props.currentMonth === "October") {
        this.setState({dates: [
          [1, 2, 3, 4, 5, 6, 7],
          [8, 9, 10, 11, 12, 13, 14],
          [15, 16, 17, 18, 19, 20, 21],
          [22, 23, 24, 25, 26, 27, 28,],
          [29, 30, 31]
        ]});
      }

      if (this.props.currentMonth === "November") {
        this.setState({dates: [
          ["", " ", "  ", 1, 2, 3, 4],
          [5, 6, 7, 8, 9, 10, 11],
          [12, 13, 14, 15, 16, 17, 18],
          [19, 20, 21, 22, 23, 24, 25],
          [26, 27, 28, 29, 30]
        ]});
      }

      if (this.props.currentMonth === "December") {
        this.setState({dates: [
          ["", " ", "  ", "   ", "    ", 1, 2],
          [3, 4, 5, 6, 7, 8, 9],
          [10, 11, 12, 13, 14, 15, 16],
          [17, 18, 19, 20, 21, 22, 23],
          [24, 25, 26, 27, 28, 29, 30],
          [31]
        ]});     
      };
  };

//Rendering 7 days per row
//First 7 panels are for the day headings (Monday, Tuesday, etc...)
  renderFirstRowHeadings(datesArray) {
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
    return datesArray.map(week => (
      <div className="row" key={week}>
        {week.map(date => (
          <Panel
            key={date}
            date={date}
            currentdate={this.props.currentDate}
            month={this.props.selectedMonth}
            currentmonth={this.props.currentMonth}
            dateselected={this.props.selectedDate}
            storeSelectedDate={this.props.storeSelectedDate}
            imageData={this.props.imageData}
          >
          </Panel>))
        }
      </div>
    ))
  }

  renderCalendar = (dayHeadings, dates) => {
    return(
    <div className="calendar">
      <div className="row" id="day-headings">
        {this.renderFirstRowHeadings(dayHeadings)};
      </div>
        {this.renderSecondDates(dates)};
    </div>
    )
  }

  //Adds the user-submitted caption to the examination modal
  //Forces the user to pick a date before they can examine
  handleModalMessage = (data, date = '', month) => {
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
    console.log(this.props);
    return (
    <div>
      <Navbar
        storeSelectedMonth={this.props.storeSelectedMonth}
        currentdate={this.props.currentDate}
        selectedDate={this.props.selectedDate}
        month={this.props.selectedMonth}
        currentMonth={this.props.currentMonth}
      />
      {this.renderCalendar(this.state.firstRowHeadings, this.state.dates)}
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
		      header={this.props.selectedMonth +" "+ this.props.selectedDate}
        >
            <div id="caption-text-display">
              {this.handleModalMessage(this.props.imageData, this.props.selectedDate, this.props.selectedMonth)}
            </div>
          <SubmitForm
            data={this.props.imageData}
            selectedDate={this.props.selectedDate}
            selectedMonth={this.props.selectedMonth}
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
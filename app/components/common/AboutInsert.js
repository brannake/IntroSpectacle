import React from "react";

const AboutInsert = () => (
  <div className="container" id="about-container">
    <p id="about-header">
       &nbsp;
       <br/>
       Welcome to Introspectiv, the photojournal powered by IBM Watson that helps you learn about yourself!
       <br/>
       &nbsp;
       <br/>
    </p>
    <div className="row">
        <div className="col s5" id="myCalendar-insert">
            <div id="myCalendar-insert-header">My Calendar</div> 
                <p id="myCalendar-insert-text">
                    On the Calendar view, click on a date to highlight it. 
                </p>
                <p className="list-row">
                    Click the Examine button at the bottom of the page to see that date.
                </p>
                <p id="myCalendar-insert-text">
                    You can submit an image and a journal entry for each date.
                </p>
                <p className="list-row">
                    Our analytics engine will then analyze each date and return an emotional score.
                </p>
                <p id="myCalendar-insert-text">
                    Once you have submitted a few dates, you can use the Trends page.
                </p>
            </div>
        <div className="col s6 offset-s1" id="trends-insert">
            <div id="trends-insert-header">Trends</div> 
                <p id="trends-insert-text">
                    ? 
                    <br/>
                    &nbsp;
                    <br/>
                    ?
                    <br/>
                    &nbsp;
                    <br/> 
                    ?
                    <br/>
                    &nbsp;
                    <br/>
                    ?
                    <br/>
                    &nbsp;
                    <br/> 
                    ?
                </p>
            </div>
        </div>
    </div>
);

export default AboutInsert;

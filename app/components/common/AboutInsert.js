import React from "react";

const AboutInsert = () => (
  <div className="container" id="about-container">
    <div className="row">
        <div className="col s10" id="myCalendar-insert">
            <div id="myCalendar-insert-header">My Calendar</div> 
                <p id="myCalendar-insert-text">
                    On the Calendar view, click on a date to highlight it. 
                </p>
                <p className="list-row">
                    Click the Examine button at the bottom of the page to see 
                    the contents of that date.
                </p>
                <p id="myCalendar-insert-text">
                    You can submit an image and a journal entry for each date.
                </p>
                <p className="list-row">
                    Our software will then analyze your contribution for each date
                    and draw conclusions about your moods and what affects them.
                </p>
                <p id="myCalendar-insert-text">
                    Once you have submitted a few dates, you can use the Trends page.
                </p>
            </div>
            <div className="col s6 offset-s1" id="trends-insert">
            <div id="trends-insert-header">Trends</div> 
                <p id="myCalendar-insert-text">
                    The Trends page lets you see what our software says about your
                    mood over time, as well as see what asffects it day-to-day and month-to-month.
                </p>
                <p className="list-row">
                    Toggle between Monthly and Yearly plots of your mood using
                    the Views tab.
                </p>
                <p id="myCalendar-insert-text">
                    Click the Associations button to find the things that effect your mood
                    the most.
                </p>
                <p className="list-row">
                    The more you use Introspectiv, the better and more accurate your Associations.
                </p>
                <p id="myCalendar-insert-text">
                    More features are being added to Trends all the time, so be sure to check
                    this section frequently!
                </p>
                </div>
            </div>
            <div id="left-column"/>
            <div id="right-column"/>
        </div>
);

export default AboutInsert;

import React, { Component } from "react";
import {Button, Collapsible, CollapsibleItem} from 'react-materialize'

class SideDisplay extends Component {

  render() {
    return (
      <div id="side-display-container">
        <div id="side-display">
          <div id="side-display-text-container">
            Views
            <br/>
            <Collapsible>
	            <CollapsibleItem header='Time Frame'>
                <div 
                  id="monthly-time-frame"
                  className="trends-buttons"
                  onClick= {() => {
                    this.props.storeSelectedView("monthly");
                    this.props.toggleMonthlyView()}

                  }
                >
                  Monthly
                </div>
                <div 
                  id="yearly-time-frame"
                  className="trends-buttons"
                  onClick= {() => {
                    this.props.storeSelectedView("yearly");
                    this.props.toggleYearlyView()}}
                  >
                  Yearly
                </div>
	            </CollapsibleItem>
	            <CollapsibleItem header='Emotion'>
              <div id="emotion-container-div">
                <div 
                  id="overall-emotion"
                  className="trends-buttons"
                  onClick= {() => {
                    this.props.storeSelectedView("monthly");
                    this.props.toggleMonthlyView()}

                  }
                >
                  Overall
                </div>
                <div 
                  id="anger-emotion"
                  className="trends-buttons"
                  onClick= {() => {
                    this.props.storeSelectedView("yearly");
                    this.props.toggleYearlyView()}}
                >
                  Anger
                </div>
                <div 
                  id="disgust-emotion"
                  className="trends-buttons"
                  onClick= {() => {
                    this.props.storeSelectedView("monthly");
                    this.props.toggleMonthlyView()}

                  }
                >
                  Disgust
                </div>
                <div 
                  id="fear-emotion"
                  className="trends-buttons"
                  onClick= {() => {
                    this.props.storeSelectedView("yearly");
                    this.props.toggleYearlyView()}}
                >
                  Fear
                </div>
                </div>
	            </CollapsibleItem>
                    Coming Soon.
	            <CollapsibleItem header=''>
		            Some new feature.
	            </CollapsibleItem>
            </Collapsible>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDisplay;
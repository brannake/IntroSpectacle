import React, { Component } from "react";
import {Button, Collapsible, CollapsibleItem} from 'react-materialize'

class SideDisplay extends Component {
  state = {
    yearlyButton: "yearly-time-frame-selected",
    monthlyButton: "monthly-time-frame-unselected",
    overallButton: "overall-emotion-selected",
    fearButton: "fear-emotion-unselected",
    angerButton: "anger-emotion-unselected",
    disgustButton: "disgust-emotion-unselected"
}

activateYearlyButton = () => {
  if (this.state.yearlyButton === "yearly-time-frame-unselected") {
    this.setState({yearlyButton: "yearly-time-frame-selected", monthlyButton: "monthly-time-frame-unselected"});
  }
}

activateMonthlyButton = () => {
  if (this.state.monthlyButton === "monthly-time-frame-unselected") {
    this.setState({monthlyButton: "monthly-time-frame-selected", yearlyButton: "yearly-time-frame-unselected"});
  }
}

activateOverallButton = () => {
  if (this.state.overallButton === "overall-emotion-unselected") {
    this.setState({
      overallButton: "overall-emotion-selected",
      fearButton: "fear-emotion-unselected",
      angerButton: "anger-emotion-unselected",
      disgustButton: "disgust-emotion-unselected"
    });
  }
}

activateFearButton = () => {
  if (this.state.fearButton === "fear-emotion-unselected") {
    this.setState({
      overallButton: "overall-emotion-unselected",
      fearButton: "fear-emotion-selected",
      angerButton: "anger-emotion-unselected",
      disgustButton: "disgust-emotion-unselected"
    });
  }
}

activateAngerButton = () => {
  if (this.state.angerButton === "anger-emotion-unselected") {
    this.setState({
      overallButton: "overall-emotion-unselected",
      fearButton: "fear-emotion-unselected",
      angerButton: "anger-emotion-selected",
      disgustButton: "disgust-emotion-unselected"
    });
  }
}

activateDisgustButton = () => {
  if (this.state.disgustButton === "disgust-emotion-unselected") {
    this.setState({
      overallButton: "overall-emotion-unselected",
      fearButton: "fear-emotion-unselected",
      angerButton: "anger-emotion-unselected",
      disgustButton: "disgust-emotion-selected"
    });
  }
}

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
                  id={this.state.monthlyButton}
                  className="trends-buttons"
                  onClick= {() => {
                    this.props.storeSelectedView("monthly");
                    this.props.displayGraph();
                    this.activateMonthlyButton();
                  }}
                >
                  Monthly
                </div>
                <div 
                  id={this.state.yearlyButton}
                  className="trends-buttons"
                  onClick= {() => {
                    this.props.storeSelectedView("yearly");
                    this.props.displayGraph();
                    this.activateYearlyButton();
                  }}
                  >
                  Yearly
                </div>
	            </CollapsibleItem>
	            <CollapsibleItem header='Emotion'>
              <div id="emotion-container-div">
                <div 
                  id={this.state.overallButton}
                  className="trends-buttons"
                  onClick= {() => {
                    this.props.storeSelectedEmotion("joy");
                    this.props.displayGraph();
                    this.activateOverallButton();
                  }}
                >
                  Overall
                </div>
                <div 
                  id={this.state.angerButton}
                  className="trends-buttons"
                  onClick= {() => {
                    this.props.storeSelectedEmotion("anger");
                    this.props.displayGraph();
                    this.activateAngerButton();
                  }}
                >
                  Anger
                </div>
                <div 
                  id={this.state.disgustButton}
                  className="trends-buttons"
                  onClick= {() => {
                    this.props.storeSelectedEmotion("disgust");
                    this.props.displayGraph();
                    this.activateDisgustButton();
                  }}
                >
                  Disgust
                </div>
                <div 
                  id={this.state.fearButton}
                  className="trends-buttons"
                  onClick= {() => {
                    this.props.storeSelectedEmotion("fear");
                    this.props.displayGraph();
                    this.activateFearButton();
                  }}
                >
                  Fear
                </div>
              </div>
	            </CollapsibleItem>
	            <CollapsibleItem header='Coming Soon'>
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
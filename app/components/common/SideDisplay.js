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
                    this.props.displayGraph();
                  }}
                >
                  Monthly
                </div>
                <div 
                  id="yearly-time-frame"
                  className="trends-buttons"
                  onClick= {() => {
                    this.props.storeSelectedView("yearly");
                    this.props.displayGraph();
                  }}
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
                    this.props.storeSelectedEmotion("joy");
                    this.props.displayGraph();
                  }}
                >
                  Overall
                </div>
                <div 
                  id="anger-emotion"
                  className="trends-buttons"
                  onClick= {() => {
                    this.props.storeSelectedEmotion("anger");
                    this.props.displayGraph();
                  }}
                >
                  Anger
                </div>
                <div 
                  id="disgust-emotion"
                  className="trends-buttons"
                  onClick= {() => {
                    this.props.storeSelectedEmotion("disgust");
                    this.props.displayGraph();
                  }}
                >
                  Disgust
                </div>
                <div 
                  id="fear-emotion"
                  className="trends-buttons"
                  onClick= {() => {
                    this.props.storeSelectedEmotion("fear");
                    this.props.displayGraph();
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
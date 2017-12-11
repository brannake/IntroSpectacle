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
              <Button
              onClick= {() => {this.props.storeSelectedView("monthly");
              this.props.toggleMonthlyView()}}
            >
            Monthly
            </Button>
            <br/>
            <Button
              onClick= {() => {this.props.storeSelectedView("yearly");
              this.props.toggleYearlyView()}}
            >
            Yearly
            </Button>
	            </CollapsibleItem>
	            <CollapsibleItem header='Emotion'>
	            	Lorem ipsum dolor sit amet.
	            </CollapsibleItem>
	            <CollapsibleItem header='Third'>
		            Lorem ipsum dolor sit amet.
	            </CollapsibleItem>
            </Collapsible>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDisplay;
import React, { Component } from "react";
import API from "../../utils/API";

class Panel extends Component {

  render() {
    return (
      <div className="col s1">
          <div className="panel-body">
            {this.props.date}
          </div>
      </div>
    );
  }
}

export default Panel;

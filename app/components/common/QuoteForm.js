import React, { Component } from "react";

class SideDisplay extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
  };

  handleInputChange(event) {
    this.setState({inputValue: event.target.value});
  };

  handleButtonClick() {
  };

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <div style={styles.formStyle} className="form-group">
          <label htmlFor="input-box">
            Add a quote
          </label>
          <textarea
            style={{
              resize: "none"
            }}
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            placeholder="Add a new quote here!"
            className="form-control"
            id="input-box"
            rows="3"
          />
          <button
            onClick={this.handleButtonClick}
            className="btn btn-success"
            style={styles.buttonStyle}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default SideDisplay;
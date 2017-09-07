import React, { Component } from "react";
import Panel from "./common/Panel";
import QuoteForm from "./common/QuoteForm";
import API from "../utils/API";

class Home extends Component {
  state = {
    quotes: []
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <QuoteForm
            getQuotes={this.getQuotes}
          />
        </div>
        <div className="row">
          <hr />
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import API from "../../utils/API";
import Favorites from "../Favorites";

class QuoteForm extends Component {
  constructor() {
    super();
    this.state = {
      TopicinputValue: "",
      StartYearinputValue: "",
      EndYearinputValue: "",
      Favorites: ""
    };
    // Binding handleInputChange and handleButtonClick since we'll be passing them as
    // callbacks and 'this' will change otherwise
    this.handleTopicInputChange = this.handleTopicInputChange.bind(this);
    this.handleStartYearInputChange = this.handleStartYearInputChange.bind(this);
    this.handleEndYearInputChange = this.handleEndYearInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.NYTAPICall = this.NYTAPICall.bind(this);
    this.SaveButton = this.SaveButton.bind(this);
  }
  handleTopicInputChange(event) {
    this.setState({ TopicinputValue: event.target.value });
  }
  handleStartYearInputChange(event) {
    this.setState({ StartYearinputValue: event.target.value });
  }
  handleEndYearInputChange(event) {
    this.setState({ EndYearinputValue: event.target.value });
  }

  SaveButton(abstract) {
    API.saveQuote(abstract).then((res) => {
      console.log(res);
    });
  }

  NYTAPICall(searchObject) {
    let topic = searchObject.TopicinputValue;
    let startYear = searchObject.StartYearinputValue;
    let endYear = searchObject.EndYearinputValue;
    let authKey = "aa7ca2b60183476e8cfcf2c932d2936d";
    let queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";
    let queryURL = queryURLBase + topic;
      
    if (parseInt(startYear)) {
            queryURL = queryURL + "&begin_date=" + startYear + "0101";
          }

    if (parseInt(endYear)) {
            queryURL = queryURL + "&end_date=" + endYear + "0101";
          }
      
    $.ajax({url: queryURL, method: "GET"}) 
        .done((NYTData) => {
          console.log("URL: " + queryURL);
          console.log(NYTData);
          this.setState({ArticleResponse: NYTData});
        });
      };

  handleButtonClick() {
    this.NYTAPICall(this.state);
    this.setState({ TopicinputValue: "",
                    StartYearinputValue: "",
                    EndYearinputValue: "",
                  });
  }
  render() {
    if (this.state.ArticleResponse) {
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
              onChange={this.handleTopicInputChange}
              value={this.state.TopicinputValue}
              placeholder="Topic"
              className="form-control"
              id="input-box"
              rows="3"
            />
            <textarea
              style={{
                resize: "none"
              }}
              onChange={this.handleStartYearInputChange}
              value={this.state.StartYearinputValue}
              placeholder="Start Year"
              className="form-control"
              id="input-box"
              rows="3"
            />
            <textarea
              style={{
                resize: "none"
              }}
              onChange={this.handleEndYearInputChange}
              value={this.state.EndYearinputValue}
              placeholder="End Year"
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
            <div
            >
            {this.state.ArticleResponse.response.docs.map(doc =>
            <div key={doc.abstract}>{doc.abstract}
              <button
                onClick={() =>{this.SaveButton(doc.abstract)}}
                className="btn btn-success"
                style={styles.buttonStyle}
              >
              Save  
              </button>
              <br/>
            </div>
          )}
          <Favorites>
          </Favorites>
            </div>
          </div>
        </div>
      );
    } else {
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
            onChange={this.handleTopicInputChange}
            value={this.state.TopicinputValue}
            placeholder="Topic"
            className="form-control"
            id="input-box"
            rows="3"
          />
          <textarea
            style={{
              resize: "none"
            }}
            onChange={this.handleStartYearInputChange}
            value={this.state.StartYearinputValue}
            placeholder="Start Year"
            className="form-control"
            id="input-box"
            rows="3"
          />
          <textarea
            style={{
              resize: "none"
            }}
            onChange={this.handleEndYearInputChange}
            value={this.state.EndYearinputValue}
            placeholder="End Year"
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
}

const styles = {
  buttonStyle: {
    float: "right",
    marginTop: 10
  },
  formStyle: {
    marginBottom: 60,
    marginTop: 60
  }
};

export default QuoteForm;
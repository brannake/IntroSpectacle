import React, { Component } from "react";
import API from "../../utils/API";

class Panel extends Component {

  render() {
    return (
      <div className="col-md-3 col-sm-6">
        <div className="panel panel-default">
          <div className="panel-body">
            <i
              style={styles.favoriteStyle}
            />
            <i
              style={styles.deleteStyle}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  favoriteStyle: {
    cursor: "pointer",
    marginRight: 5,
    float: "left"
  },
  deleteStyle: {
    cursor: "pointer",
    marginLeft: 5,
    color: "red",
    float: "right"
  }
};

export default Panel;

import React, { Component } from "react";
import CalendarHeatmap from 'react-calendar-heatmap';

class HeatMaps extends Component {
  state = {
    user: 'default',
    imageData: [],
    loaded: false
  };

componentWillMount= () => {

    $.ajax({
      url: '/api/load',
      type: 'GET',
      data: this.state.user,
      success: (data) => {
        console.log(data);
        this.setState({imageData:data});
          }
        });
      }

  render() {
    return (
      <div>
        <CalendarHeatmap
        id="calendar-heat-map"
        endDate={new Date('2017-09-01')}
        numDays={30}
        values={[
            { date: '2016-09-01' },
            { date: '2016-09-02' },
            { date: '2016-09-03' },
            // ...and so on
        ]}
        />
      </div>
    );
  }
}

export default HeatMaps;
import React, { Component} from 'react';
import PersonaToggle from '../components/PersonaToggle.js';
import Text from '../components/Text.js';
import DashboardControl from "../components/DashboardControl.js"
import PoweredBy from "./../components/PoweredBy.js";
import * as moment from 'moment';


class WebView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: moment().add(10,'seconds') }; // change this to the default start time

    this.testTime = this.testTime.bind(this);
  }

  tick() {
    if (moment().isAfter(this.state.time)) {
      clearInterval(this.timerID);
      console.log("test");
      // send request to start deep work
      // notification
      // change view
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  testTime() {
    console.log(this.state);
  }

  render() {
      this.testTime();
      return(
        <div className="web-app">

          <DashboardControl />
          <PoweredBy companyName="Zitcom" />

        </div>
      );
  }
}

export default WebView;

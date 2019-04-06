import React, { Component} from 'react';
import './App.css';
import PiView from './views/PiView';
import WebView from './views/WebView';
import PoweredBy from "./components/PoweredBy.js";
import TypePersonaContainer from "./components/TypePersonaContainer.js";

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {percentage: 0, 
    //                   speed: 0.0};
    //     this.startCounter = this.startCounter.bind(this); 
    //     this.testConnection = this.testConnection.bind(this);
    // }

    // tick() {
    //   if (this.state.percentage <= 0) {
    //     clearInterval(this.timerID);
    //     return;
    //   }
    //   this.setState(function(state) {
    //     return {
    //       percentage: state.percentage - state.speed
    //     };
    //   });
    // }

    // // duration is the duration in seconds of the new deep work session
    // startCounter(duration) {
    //   this.setState({
    //     percentage: 100,
    //     speed: 10 / duration
    //   });
    //   this.timerID = setInterval(() => this.tick(), 100);
    // }

    render() {
    //navigator.userAgent === "TODO add raspberry pi user agent"
      if (true) {
        return (
          <PiView />
        )
      }
      else {
        return (
          <WebView />
        )
      }
  }
}

export default App;

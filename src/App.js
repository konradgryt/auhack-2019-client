import React, { Component} from "react";
import "./App.css";
import PiUserImage from "./components/PiUserImage.js";
import PiUserName from "./components/PiUserName.js";
import PiHeader from "./components/PiHeader.js";
import Websocket from 'react-websocket';
// import ReactSvgTimer from 'react-svg-timer';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {percentage: 0, 
                      speed: 0.0};
        this.startCounter = this.startCounter.bind(this); 
        this.testConnection = this.testConnection.bind(this);
    }

    tick() {
      if (this.state.percentage <= 0) {
        clearInterval(this.timerID);
        return;
      }
      this.setState(function(state) {
        return {
          percentage: state.percentage - state.speed
        };
      });
    }

    // duration is the duration in seconds of the new deep work session
    startCounter(duration) {
      this.setState({
        percentage: 100,
        speed: 10 / duration
      });
      this.timerID = setInterval(() => this.tick(), 100);
    }

    testConnection() {
        console.log("Listening")
        this.startCounter(20); 
    }

    render() {
        console.log(this.state);
      //   if (OSName="MacOS") {
      //     return(
      //       <div className="App">
      //       <h1> Web part</h1>
      //       <Websocket url='wss://echo.websocket.org/' onOpen={this.testConnection.bind(this)}/>
      //       </div>
      //   );
      // } else {
                return(
                  <div className="pi-App">
                    <Websocket url='wss://echo.websocket.org/' onOpen={this.testConnection.bind(this)}/>
                    <PiHeader />
                    <div className="pi--main">
                      <CircularProgressbar
                        percentage={this.state.percentage}
                        className="pi--progressbar"
                        strokeWidth={10}
                        backgroundPadding={3}
                        background="true"
                        styles={{
                          path: {
                            // Path color
                            stroke: `rgba(255,255,255,0.4)`,
                            // Customize transition animation
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                          },
                          trail: {
                            // Trail color
                            stroke: 'transparent',
                          },
                          background: {
                            // Trail color
                            fill: 'rgba(255,255,255,0.2)',
                          },


                        }}
                      />
                      <div className="pi--person">
                        <PiUserImage source="https://www.scannet.dk/img/pictures/employees/soren-lorentzen-lg@2x.jpg" />
                        <PiUserName name="Søren Lorentzen" />
                      </div>
                    </div>
                  </div>
                );
      //      }

  }
}

export default App;

import React, { Component} from 'react';
import PiUserImage from '../components/PiUserImage.js';
import PiUserName from '../components/PiUserName.js';
import PiHeader from '../components/PiHeader.js';
// import Websocket from 'react-websocket';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class PiView extends React.Component { 

  constructor(props) {
      super(props);
      this.state = {percentage: 0, 
                    speed: 0.0};
      this.startCounter = this.startCounter.bind(this); 
      // this.testConnection = this.testConnection.bind(this);
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

  render() {
    return(
      <div className="pi-App">
        <Websocket url='wss://echo.websocket.org/' onMessage={this.handleMessage} onOpen={this.testConnection}/>
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
  }
}

export default PiView;
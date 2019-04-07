import React, { Component} from 'react';
import PiUserImage from '../components/PiUserImage.js';
import PiUserName from '../components/PiUserName.js';
import PiHeader from '../components/PiHeader.js';
import GradientBackground from '../components/GradientBackground.js';
import Websocket from 'react-websocket';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from "axios";

class PiView extends React.Component {

  constructor(props) {
      super(props);
      this.state = {percentage: 0,
                    speed: 0.0};
      this.startCounter = this.startCounter.bind(this);
      this.testConnection = this.testConnection.bind(this);
  }

  testConnection() {
    this.startCounter(60);
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

  listentick() {
    axios.get("http://127.0.0.1:8000/sessions/")
        .then((res) => { this.props.setToken(res.data.token); 
                        this.props.nextView('DASHBOARDCONTROL')}) 
  }

  // duration is the duration in seconds of the new deep work session
  startCounter(duration) {
    this.setState({
      percentage: 100,
      speed: 10 / duration
    });
    this.timerID = setInterval(() => this.tick(), 100);
  }

  componentDidMount() {
    this.socket = setInterval(() => this.listentick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.socket);
  }

  render() {
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
        <div className="gradients">
          <GradientBackground className="from" percentage={this.state.percentage}/>
          <GradientBackground className="to" />
        </div>

      </div>
    );
  }
}

export default PiView;

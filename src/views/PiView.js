import React, { Component} from 'react';
import PiUserImage from '../components/PiUserImage.js';
import PiUserName from '../components/PiUserName.js';
import PiHeader from '../components/PiHeader.js';
import GradientBackground from '../components/GradientBackground.js';
import Websocket from 'react-websocket';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from "axios";
import moment from "moment";

class PiView extends React.Component {

  constructor(props) {
      super(props);
      this.state = {percentage: 0,
                    speed: 0.0, 
                    currentId: 0};
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
    axios.get("http://192.168.1.206:8000/sessions/")
        .then((res) => { 
          console.log(res.data[res.data.length - 1]); 
          var date = res.data[res.data.length - 1];
          // remember previous id
          var prev = this.state.currentId;
          // update current id
          this.setState({
            currentId: date.id
          });

          console.log(date.created)
          var parsedTime = moment(date.created).local().format("HH:mm");
          console.log(parsedTime)
          if (!moment().isAfter(moment(date.created).local().add(date.duration,'seconds'))) {
              if (this.state.currentId != prev) {
                console.log("testtt");
                this.startCounter(date.duration);
              }
              // send request to start deep work
              // notification
              // change view
          }

        }) 
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
            <PiUserImage source="https://media.licdn.com/dms/image/C5603AQFz23khlHIZGA/profile-displayphoto-shrink_200_200/0?e=1560384000&v=beta&t=MNNB_XVkNg0k7g3c18SqjNw2VPUOTDFEaJsGjfj9u1Q" />
            <PiUserName name="Nathalia Novais" />
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

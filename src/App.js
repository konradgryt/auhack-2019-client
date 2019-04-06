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
    }

    testConnection() {
        console.log("Listening")
    }

    render() {
        if (navigator.userAgent === "raspberry pi user agent") {
          return(
            <div className="pi-App">
              <PiHeader />
              <div className="pi--person">


              <CircularProgressbar
                percentage={80}
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

                <PiUserImage source="https://www.scannet.dk/img/pictures/employees/soren-lorentzen-lg@2x.jpg" />
                <PiUserName name="Søren Lorentzen" />
              </div>
            </div>
          );
        } else {
          return(
            <div className="App">
            <h1> Web part</h1>
            <Websocket url='wss://echo.websocket.org/' onOpen={this.testConnection}/>
            </div>
          );
        }
      }
}

export default App;

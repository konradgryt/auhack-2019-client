import React, { Component} from "react";
import "./App.css";
import PiUserImage from "./components/PiUserImage.js";
import PiUserName from "./components/PiUserName.js";
import PiHeader from "./components/PiHeader.js";
import PoweredBy from "./components/PoweredBy.js";
import Text from "./components/Text.js";
import Websocket from 'react-websocket';
import CircularProgressbar from 'react-circular-progressbar';
import TypePersonaContainer from "./components/TypePersonaContainer.js";

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
            <div className="App">
            <h1> Web part</h1>
            <Websocket url='wss://echo.websocket.org/' onOpen={this.testConnection}/>
            </div>
        );
      } else {
                return(
                  <div className="App">
                    <TypePersonaContainer />
                    <PoweredBy name="Zitcom" />
                  </div>
                );
            }

  }
}

export default App;

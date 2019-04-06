import React, { Component} from "react";
import "./App.css";
import PiUserImage from "./components/PiUserImage";
import Websocket from 'react-websocket';

var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

class App extends Component {

    constructor(props) {
        super(props);
    }

    testConnection() {
        console.log("Listening")
    }

    render() {
        if (OSName="MacOS") {
          return(
            <div className="App">
            <h1> Web part</h1>
            <Websocket url='wss://echo.websocket.org/' onOpen={this.testConnection}/>
            </div>
        );     
        }
        else if (OSName="UNIX") {
          return(
            <div className="pi-App">
              <div className="pi--header">
                <img src="https://www.zitcom.dk/img/logo/zg-logo.svg" className="pi--logo"/>
                <p>Some app name</p>
              </div>
              <div className="pi--person">
                <PiUserImage source="https://www.scannet.dk/img/pictures/employees/soren-lorentzen-lg@2x.jpg" />
                <h1> Søren Lorentzen </h1>
              </div>
            </div>
          );
        }
  }
}

export default App;

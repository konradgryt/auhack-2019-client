import React, { Component} from "react";
import Websocket from 'react-websocket';
//import "./App.css";

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
        if (OSName="UNIX") {
            return(
                <div className="App">
                <h1> Raspberry pi part</h1>
                <Websocket url='wss://echo.websocket.org/' onOpen={this.testConnection}/>
                </div>
            );
        }
        else {
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
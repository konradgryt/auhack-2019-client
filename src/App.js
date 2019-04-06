import React, { Component} from "react";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <div className="header">
          <img src="https://www.zitcom.dk/img/logo/zg-logo.svg" className="logo"/>
          <p>Some app name</p>
        </div>
        <div className="person">
          <div className="userPicture">
            <img src="https://www.scannet.dk/img/pictures/employees/soren-lorentzen-lg@2x.jpg" />
          </div>
          <h1> Søren Lorentzen </h1>
        </div>

      </div>
    );
  }
}

export default App;

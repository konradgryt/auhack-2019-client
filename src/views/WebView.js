import React, { Component} from 'react';
import PersonaToggle from '../components/PersonaToggle.js';
import Text from '../components/Text.js';
import DashboardControl from "../components/DashboardControl.js"
import PoweredBy from "../components/PoweredBy";
import Login from "../components/Login"
import SideMenu from "./../components/SideMenu.js";

class WebView extends React.Component {
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1',  {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
          "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }

    render() {
        return(
          <div className="web-app">

            <Login />
        
            <DashboardControl />
            <PoweredBy companyName="Zitcom" />
            <SideMenu />
          </div>
        );
    }
}

export default WebView;

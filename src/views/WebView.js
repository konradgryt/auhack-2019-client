import React, { Component} from 'react';
import PersonaToggle from '../components/PersonaToggle.js';
import Text from '../components/Text.js';
import DashboardControl from "../components/DashboardControl.js"
import PoweredBy from "./../components/PoweredBy.js";
import { Api } from '../api.js';
import Login from "../components/Login"
import SideMenu from "./../components/SideMenu.js";

//const myApi = new Api({ url:'https://jsonplaceholder.typicode.com' })

class WebView extends React.Component {
  
    componentDidMount() {
      fetch('http://172.20.10.9:8000', { 'contentType': 'application/json'}).then((response) => {
        console.log(response);
      })
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

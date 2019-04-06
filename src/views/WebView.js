import React, { Component} from 'react';
import PersonaToggle from '../components/PersonaToggle.js';
import Text from '../components/Text.js';
import DashboardControl from "../components/DashboardControl.js"
import PoweredBy from "./../components/PoweredBy.js";


class WebView extends React.Component {

  // //default state
  // state = {
  //   currentData: 'initial data'
  // };

  // componentDidMount() {

  //   //https://github.com/axios/axios

  //   axios
  //     .get("URL HERE") //TODO add url
  //     .then(response => {

  //       const receivedData = response //TODO conver 
  
  //       this.setState(receivedData);
  //     })
  //     .catch(error => console.log(error));
  // }

    render() {
        return(
          <div className="web-app">

            <DashboardControl />
            <PoweredBy companyName="Zitcom" />

          </div>
        );
    }
}

export default WebView;

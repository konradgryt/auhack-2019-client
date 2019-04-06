import React, { Component} from 'react';
import PersonaToggle from '../components/PersonaToggle.js';
import Text from '../components/Text.js';
import DashboardControl from "../components/DashboardControl.js"
import PoweredBy from "../components/PoweredBy";
import Login from "../components/Login"

class WebView extends React.Component {

    render() {
        return(
          <div className="web-app">

           <Login />
        
            {/* <DashboardControl />
            <PoweredBy companyName="Zitcom" /> */}
          </div>
        );
    }
}

export default WebView;

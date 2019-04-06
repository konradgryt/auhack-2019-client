import React, { Component} from 'react';
import PersonaToggle from '../components/PersonaToggle.js';
import Text from '../components/Text.js';
import DashboardControl from "../components/DashboardControl.js"
import PoweredBy from "./../components/PoweredBy.js";
import SideMenu from "./../components/SideMenu.js";


class WebView extends React.Component {

    render() {
        return(
          <div className="web-app">

            <DashboardControl />
            <PoweredBy companyName="Zitcom" />
            <SideMenu />

          </div>
        );
    }
}

export default WebView;

import React, { Component} from 'react';
import PersonaToggle from '../components/PersonaToggle.js';
import Text from '../components/Text.js';
import DashboardControl from "../components/DashboardControl.js"

class WebView extends React.Component {
  
    render() {
        return(
          <div className="web-app">
        
            <DashboardControl />

          </div>
        );
    }
}

export default WebView;
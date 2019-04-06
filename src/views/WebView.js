import React, { Component} from 'react';
import PersonaToggle from '../components/PersonaToggle.js';
import Text from '../components/Text.js';

class WebView extends React.Component {
  
    render() {
        return(
          <div className="web-app">
            <div className="dashboard-Rhythmic">
            <PersonaToggle />
            </div>

          
            <div className="bimodal-dash"></div>
            <Text className="heading" text="How much distraction free time do you need?" />


          </div>
        );
    }
}

export default WebView;
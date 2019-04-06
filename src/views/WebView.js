import React, { Component} from 'react';
import PoweredBy from "./../components/PoweredBy.js";
import TypePersonaContainer from "./../components/TypePersonaContainer.js";

class WebView extends React.Component {

    render() {
        return(
          <div className="App">
            <TypePersonaContainer />
            <PoweredBy companyName="Zitcom" />
          </div>
        );
    }
}

export default WebView;

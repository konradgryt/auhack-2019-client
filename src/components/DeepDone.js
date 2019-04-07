import React, { Component} from "react";
import PersonaToggle from "./PersonaToggle.js"

class DashboardControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render (){
    return(
        <div>
        {/* <PersonaToggle nextView={this.props.nextView} /> */}

        <h1 className="message-to-user1">You're done with today's deep work.</h1>
        <p className="message-to-user2">Try catching up on all those loose threads before heading off for the day.</p>
        
        </div>
    )
  }
}

export default DashboardControl;

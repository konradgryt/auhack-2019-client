import React, { Component} from "react";
import PersonaToggle from "./PersonaToggle.js"

class DashboardControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render (){
    return(
        <div>
        <PersonaToggle nextView={this.props.nextView} checked={this.props.checked} flip={this.props.flip}/>

        <p className="message-morning">Good morning! It's 8:45am.</p>
        <h1 className="message-to-user1">Your deep work starts at 10am.</h1>
        <p className="message-to-user2">Need tips on what to do while you wait? Read more under info in the menu.</p>

        <input className="reeschedule-button" type="submit" value="Need to reeschedule?" />

        
        </div>
    )
  }
}

export default DashboardControl;

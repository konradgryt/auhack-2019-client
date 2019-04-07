import React, { Component} from "react";
import DashboardButtons from "./DashboardButtons.js"
import PersonaToggle from "./PersonaToggle.js"

class DashboardControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render (){
    return(
        <div>
        <PersonaToggle nextView={this.props.nextView} checked={this.props.checked} flip={this.props.flip}/>

        </div>
    )
  }
}

export default DashboardControl;

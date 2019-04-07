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
        {/* <PersonaToggle nextView={this.props.nextView}/> */}
        <DashboardButtons token={this.props.token}/>

        </div>
    )
  }
}

export default DashboardControl;

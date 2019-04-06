import React, { Component} from "react";
import DashboardButtons from "./DashboardButtons.js"
import PersonaToggle from "./PersonaToggle.js"

class DashboardControl extends React.Component {
  render (){
    return(
        <div>
        <PersonaToggle />

        <DashboardButtons />
        
        </div>
    )
  }
}

export default DashboardControl;

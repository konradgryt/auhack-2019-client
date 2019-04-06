import React, { Component} from "react";
import Text from "./Text.js"

class DashboardButtons extends React.Component {
  render (){
    return(

        <div>
        <Text className="heading" text="How much distraction free time do you need?" />

        <button className="time-button">45 min</button>
        <button className="time-button"> 35 min </button>
        <button className="time-button"> 60 min </button>
        <button className="time-button"> 15 min </button>
        <button className="time-button"> 75 min </button>

        </div>
        
    )
  }
}

export default DashboardButtons;

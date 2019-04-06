import React, { Component} from "react";
import Text from "./Text.js"

class DashboardButtons extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this, 'Duration');
  }

  handleClick(param, duration) {
    console.log(duration);
    // TODO: send request to start deep work
    // TODO: shift to page with timer
  }

  render (){
    return(

        <div>
        <Text className="heading" text="How much distraction free time do you need?" />

        <button className="time-button" onClick={(e) => this.handleClick(2700, e)}>45 min</button>
        <button className="time-button" onClick={(e) => this.handleClick(2100, e)}> 35 min </button>
        <button className="time-button" onClick={(e) => this.handleClick(3600, e)}> 60 min </button>
        <button className="time-button" onClick={(e) => this.handleClick(900, e)}> 15 min </button>
        <button className="time-button" onClick={(e) => this.handleClick(4500, e)}> 75 min </button>

        </div>
        
  )
  }
}

export default DashboardButtons;

import React, { Component} from "react";
import Text from "./Text.js";
import PersonaToggle from "./PersonaToggle.js";
var ImageMapper = require('react-image-mapper');


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
        <div className="triangle-buttons">
          <Text className="heading" text="How much distraction free time do you need?" />
          <ImageMapper src={"https://i.ibb.co/18FJfdF/03-01-01-Dashboard-V1-Triangles.png"} map={ { name: "generated", areas: [
            { "_id": "01", "shape": "poly", "coords": [11,76,114,103,156,5],"href": "#fifteen"},
            { "_id": "02", "shape": "poly", "coords": [3,85,33,195,113,114],"href": "#twentyfive"},
            { "_id": "03", "shape": "poly", "coords": [299,38,406,3,412,207],"href": "#fortyfive"},
            { "_id": "04", "shape": "poly", "coords": [130,117,203,267,280,43],"href": "#seventyfive"},
            { "_id": "05", "shape": "poly", "coords": [213,282,288,51,402,215],"href": "#ninety"}
          ] }}
          width={550} imgWidth={416.5}/>
        </div>


        </div>
    )
  }
}

export default DashboardButtons;

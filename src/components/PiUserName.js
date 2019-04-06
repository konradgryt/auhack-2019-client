import React, { Component} from "react";

class PiUserName extends React.Component {
  render (){
    return(
      <div className="pi--user-name">
        <h1> {this.props.name} </h1>
      </div>
    )
  }
}

export default PiUserName;

import React, { Component} from "react";

class TypePersonaAvatar extends React.Component {
  render (){
    return(
      <div className="persona-avatar">
        <div className="persona-avatar-image">
          <img src={this.props.source} />
        </div>
        <h3> {this.props.text} </h3>
      </div>
    )
  }
}

export default TypePersonaAvatar;

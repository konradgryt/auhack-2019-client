import React, { Component} from "react";

class Text extends React.Component {

  render (){

    return(
        <p className={'text ' + this.props.className}  >{this.props.text}</p>
    )
  }
}

export default Text;

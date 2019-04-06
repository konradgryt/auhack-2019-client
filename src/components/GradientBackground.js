import React, { Component} from "react";


class TypePersonaContainer extends React.Component {
  render (){
    return(
      <div className={'gradient-background ' + this.props.className} style={{opacity:  + (this.props.percentage / 100)}}> 

      </div>
    )
  }
}

export default TypePersonaContainer;

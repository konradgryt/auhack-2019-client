import React, { Component} from "react";

class PiUserImage extends React.Component {
  render (){
    return(
      <div className="pi--user-picture">
        <img src={this.props.source} />
      </div>
    )
  }
}

export default PiUserImage;

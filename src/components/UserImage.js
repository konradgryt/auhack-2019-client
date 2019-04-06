import React, { Component} from "react";

class UserImage extends React.Component {
  render (){
    return(
      <div className="userPicture">
        <img src={this.props.source} />
      </div>
    )
  }
}

export default UserImage;

import React, { Component} from "react";

class PiHeader extends React.Component {
  render (){
    return(
      <div className="pi--header">
        <img src="https://www.zitcom.dk/img/logo/zg-logo.svg" className="pi--logo"/>
        <p>Some app name</p>
      </div>
    )
  }
}

export default PiHeader;

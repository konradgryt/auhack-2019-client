import React, { Component} from "react";

class PoweredBy extends React.Component {
  render (){
    return(
      <div className="footer">
        <p> Powered by {this.props.companyName} </p>
      </div>
    )
  }
}

export default PoweredBy;

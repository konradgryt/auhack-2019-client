import React, { Component} from "react";
import Icon from '@material-ui/core/Icon';


class SideMenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ikona: props.icons
    };

  }

  jmenoFunkce() {
    document.getElementById(this.props.callDiv).classList.add("swipe")
    document.getElementsByClassName("sidebar-flex")[0].classList.add("swipe")
  }

  render (){
    return(
        <div className="sidebar-button" onClick={this.jmenoFunkce.bind(this)}>
          <Icon className="outlined">{this.props.icon}</Icon>
        </div>

    )
  }
}

export default SideMenuButton;

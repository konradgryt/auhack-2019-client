import React, { Component} from "react";
import SideMenuButton from "./../components/SideMenuButton.js";


class SideMenu extends React.Component {
  
  render (){
    return(
      <div className="sidebar-flex">
        <SideMenuButton icon="user" />
      </div>

    )
  }
}

export default SideMenu;

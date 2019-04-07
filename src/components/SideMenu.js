import React, { Component} from "react";
import SideMenuButton from "./../components/SideMenuButton.js";



class SideMenu extends React.Component {
  

  render (){
    return(
      <div>
        <div className="sidebar-flex">
          <SideMenuButton callDiv="personInfo" icon="person_outline"/>
          <SideMenuButton icon="info_outline" />
          <SideMenuButton icon="timeline" />
          <SideMenuButton icon="settings_outline" />
        </div>
        <div id="personInfo" className="sidebar--info-container">
          <div className="sidebar--info-inside">
            Something
          </div>
        </div>
      </div>

    )
  }
}

export default SideMenu;

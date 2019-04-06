import React, { Component} from "react";
import TypePersonaAvatar from "./TypePersonaAvatar.js";
import Text from "./Text.js";


class TypePersonaContainer extends React.Component {
  render (){
    return(
      <div className="persona-container">
        <Text text="How will you deep work?" className="heading"/>
        <div className="persona-line">
          <TypePersonaAvatar
            source="https://ekiy5aot90-flywheel.netdna-ssl.com/wp-content/uploads/2014/05/segue-blog-what-is-persona-development-why-is-it-important.png"
            text="Create a routine"
          />
          <TypePersonaAvatar
            source="https://ekiy5aot90-flywheel.netdna-ssl.com/wp-content/uploads/2014/05/segue-blog-what-is-persona-development-why-is-it-important.png"
            text="Be in control"
          />
        </div>
      </div>
    )
  }
}

export default TypePersonaContainer;

import React, { Component } from "react";
import Switch from "react-switch";
 
class PersonaToggle extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
  }
 
  render() {
    return (
      <div className="toggle-container">
      <label>
        <span className="toggle-name">Create a routine</span>
        <Switch width={250} height={15} checkedIcon={false} uncheckedIcon={false} offColor={'#FF7F00'} onColor={'#41E8B6'} onChange={this.handleChange} checked={this.state.checked} />
        <span className="toggle-name">Be in control</span>
      </label>
      </div>
    );
  }
}

export default PersonaToggle;

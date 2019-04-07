import React, { Component } from "react";
import Switch from "react-switch";
 
class PersonaToggle extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: props.checked };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
    this.props.flip();

    // if (!checked) {
    //   this.props.nextView('DASHBOARDCONTROL'); 
    // } else {
    //   this.props.nextView('DASHBOARDRYTHMIC');
    // }
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

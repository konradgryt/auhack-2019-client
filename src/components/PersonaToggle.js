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

    // if (checked) {
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
        <Switch width={250} height={15} checkedIcon={false} uncheckedIcon={false} offColor={'#EA2356'} onColor={'#ffffff'} onChange={this.handleChange} checked={this.state.checked} />
        <span className="toggle-name">Be in control</span>
      </label>
      </div>
    );
  }
}

export default PersonaToggle;

import React, { Component} from 'react';
import PersonaToggle from '../components/PersonaToggle.js';
import Text from '../components/Text.js';
import DashboardControl from "../components/DashboardControl.js"
import PoweredBy from "./../components/PoweredBy.js";
import { Api } from '../api.js';
import Login from "../components/Login"
import SideMenu from "./../components/SideMenu.js";
import DeepDone from "../components/DeepDone"
import DeepStart from "../components/DeepStart"

class WebView extends React.Component {
  
  componentDidMount() {
    myApi.createEntity({ name: 'todos' })
    myApi.endpoints.todos.get(1).then(({data}) => console.log(data))
  }


  constructor(props) {
    super(props);
    this.state = { time: moment().add(10,'seconds'), // change this to the default start time
                   active: 'LOGIN',
                   checked: false,
                   token: ''};

    this.testTime = this.testTime.bind(this);
    this.updateView = this.updateView.bind(this);
    this.flip = this.flip.bind(this);
    this.setToken = this.setToken.bind(this);
  }


    componentDidMount() {
      fetch('http://127.0.0.1:8000', { 'contentType': 'application/json'}).then((response) => {
        console.log(response);
      })
    }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  testTime() {
    console.log(this.state);
  }

  updateView(act) {
    this.setState({
      active: act
    })
  }

  setToken(tok) {
    this.setState({
      token: tok
    })
  }


  render() {
      this.testTime();
      return(
        <div className="web-app">

        {this.state.active === 'LOGIN' ? (
                    <Login nextView={this.updateView} setToken={this.setToken} />
                ) : this.state.active === 'DASHBOARDCONTROL' ? (
                    <DashboardControl nextView={this.updateView} checked={this.checked} flip={this.flip} />
                ) : this.state.active === 'DASHBOARDRYTHMIC' ? (
                    <DashboardRythmic nextView={this.updateView} checked={this.checked} flip={this.flip} />
                ) : null }

                {/* <Login />  */}
            {/* <DeepDone /> */}
            {/* <DeepStart /> */}

        <PoweredBy companyName="Zitcom" />
        <SideMenu />

        </div>
      );
  }
}

export default WebView;

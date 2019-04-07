import React, { Component} from 'react';
import PersonaToggle from '../components/PersonaToggle.js';
import Text from '../components/Text.js';
import DashboardControl from "../components/DashboardControl.js"
import DashboardRythmic from "../components/DashboardRythmic.js"
import PoweredBy from "./../components/PoweredBy.js";
import * as moment from 'moment';
import { Api } from '../api.js';
import Login from "../components/Login"
import SideMenu from "./../components/SideMenu.js";
import LoginForm from "./../components/LoginForm.js";

const myApi = new Api({ url:'https://jsonplaceholder.typicode.com' })

class WebView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: moment().add(10,'seconds'), // change this to the default start time
                   active: 'LOGIN',
                   checked: false}; 
  
    this.testTime = this.testTime.bind(this);
    this.updateView = this.updateView.bind(this);
    this.flip = this.flip.bind(this);
  }

  componentDidMount() {

    // applying /todos to 'https://jsonplaceholder.typicode.com', results in 'https://jsonplaceholder.typicode.com/todos'
    myApi.createEntity({ name: 'todos' });

    // requesting 'https://jsonplaceholder.typicode.com/todos/1'
    myApi.endpoints.todos.get(1).then(({data}) => console.log(data))
    
    //myApi.endpoints.todos.getAll().then(({ data }) => console.log(data))


    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    if (moment().isAfter(this.state.time)) {
      clearInterval(this.timerID);
      console.log("test");
      // send request to start deep work
      // notification
      // change view
    }
  }

  flip() {
    if (this.state.checked) {
      this.setState({                                  
        checked: false           
      })
    } else {
      this.setState({                                  
        checked: true           
      })
    }
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

  render() {
      this.testTime();
      return(
        <div className="web-app">

        {this.state.active === 'LOGIN' ? (
                    <Login nextView={this.updateView} />
                ) : this.state.active === 'DASHBOARDCONTROL' ? (
                    <DashboardControl nextView={this.updateView} checked={this.isRythmic} flip={this.flip} /> 
                ) : this.state.active === 'DASHBOARDRYTHMIC' ? (
                  <DashboardRythmic nextView={this.updateView} checked={this.isRythmic} flip={this.flip} />                 
                ) : null }
          
        <PoweredBy companyName="Zitcom" />
        <SideMenu />

        </div>
      );
  }
}

export default WebView;

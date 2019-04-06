import React, { Component} from 'react';
import PersonaToggle from '../components/PersonaToggle.js';
import Text from '../components/Text.js';
import DashboardControl from "../components/DashboardControl.js"
import PoweredBy from "./../components/PoweredBy.js";
import { Api } from '../api.js';

const myApi = new Api({ url:'https://jsonplaceholder.typicode.com' })

class WebView extends React.Component {

  componentDidMount() {

    // applying /todos to 'https://jsonplaceholder.typicode.com', results in 'https://jsonplaceholder.typicode.com/todos'
    myApi.createEntity({ name: 'todos' });

    // requesting 'https://jsonplaceholder.typicode.com/todos/1'
    myApi.endpoints.todos.get(1).then(({data}) => console.log(data))
    
    //myApi.endpoints.todos.getAll().then(({ data }) => console.log(data))
  }

    render() {
        return(
          <div className="web-app">

            <DashboardControl />
            <PoweredBy companyName="Zitcom" />

          </div>
        );
    }
}

export default WebView;

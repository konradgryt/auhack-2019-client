import React, { Component} from 'react';
import './App.css';
import PiView from './views/PiView';
import WebView from './views/WebView';

class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
    //navigator.userAgent === "TODO add raspberry pi user agent"
      if (true) {
        return (
          <PiView />
        )
      }
      else {
        return (
          <WebView />
        )
      }
  }
}

export default App;

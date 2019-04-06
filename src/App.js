import React, { Component} from 'react';
import './App.css';
import PiView from './views/PiView';
import WebView from './views/WebView';

class App extends Component {
    render() {
    //navigator.userAgent === "TODO add raspberry pi user agent"
      if (false) {
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

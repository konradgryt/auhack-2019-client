import React, { Component} from 'react';
import './App.css';
import PiView from './views/PiView';
import WebView from './views/WebView';



class App extends Component {
    render() {
      if (navigator.userAgent.includes('Raspbian')) {
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

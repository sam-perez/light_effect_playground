import React, { Component } from 'react';
import './App.css';
import ColorSchemeViewer from './components/color_scheme_viewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorSchemeViewer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import ColorSchemeViewer from './components/color_scheme_viewer';
import LightEffectViewer from './components/light_effect_viewer';
import * as lightEffectTimers from './light_effect_runners/light_effect_timer';

const HARDCODED_COLOR_SCHEME = {
  schemeName: 'sandy stone beach ocean diver',
  colors: [ '#e6e2af', '#a7a37e', '#efecca', '#046380', '#002f2f' ]
};

class App extends Component {
  componentDidMount() {
    const lightEffectTimer = lightEffectTimers.createLightEffectTimer({
      colorScheme: HARDCODED_COLOR_SCHEME
    });

    const unsub = lightEffectTimer.registerUpdateListener({
      listener: ({ colorScheme, startTime, currentTime }) => {
        console.log({ colorScheme, startTime, currentTime });
      }
    });

    setTimeout(unsub, 10000);
  }

  render() {
    return (
      <div className="App">
        <ColorSchemeViewer colorScheme={HARDCODED_COLOR_SCHEME} />
        <LightEffectViewer
          lightEffectName={'SIMPLE START'}
          registerLightUpdate={() => {}}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import ColorSchemeViewer from './components/color_scheme_viewer';
import LightEffectViewer from './components/light_effect_viewer';
import * as lightEffectTimers from './light_effect_runners/light_effect_timer';
import * as simpleStartLightEffect from './light_effect_runners/light_effects/simple_start';

const HARDCODED_COLOR_SCHEME = {
  schemeName: 'Digerati',
  colors: [ '#52656b', '#ff3b77', '#cdff00', '#ffffff', '#b8b89f' ]
};

class App extends Component {
  constructor(props) {
    super(props);

    this.unsubs = [];
    this.lightEffectTimer = lightEffectTimers.createLightEffectTimer({
      colorScheme: HARDCODED_COLOR_SCHEME
    });
  }

  componentWillUnmount() {
    this.unsubs.forEach(unsub => unsub());
  }

  render() {
    return (
      <div className="App">
        <ColorSchemeViewer colorScheme={HARDCODED_COLOR_SCHEME} />
        <LightEffectViewer
          lightEffectName={'SIMPLE START'}
          registerLightUpdate={lightUpdateListener => {
            this.unsubs.push(
              this.lightEffectTimer.registerUpdateListener({
                listener: ({ colorScheme, startTime, currentTime }) => {
                  const { colors } = simpleStartLightEffect.updateLightEffect({
                    colorScheme,
                    startTime,
                    currentTime
                  });

                  lightUpdateListener({ colors });
                }
              })
            );
          }}
        />
      </div>
    );
  }
}

export default App;

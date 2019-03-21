import React, { Component } from 'react';
import './App.css';
import ColorSchemeViewer from './components/color_scheme_viewer';
import LightEffectViewer from './components/light_effect_viewer';
import * as lightEffectTimers from './light_effect_runners/light_effect_timer';
import * as simpleStartLightEffect from './light_effect_runners/light_effects/simple_start';
import * as simpleFadeLightEffect from './light_effect_runners/light_effects/simple_fade';
import * as simpleMixLightEffect from './light_effect_runners/light_effects/simple_mix';
import * as fadeBackAndForthLightEffect from './light_effect_runners/light_effects/fade_back_and_forth';
import * as doubleBlinkBackAndForth from './light_effect_runners/light_effects/double_blink_back_and_forth';
import * as doubleTimeBlink from './light_effect_runners/light_effects/double_time_blink';
import * as R from 'ramda';

const HARDCODED_COLOR_SCHEME = {
  schemeName: 'First',
  colors: [ '#05C2AB', '#E82C0C', '#FF0000', '#E80C7A', '#FF0DFF' ]
};

const lightEffectPairs = [
  {
    name: 'SIMPLE START',
    effect: simpleStartLightEffect
  },
  {
    name: 'SIMPLE FADE',
    effect: simpleFadeLightEffect
  },
  {
    name: 'SIMPLE MIX',
    effect: simpleMixLightEffect
  },
  {
    name: 'FADE BACK AND FORTH',
    effect: fadeBackAndForthLightEffect
  },
  {
    name: 'DOUBLE BLINK BACK AND FORTH',
    effect: doubleBlinkBackAndForth
  },
  {
    name: 'DOUBLE TIME BLINK',
    effect: doubleTimeBlink
  }
];

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
        {R.addIndex(R.map)(
          ({ name, effect }, idx) => (
            <LightEffectViewer
              key={idx}
              lightEffectName={name}
              registerLightUpdate={lightUpdateListener => {
                this.unsubs.push(
                  this.lightEffectTimer.registerUpdateListener({
                    listener: ({ colorScheme, startTime, currentTime }) => {
                      const { colors } = effect.updateLightEffect({
                        colorScheme,
                        startTime,
                        currentTime,
                        paceInMS: 1000
                      });

                      lightUpdateListener({ colors });
                    }
                  })
                );
              }}
            />
          ),
          lightEffectPairs
        )}
      </div>
    );
  }
}

export default App;

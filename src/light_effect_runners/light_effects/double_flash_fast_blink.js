import * as R from 'ramda';

const lightIntensityOnBeat = [
  [ 1, 0 ],
  [ 1, 0 ],
  [ 1, 0 ],
  [ 1, 0 ],
  [ 0, 1 ],
  [ 0, 1 ],
  [ 0, 1 ],
  [ 0, 1 ],
  [ 1, 0 ],
  [ 0, 1 ],
  [ 1, 0 ],
  [ 0, 1 ],
  [ 1, 0 ],
  [ 0, 1 ],
  [ 1, 0 ],
  [ 0, 1 ]
];

const updateLightEffect = ({ colorScheme, startTime, currentTime, paceInMS }) => {
  // just cycle through the colors in the color scheme every second
  const beatsElapsed = Math.floor(((currentTime - startTime) / paceInMS) * 12);
  let currentLightIntensities = lightIntensityOnBeat[beatsElapsed % lightIntensityOnBeat.length];
  const colorsToPickFrom = colorScheme.colors;

  // we only want to switch colors every time we loop through the effect
  const effectLoops = Math.floor(beatsElapsed / lightIntensityOnBeat.length);
  const colorIdx = effectLoops % colorsToPickFrom.length;

  if (effectLoops % 2 === 0) {
    currentLightIntensities = R.reverse(currentLightIntensities);
  }

  const colors = R.map(wristbandOnOrOff => {
    if (wristbandOnOrOff === 0) {
      return '#FFFFFF';
    }

    const colorHex = colorsToPickFrom[colorIdx];
    return colorHex;
  }, currentLightIntensities);

  return { colors };
};

export { updateLightEffect };

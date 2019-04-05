import * as R from 'ramda';

const lightIntensityOnBeat = [
  [ 1, 0 ],
  [ 1, 0 ],
  [ 1, 0 ],
  [ 1, 0 ],
  [ 1, 0 ],
  [ 0, 1 ],
  [ 0, 1 ],
  [ 0, 1 ],
  [ 0, 1 ],
  [ 0, 1 ]
];

const updateLightEffect = ({ colorScheme, startTime, currentTime, paceInMS }) => {
  const beatsElapsed = Math.floor(((currentTime - startTime) / paceInMS) * 2);
  let currentLightIntensities = lightIntensityOnBeat[beatsElapsed % lightIntensityOnBeat.length];
  const colorsToPickFrom = colorScheme.colors;

  const colorIdx = beatsElapsed % colorsToPickFrom.length;

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

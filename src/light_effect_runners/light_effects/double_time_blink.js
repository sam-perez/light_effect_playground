import Color from 'color';
import * as R from 'ramda';

const updateLightEffect = ({ colorScheme, startTime, currentTime, paceInMS }) => {
  const fasterPace = paceInMS / 2;
  // just cycle through the colors in the color scheme every second
  const beatsElapsed = Math.floor((currentTime - startTime) / fasterPace);
  const colorsToPickFrom = colorScheme.colors;

  const firstColorIdx = beatsElapsed % colorsToPickFrom.length;
  const secondColorIdx = (beatsElapsed + 1) % colorsToPickFrom.length;

  const colors = R.addIndex(R.map)(
    (colorIdx, wristbandIdx) => {
      if ((2 * (wristbandIdx + 1) + beatsElapsed) % 2 === 1) {
        return '#FFFFFF';
      }

      const colorHex = colorsToPickFrom[colorIdx];

      const origColor = Color(colorHex);
      const lightFactor = (currentTime - startTime) / fasterPace - beatsElapsed;
      const lightenAmount =
                1 - (lightFactor * 2 > 1 ? 2 - lightFactor * 2 : lightFactor * 2);
      const fadedColor = origColor.mix(Color('#FFFFFF'), lightenAmount);

      return fadedColor.hex();
    },
    [ firstColorIdx, secondColorIdx ]
  );

  return { colors };
};

export { updateLightEffect };

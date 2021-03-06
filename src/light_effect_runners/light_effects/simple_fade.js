import Color from 'color';
import * as R from 'ramda';

const updateLightEffect = ({ colorScheme, startTime, currentTime, paceInMS }) => {
  // just cycle through the colors in the color scheme every second
  const beatsElapsed = Math.floor((currentTime - startTime) / paceInMS);
  const colorsToPickFrom = colorScheme.colors;

  const firstIdx = beatsElapsed % colorsToPickFrom.length;
  const secondIdx = (beatsElapsed + 1) % colorsToPickFrom.length;

  const colors = R.map(
    idx => {
      const colorHex = colorsToPickFrom[idx];
      const origColor = Color(colorHex);
      const lightFactor = (currentTime - startTime) / paceInMS - beatsElapsed;
      const lightenAmount =
                1 - (lightFactor * 2 > 1 ? 2 - lightFactor * 2 : lightFactor * 2);
      const fadedColor = origColor.mix(Color('#FFFFFF'), lightenAmount);

      return fadedColor.hex();
    },
    [ firstIdx, secondIdx ]
  );

  return { colors };
};

export { updateLightEffect };

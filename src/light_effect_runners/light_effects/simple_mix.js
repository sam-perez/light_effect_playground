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
      const nextIdx = (idx + 1) % colorsToPickFrom.length;

      const currentColor = Color(colorsToPickFrom[idx]);
      const nextColor = Color(colorsToPickFrom[nextIdx]);

      const mixFactor = (currentTime - startTime) / paceInMS - beatsElapsed;
      return currentColor.mix(nextColor, mixFactor).hex();
    },
    [ firstIdx, secondIdx ]
  );

  return { colors };
};

export { updateLightEffect };

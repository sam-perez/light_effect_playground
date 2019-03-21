const updateLightEffect = ({ colorScheme, startTime, currentTime, paceInMS }) => {
  // just cycle through the colors in the color scheme every second
  const secondsElapsed = Math.floor((currentTime - startTime) / paceInMS);
  const colorsToPickFrom = colorScheme.colors;

  const firstIdx = secondsElapsed % colorsToPickFrom.length;
  const secondIdx = (secondsElapsed + 1) % colorsToPickFrom.length;

  return { colors: [ colorsToPickFrom[firstIdx], colorsToPickFrom[secondIdx] ] };
};

export { updateLightEffect };

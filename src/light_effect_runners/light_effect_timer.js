//import * as R from 'ramda';

const createLightEffectTimer = ({ colorScheme: originalColorScheme }) => {
  let colorScheme = originalColorScheme;
  const updateListeners = new Set();

  const MS_BETWEEN_UPDATES = 1000;

  let startTime = new Date().getTime();

  setInterval(() => {
    updateListeners.forEach(listener => {
      listener({ colorScheme, startTime, currentTime: new Date().getTime() });
    });
  }, MS_BETWEEN_UPDATES);

  return {
    setColorScheme: ({ colorScheme: updatedColorScheme }) => {
      colorScheme = updatedColorScheme;
    },

    registerUpdateListener: ({ listener }) => {
      updateListeners.add(listener);

      const removeListener = () => {
        updateListeners.delete(listener);
      };

      return removeListener;
    }
  };
};

export { createLightEffectTimer };

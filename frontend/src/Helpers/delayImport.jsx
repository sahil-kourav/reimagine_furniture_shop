// helpers/delayImport.js
export const delayImport = (promise, delay = 1500) =>
  new Promise(resolve => {
    setTimeout(() => resolve(promise), delay);
  });

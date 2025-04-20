const convertToCelsius = function(fahrInput) {
  celsOutput = (fahrInput - 32) * (5 / 9);
  return Number(celsOutput.toFixed(1));
  //return (Math.round(100 * celsOutput) / 100);

};

const convertToFahrenheit = function(celsInput) {
  fahrOutput = (celsInput * (9 / 5)) + 32;
  return Number(fahrOutput.toFixed(1));
  //return (Math.round(100 * fahrOutput) / 100);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

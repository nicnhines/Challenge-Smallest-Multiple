/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function (ceiling) {
  let multiple = 1;

  function leastCommon() {
    for (let i = 1; i <= ceiling; i++) {
      if (multiple % i !== 0) {
        return false;
      }
    }
  }
  while (leastCommon() === false) {
    multiple++;
  }
  return multiple;
};
/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function(ceiling) {
  // do work here
  let output = ceiling;

  // if not 0 then i++
  function checkOutput(i) {
    for (let j = 1; j <= ceiling; j++) {
      // loop ceiling % i   where i goes from 1 to 20  must % = 0
      if (output % j !== 0) {
        return false;
      }
    }
    return true;
  }
  // break loop when i% numbers through ceiling are 0
  while (!checkOutput(output)) {
    output += ceiling;
  }
  // add ceiling to I until all numbers through ceiling can divide evenly
  return output;
};

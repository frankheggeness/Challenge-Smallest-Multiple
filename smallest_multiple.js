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
  let i = ceiling;

  // if not 0 then i++
  function checkI(i) {
    for (let j = 1; j <= ceiling; j++) {
      // loop 20 % i   where i goes from 1 to 20  must % = 0
      if (i % j !== 0) {
        return false;
      }
    }
    return true;
  }
  // break loop when ceiling all are 0
  while (!checkI(i)) {
    checkI(i);
    i += ceiling;
  }
  return i;
};

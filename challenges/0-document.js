// TODO (Ex.0): document and write tests for this function
/**
 * Gicne a number, returns a negative version of the number.
 * @param {number} n - input number 
 * @returns {number} `n` in negative form
 */
function asNegative(n) {

  let result = 0;
  if (n > 0) {
    result *= -1;
  }else {
    result = n;
  }
  return result;
}


console.log(asNegative(10), 'output should be, -10');
console.log(asNegative(-10), 'output should be -10');


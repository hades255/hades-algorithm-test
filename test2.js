/**
 * Let d(n) be defined as the sum of proper divisors of 
 * n (numbers less than n which divide evenly into n). 
 * If d(a) = b and d(b) = a, where a ≠ b, then a and b are 
 * an amicable pair and each of a and b are called amicable numbers. 
 * Evaluate the sum of all the amicable numbers under 10000.
 */

function sumOfProperDivisors(n) {
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      if (n / i !== i && n / i !== n) {
        sum += n / i;
      }
    }
  }
  return sum;
}
function findAmicableNumbersSum(limit) {
  let sum = 0;
  for (let a = 1; a < limit; a++) {
    const b = sumOfProperDivisors(a);
    if (a !== b && sumOfProperDivisors(b) === a) {
      sum += a;
    }
  }
  return sum;
}
const limit = 10000;
const amicableNumbersSum = findAmicableNumbersSum(limit);
console.log(amicableNumbersSum);

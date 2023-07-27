/**
 * A permutation is an ordered arrangement of objects. 
 * What is the millionth lexicographic permutation of 
 * the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
function findMillionthPermutation(digits) {
  let permutation = "";
  let remainingDigits = digits.slice();
  const targetIndex = 1000000;
  while (remainingDigits.length > 0) {
    const factorialValue = factorial(remainingDigits.length - 1);
    const index =
      Math.floor((targetIndex - 1) / factorialValue) % remainingDigits.length;
    const digit = remainingDigits.splice(index, 1)[0];

    permutation += digit;
  }
  return permutation;
}
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const millionthPermutation = findMillionthPermutation(digits);
console.log(millionthPermutation);

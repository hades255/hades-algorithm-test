/**
 * if p is the perimeter of a right angle triangle with integral length sides,
 * { a,b,c}, there are exactly three solutions for p = 120.
 * { 20,48,52}, { 24,45,51}, { 30,40,50}
 * for which value of p ≤ 1000, is the number of solutions maximised ?
 */

function findMaxSolutionsPerimeter(limit) {
  let maxSolutions = 0;
  let maxPerimeter = 0;
  for (let p = 1; p <= limit; p++) {
    let solutions = 0;
    for (let a = 1; a < p; a++) {
      for (let b = a; b < p; b++) {
        const c = p - a - b;
        if (c > 0 && a * a + b * b === c * c) {
          solutions++;
        }
      }
    }
    if (solutions > maxSolutions) {
      maxSolutions = solutions;
      maxPerimeter = p;
    }
  }
  return maxPerimeter;
}
const limit = 1000;
const maxSolutionsPerimeter = findMaxSolutionsPerimeter(limit);
console.log(maxSolutionsPerimeter);

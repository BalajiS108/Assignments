// To find the second largest number in an array
/**
 * Algorithm:
 *
 */

function secondLargest(num) {
  let max = Math.max(...num);
  let secondLast = -Infinity;
  for (n of num) {
    if (n < max && n > secondLast) {
      secondLast = n;
    }
  }
  return secondLast;
}
console.log(secondLargest([2, 4, 9, 8, 5, 3]));

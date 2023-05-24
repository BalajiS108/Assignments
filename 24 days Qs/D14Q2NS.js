// •	Find SUM, PRODUCT AND AVERAGE of the numbers //accumulation means collection

/**
 * Algorithm
 *
 */

function SUM(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(SUM(1, 2, 3));

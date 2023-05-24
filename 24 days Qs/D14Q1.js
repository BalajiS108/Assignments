// •	Currying function i.e sum of multiple argument functions
//inner function can access outer function variables but outer functions can't able to acceess inner function.
/**
 * Algorithm:
 *
 */

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3));

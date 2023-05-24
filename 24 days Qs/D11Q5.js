// •	To find only truthy values using filter.
// const input = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];

// // Output
// ["priya", "ate", 9];

const input = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];
const newArr = [];
l = input.length;
const newArr1 = input.filter(function1);
function function1(input1) {
  if (input1 == "priya" || input1 == "ate" || input1 == 9) {
    newArr.push(input1);
  }
}
console.log(newArr);

// *****
//  ****
//   ***
//    **
//     *

// Algorithm:
// 1.Create a function
// 2.Check for the valid Input
// 3.Take external for loop for Node. of rows.
// 4.Take first internal for loop for printing spaces.
// 5.Take second for loop for printing stars.
// 6.At the end of every row add the spaces & stars to get complete row.
// 7.At the end of the external for loop return result.

// function startPattern1(n) {
//   let m = n;
//   result = "";
//   if (n < 0 || n == NaN || n == "undefined" || n > 15) {
//     console.log("Please enter valid number");
//   } else {
//     for (let i = 0; i < n; i++) {
//       let str = "*";
//       let space = "";
//       m = m - 1;
//       for (let j = 0; j < i; j++) {
//         space = space + " ";
//       }
//       for (let y = 0; y < m; y++) {
//         str = str + "*";
//       }
//       result = result + space + str + "\n";
//     }
//     return result;
//   }
// }
// console.log(startPattern1(15));

// Without Function
let n = 15;
let m = n;

if (n < 0 || n == NaN || n == "undefined" || n > 15) {
  console.log("Please enter valid number");
} else {
  for (let i = 0; i < n; i++) {
    let str = "";
    let space = "";
    let result = "";
    for (let j = 0; j < i; j++) {
      space = space + " ";
    }
    for (let y = 0; y < m; y++) {
      str = str + "*";
    }
    m = m - 1;
    result = result + space + str;
    console.log(result);
  }
}

// •	Star Pattern
// *****
// ****
// ***
// **
// *
let n = 5;
let m = n;

if (n < 0 || n == NaN || n == "undefined" || n > 15) {
  console.log("Please enter valid number");
} else {
  for (let i = 0; i < n; i++) {
    star = "";

    for (let j = m; j > 0; j--) {
      star = star + "*";
    }
    m = m - 1;
    console.log(star);
  }
}

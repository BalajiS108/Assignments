// •	Star Pattern
// *
// **
// ***
// ****
// *****

let n = 5;
if (n < 0 || n == NaN || n == "undefined" || n > 15) {
  console.log("Please enter valid number");
} else {
  for (i = 0; i < n; i++) {
    let str = "";
    for (j = 0; j <= i; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}

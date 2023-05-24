// •	Star Pattern
// *****
// *****
// *****
// *****
// *****

let n = 5;
let m = n;

if (n < 0 || n == NaN || n == "undefined" || n > 15) {
  console.log("Please enter valid number");
} else {
  for (let i = 0; i < n; i++) {
    let star = "";
    for (j = 0; j < n; j++) {
      star = star + "*";
    }
    console.log(star);
  }
}

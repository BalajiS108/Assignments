// •	Number Pattern
// 11111
// 2222
// 333
// 44
// 5

let n = 5;
let m = n;

if (n < 0 || n == NaN || n == "undefined" || n > 15) {
  console.log("Please enter valid number");
} else {
  let k = 1;
  for (let i = n; i > 0; i--) {
    str = "";
    for (let j = i; j > 0; j--) {
      str = str + k;
    }
    k = k + 1;
    console.log(str);
  }
}

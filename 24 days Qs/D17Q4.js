// •	Number Pattern
// 12345;
// 2345;
// 345;
// 45;
// 5;

let n = 5;
let m = n;

if (n < 0 || n == NaN || n == "undefined" || n > 15 ) {
  console.log("Please enter valid number");
} else {
  let k;
  let k1 = 1;
  for (let i = n; i > 0; i--) {
    str = "";
    k = k1;
    for (let j = i; j > 0; j--) {
      str = str + k;
      k = k + 1;
    }
    k1 = k1 + 1;

    console.log(str);
  }
}

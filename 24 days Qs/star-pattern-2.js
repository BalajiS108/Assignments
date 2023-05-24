// let n = 5;

// for (i = 0; i < n; i++) {
//   let str = "";
//   for (j = 0; j <= i; j++) {
//     str = str + "*";
//   }
//   console.log(str);
// }

// Below program with function

function startPattern(n) {
  let result = "";
  for (i = 0; i < n; i++) {
    var str = "";
    for (j = 0; j <= i; j++) {
      str = str + "*";
    }
    result = result + str + "\n";
  }
  return result;
}
console.log(startPattern(5));

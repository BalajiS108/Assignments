// •	Sum of all numbers from start to end given number
// printSeries(1, 4);

//  Output
// 1;
// 2;
// 3;
// 4;

function printSeries(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum = sum + i;
    console.log("i=", i);
  }
  return sum;
}
console.log("Sum=", printSeries(1, 4));

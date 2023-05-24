// •	To find the largest elements from the 2 dimensional array.
// const input = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 9],
//   [45, 76, 2, 1],
//   [89, 90, 87, 9],
// ];

// // Output
// [4, 9, 76, 90];
// •	Print string n times using inbuilt function

const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 9],
  [45, 76, 2, 1],
  [89, 90, 87, 9],
];

for (i = 0; i < 4; i++) {
  max = input[i][0];
  for (j = 0; j < 4; j++) {
    if (max < input[i][j]) {
      max = input[i][j];
    }
  }
  console.log(max);
}

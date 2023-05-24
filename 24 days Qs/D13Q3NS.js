// •	Spiral Matrix Printing | Print the elements of a matrix in spiral form
// // Input
// var input = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

// // Output -> Hint - Sprial in clockwise order
// [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];

var input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [10, 11, 12, 13],
  [14, 15, 16, 17],
];
let m = 4,
  n = 4;
for (i = 0; i < m; i++)
  for (j = 0; j < n; j++) {
    console.log(input[i][j]);
  }

// -----------------------------------------------------------------------------------------------
for (i = 1; i < m; i++) {
  j = n - 1;
  {
    console.log(input[i][j]);
  }
}

i = m - 1;
for (j = n - 2; j >= 0; j--) {
  console.log(input[i][j]);
}

j = 0;
for (i = m - 2; i >= 1; i--) {
  console.log(input[i][j]);
}
i = m - 3;
for (j = 1; j <= n - 2; j++) {
  console.log(input[i][j]);
}

i = m - 2;
for (j = n - 2; j >= 1; j--) {
  console.log(input[i][j]);
}

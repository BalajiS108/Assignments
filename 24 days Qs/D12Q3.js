// •	Unique values only from 2 arrays i.e. union values
// const inputA = [1, 2, 3, 4, 5, 1];
// const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];
// Output
// [1, 2, 3, 4, 5, 6, 7, 8];

// Algorithm:
// 1.create new empty stack
// 2.push one by one element from 1st array on to stack
// 3.while pushing dont allow for same element to be pushed onto stack
// 4.repeat same procedure with 2nd array to push element on to stack.

const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8, 9, 10, 11, 12, 13];
let outputC = [];
let l1 = inputA.length;
let l2 = inputB.length;
for (let i = 0; i < l1; i++) {
  if (outputC.length === 0) {
    outputC.push(inputA[0]);
  }
  if (outputC.length != 0) {
    let count = 0;
    for (let j = 0; j < outputC.length; j++) {
      if (outputC[j] != inputA[i]) {
        count += 1;
      }
    }
    if (count === outputC.length) {
      outputC.push(inputA[i]);
    }
  }
}
// console.log(outputC);

for (let i = 0; i < l2; i++) {
  if (outputC.length != 0) {
    let count = 0;
    for (let j = 0; j < outputC.length; j++) {
      if (outputC[j] != inputB[i]) {
        count += 1;
      }
    }
    if (count === outputC.length) {
      outputC.push(inputB[i]);
    }
  }
}
console.log(outputC);

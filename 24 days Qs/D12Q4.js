// •	Remove Duplicates from 2 arrays using Set method

// Algorithm:
// 1.use set with first & second array if i.e. using new Set().
// 2.convert two sets into two arrays & concat them using concat().
// 3.convert concated array into set for removing redundancies.
// 4.final convert set into array to get final solution.

const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8, 9, 10, 11, 12, 13, 1, 2, 3];
let outputA = new Set(inputA);
let outputB = new Set(inputB);

const output1 = Array.from(outputA);
const output2 = Array.from(outputB);

const outputC = output1.concat(output2);

let result = new Set(outputC);

const finalResult = Array.from(result);
console.log(finalResult);

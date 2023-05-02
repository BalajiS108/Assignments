/**
 * Problem Statement:-Unique values only from 2 arrays i.e. union values
 *   const inputA = [1, 2, 3, 4, 5, 1];
 *   const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

 *   // Output
 *   [1, 2, 3, 4, 5, 6, 7, 8];

 *  Algorithm:-
 *  1.create a function & take inputs array1 & array2 as the parametrs
 *  2.As objects keys can be used to remove the redundant elements of the array 
 *    hence traverse array1 elements through object using for loop.
 *    2.1 For implemeting step 2 create empty object obj.
 *    2.2 by using obj.hasOwnProperty() push elements to obj as keys.
 *  3.Repeat the step 2 over array2 to get the non redundant elements from the
 *    array2 & push them on obj to get the union of two arrays.
 */

// const intersectionOfTwoArrays = (arr1, arr2) => {
//   let obj = {};

//   for (let i = 0; i < arr1.length; i++) {
//     if (!obj.hasOwnProperty(arr1[i])) {
//       obj[arr1[i]] = i;
//     }
//   }
//   for (let j = 0; j < arr2.length; j++) {
//     if (!obj.hasOwnProperty(arr2[j])) {
//       obj[arr2[j]] = j;
//     }
//   }

//   return Object.keys(obj);
// };
// console.log(intersectionOfTwoArrays([1, 2, 3], [4, 5, 1, 7, 6, 4, 3, 8]));

const intersectionOfTwoArraysV2 = (arr1, arr2) => {
  let obj = {};
  let l1 = arr1.length;
  let l2 = arr2.length;
  if (l1 > l2) {
    l2 = l2 + l1 - l2;
  } else {
    l1 = l1 + l2 - l1;
  }
  console.log(l1, l2);

  for (let i = 0, j = 0; i < l1, j < l2; i++, j++) {
    if (!obj.hasOwnProperty(arr1[i]) && !obj.hasOwnProperty(undefined)) {
      obj[arr1[i]] = i;
    }

    console.log(obj);

    if (!obj.hasOwnProperty(arr2[j]) && !obj.hasOwnProperty(undefined)) {
      obj[arr2[j]] = j;
    }
  }

  return Object.keys(obj);
};
console.log(intersectionOfTwoArraysV2([1, 2, 3, 4], [4, 5, 6, 7]));

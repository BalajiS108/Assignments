/**
 * Problem Statement:-
 * Unique values only from 2 arrays i.e. intersection values
const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

// Output
[1, 2, 3, 4, 5,];
* Algorithm:- 
 *  1.create a function & take inputs array1 & array2 as the parametrs
 *  2.As objects keys can be used to remove the redundant elements of the array 
 *    hence traverse array1 elements through object using for loop.
 *    2.1 For implemeting step 2 create empty object obj1.
 *    2.2 by using obj.hasOwnProperty() push elements to obj1 & arr3.
 * 3.Reapeat step 2 for array2 
 *    3.1 For implemeting step 2 create empty object obj2.
 * 4. After step 2 & 3 we have non redundant elements of array1 & array2 in 
 *    array3 & obj2 keys. 
 * 5. Now we will traverse over array3 & will check if the same element is 
 *    present in obj2 keys if yes then push it to empty array arr4.
 * 
 */

const intersectionOfTwoArrays = (arr1, arr2) => {
  let obj1 = {};
  let arr3 = [];
  let obj2 = {};
  let arr4 = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!obj1.hasOwnProperty(arr1[i])) {
      obj1[arr1[i]] = i;
      arr3.push(arr1[i]);
    }
  }

  //   console.log('arr3=', arr3);
  for (let j = 0; j < arr2.length; j++) {
    if (!obj2.hasOwnProperty(arr2[j])) {
      obj2[arr2[j]] = j;
    }
  }
  //   console.log(obj2);
  for (let i = 0; i < arr3.length; i++) {
    if (obj2.hasOwnProperty(arr3[i])) {
      arr4.push(arr3[i]);
    }
  }
  console.log(arr4);
};
intersectionOfTwoArrays([1, 2, 3, 4, 5, 1, 2, 10, 11, 12, 13, 14, 15], [1, 2, 3, 4, 5]);

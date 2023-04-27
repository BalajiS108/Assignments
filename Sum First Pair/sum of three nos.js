/**
 * -  To find a first three elements from a number array whose sum is X
 *   X = 6
 *   arr = [1,2,3,4,5,6] // 1,2,3
 *Algorithm:-
 * Use function with two paramters i.e input array=arr & sum value=X
 * Traverse over arr using two for loops & find complement no.
 * Check whether this complement no is available in obj if yes push it to new array arr1.
 * If not then add element as key in the object
 */

function sumPair(arr, X) {
  const arr1 = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    const obj = {};
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[i] + arr[j] <= X) {
        const firstTwoNoSum = arr[i] + arr[j];
        const remValue = X - firstTwoNoSum;
        if (obj.hasOwnProperty(remValue)) {
          arr1.push([arr[i], arr[j], remValue]);
        } else {
          obj[arr[j]] = j;
        }
      }
    }
  }
  console.log(arr1);
  console.log(arr1[0]);
}

sumPair([1, 2, 3, 4, 5, 6], 10);

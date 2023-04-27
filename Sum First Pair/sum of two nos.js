/**
 * - To find a first pair from a number array whose sum is X
 *  X = 5
 * arr = [1,2,3,4,5,6] // 2,3
 *Algorithm:-
 * Use function with two paramters i.e input array=arr & sum value=X
 * Traverse over arr using for loop & find complement no.
 * Check whether this complement no is available in obj if yes push it to new array arr1.
 * If not then add element as key in the object
 */

function sumPair(arr, X) {
  const obj = {};
  const arr1 = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    const pairNo = X - arr[i];
    // console.log(pairNo);
    if (obj.hasOwnProperty(pairNo)) {
      arr1.push([arr[i], pairNo]);
    }
    obj[arr[i]] = i;
  }
  console.log(arr1);
  console.log(arr1[0]);
}

sumPair([1, 2, 3, 4, 5, 6], 5);

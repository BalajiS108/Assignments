// •	Finding a missing elements in an array and then add with existing elements.
// (-1 means if elements not found then it will return always -1 as per rule)

const arr = [1, 2, 3, 4, 6, 7, 8, 9]; //Need to find the missing element in this sequence & need to
//return -1 for missing number here for 5.
//way 01

//All the elements from 1 to 9 after adding will give sum as 45. Hence using the differece
let sum = 45;
let sum1 = 0;
function missingNumber(arr) {
  l = arr.length;
  // console.log(l)
  for (let i = 0; i < l; i++) {
    sum1 = sum1 + arr[i];
  }
  // console.log(sum1)
  if (sum1 != sum) {
    return -1;
  }
}
console.log(missingNumber(arr));
console.log("Missing number=", sum - sum1);

// Another way is to subtract previous no from next no & difference
//should be one , if more then no is missing.

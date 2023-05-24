// •	Find the missing number from an array

// Algorithm:
// step 1:Take a valid array whose sum is known
// step 2:iterate the for loop over array length
// step 3:find the sum1 as a sum of all elements in array
// step 4:difference in sum & sum1 will give missing element in array

const arr = [1, 2, 3, 4, 5, 6, 8, 9];
let sum = 45;
let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
  sum1 = sum1 + arr[i];
}

if (sum != sum1) {
  console.log("missing element is", sum - sum1);
} else {
  console.log("All elements are present");
}

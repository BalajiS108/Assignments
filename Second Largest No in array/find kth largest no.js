const findKthMax = (arr, k) => {
  // k = 3
  let maxVal = arr[0];
  //   let minVal = arr[0];
  const mappingObj = {};

  for (let i = 0; i < arr.length; i++) {
    const currentVal = arr[i];
    if (currentVal > maxVal) {
      maxVal = currentVal;
    }
    mappingObj[currentVal] = 'Ashutosh';
  }
  console.log(mappingObj);
  if (k === 1) {
    return maxVal;
  }
  console.log(arr);
  let minVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (minVal > arr[i]) {
      minVal = arr[i];
    }
  }
  if (k === arr.length) {
    return minVal;
  }

  // After max val - k = 2 (reverse)
  //k--; // 2

  let kthVal = null;
  let i = maxVal;
  //   console.log(mappingObj);
  while (k > 1) {
    i = i - 1; // 8 - 1 => 7 , 7 - 1 = 6, 6 - 1 = 5, 5 - 1 = 4
    if (mappingObj.hasOwnProperty(i)) {
      kthVal = i; // 8, 5, 4
      k--; // 2, 1
    }
  }
  //   console.log(k);
  return kthVal;
};

console.log(findKthMax([3, 6, 7, 10], 4)); // 6

let a = ['1', '2', '3', '4'];
let b = [];
for (let i = 0; i < a.length; i++) {
  b[i] = Number(a[i]);
}
console.log(b);

const sumPairV2 = (arr, X) => {
  const pairs = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    const mapping = {};
    const firstVal = arr[i];

    for (let j = i + 1; j <= arr.length - 1; j++) {
      const secondVal = arr[j];
      const firstTwoNoSum = firstVal + secondVal;

      if (firstTwoNoSum > X) {
        break;
      }

      const thirdVal = X - firstTwoNoSum;
      if (!mapping.hasOwnProperty(thirdVal)) {
        mapping[secondVal] = j;
        continue;
      }

      pairs.push([firstVal, secondVal, thirdVal]);
    }
  }
  console.log(pairs);
  console.log(pairs[0]);

  return pairs;
};

sumPairV2([1, 2, 3, 4, 5, 6], 10);
// sumPairV2([1, 2, 3, 4, 5, 6], 10);

function removeDuplicates(arr) {
    return arr.filter((element, index) => arr.indexOf(element) === index);
  }
  
  const arr = [1, 10,10,11, 11, 3, 4, 11, 5];
  const uniqueArr = removeDuplicates(arr);
  console.log(uniqueArr); // [1, 2, 3, 4, 5]
  
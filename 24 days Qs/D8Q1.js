// •	Sorting of a string/characters

let str = "cbazyx";
console.log("Input String=", str);
l = str.length;
arr = [];
let str1 = "";
for (let i = 0; i < l; i++) {
  arr.push(str[i].charCodeAt());
}

console.log("Original String array=", arr);

for (let i = 0; i < l; i++) {
  let temp = 0;
  for (let j = i + 1; j < l; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // str1=str1+String.fromCharCode(arr[i])
}
console.log("Array After Sorting", arr);

for (i = 0; i < l; i++) {
  str1 = str1 + String.fromCharCode(arr[i]);
}
console.log("Sorted String=", str1);

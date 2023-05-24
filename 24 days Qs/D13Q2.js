// •	Remove or Delete elements from an array using various ways

const arr = [7, 2, 3, 4, 5];
arr.pop(); //deleting last element
console.log("output after pop", arr);
// delete arr[0];
// console.log(arr[1]);
arr.splice(2, 2, 6, 7); // first 2 indicates how many elements to be add(spliced in) & second 2
// indicates how many elements to be delete
console.log("output after splice", arr);

const arr1 = arr.slice(1, 3); // Slicing also deletes elements from a to b-1 index where arr1=arr.slice(a,b)
console.log("output after slicing", arr1);


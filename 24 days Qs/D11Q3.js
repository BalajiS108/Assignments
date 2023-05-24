// •	Converting one dimensional array into n dimensional array using slice.

// arr=[1,2,3,4,5,6,7,8,9]
// const arr1=[];
// console.log(arr1.splice(3,0,arr[0,3]))
// // console.log(a)

const arr1=[1,2,3,4,5,6,7,8,9,10,11]

const arr2=[];
let a=0;
while(arr1.length)
{
    arr2.push(arr1.splice(0,5))
    // arr2.push(arr1[i])
    // a+=1;
    // console.log(a)
}
console.log(arr2);
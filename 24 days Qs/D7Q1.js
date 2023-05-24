arr=[0,1,1]
let sum=1;
let n=122;
console.log(0)
console.log(1)

while(arr[arr.length-1]<=n)
{
    sum=sum+arr[arr.length-2];
    arr.push(sum);
    console.log(arr[arr.length-2])
}

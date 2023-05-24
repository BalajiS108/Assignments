str="balaji is my name"
arr=str.split(" ");
l=arr.length;
// console.log(l);
// console.log(arr);
for(let i=0;i<l-1;i++)
{

    if((arr[i].length)>arr[i+1].length)
    {
        arr[i+1]=arr[i];
    }
}
console.log(arr[l-1])
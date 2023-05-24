// •	To find a first pair from a number array whose sum is zero using indexing

let arr=[1,-2,3,2,-1]
l=arr.length;
let count=0;
for(i=0;i<l;i++)
{
    for(j=0;j<l;j++)
    {
        if(arr[i]+arr[j]===0)
        {
            console.log(arr[i],arr[j]);
            count=1;

        }
        if(count===1)
        {
            break;
        }
    }
    if(count===1)
        {
            break;
        }
}
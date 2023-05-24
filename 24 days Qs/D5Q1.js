arr=[1,0,-1,2,4,5,-2]
l=arr.length;
let temp=0
for(i=0;i<l;i++)
{
    for(j=i+1;j<l;j++)
    {
        if(arr[i]+arr[j]===0)
        {
            console.log(arr[i],arr[j]);
            temp+=1;
        }
        if(temp===1)
        {
            break;
        }
    }
    if(temp===1)
        {
            break;
        }

}
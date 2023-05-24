// •	Sorting of a number array with or without inbuilt methods?

arr=[3,2,5,7,8,0,10,2,11]
l=arr.length;
for(i=0;i<l;i++)
{
    for(j=i+1;j<l;j++)
    {
        if(arr[i]>arr[j])
        {
            temp=arr[j]
            arr[j]=arr[i]
            arr[i]=temp
        }
    }
}
console.log(arr)
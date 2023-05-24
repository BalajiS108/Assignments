arr=[2,4,5,7,9,11,2,66,34]
l=arr.length;
let n=69;
let temp=0;
for(i=0;i<l;i++)
{
 if(arr[i]===n)
 {
    console.log("Given number exists at index",i);
    temp+=1;
 }
}
 if(temp===0)
 {
   
       console.log("Given No dosent exist in a given array")
  
 }

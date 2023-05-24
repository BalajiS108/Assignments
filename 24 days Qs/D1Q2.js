
function element_calculate(arr)
{
   const totalOriginalElements=arr.length;
   console.log("NO of elements initially=",totalOriginalElements)
   let arr_Set=new Set(arr);
   let nonRepeatedElements=[...arr_Set];
   return(nonRepeatedElements.length)
}

console.log("Toatal No of elements after removing duplicate elements=",element_calculate([1,2,3,4,2,3]))
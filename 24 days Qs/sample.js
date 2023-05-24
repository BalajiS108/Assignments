const arr1=[1,2,3,4,6,7,8,9]
function missingNumber1(arr1)
   {  
    let count=0;  
    l=arr1.length;      
    for(let i=0;i<l-1;i++)
      {
         if((arr1[i+1]-arr1[i])===2);
         {
           
            missingNo=arr1[i]+1;
            count=1;
            console.log(arr1[i])
            console.log(arr1[i+1])
         }
        if(count===1)
          {
             return(-1);
          }
     }
    }
  console.log(missingNumber1(arr1))
 console.log("Missing number=",missingNo)



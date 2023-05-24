// •	To find only truthy values from an array.
// const input = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];

// // Output
// ["priya", "ate", 9];


const input = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];
l=input.length
newArr=[];
for(i=0;i<l;i++)
{
    if(input[i]=="priya"||input[i]=="ate"||input[i]==9)
    {
        newArr.push(input[i])
        
    }
   
}
console.log(newArr)
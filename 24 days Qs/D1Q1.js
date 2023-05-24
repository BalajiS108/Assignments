let fun= function(str)
{
  str1=new Set(str);
  const str2=[...str1];
  const str3=str2.join("");
  console.log("Input String is:",str);
  return(str3);

}

console.log("Output string is:",fun("balaji"));


//2nd Method using Loops
function fun1(str)
{
console.log("Input String=",str);
l=str.length;
let finalStr=str[0];

for(var i=0;i<l-1;i++)
{  
  let count=0;
  let newStr=str.slice(i+1,l);
  // console.log("newstr1=",newStr);  //newStr="alaji"
  for (var j=0;j<=i;j++)
  { 
    if((newStr[0])==finalStr[j])
    {
      break;     
    }
    else
    {
      count=count+1; 
    }  
  }
  if(count==i+1)
  {
    finalStr+=newStr[0]; 
  }
}
return(finalStr);
}
console.log("Output String=",fun1("balaji"));

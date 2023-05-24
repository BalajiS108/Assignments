
function palindromeByDividingLengthByTwo(str)
{
l=str.length;
l1=Math.floor(l/2);
j=l-1;
let count=0;
if(l%2!==0)
{
    lFinal=l1;
}
else{
    lFinal=l/2;
}
console.log("Final Length=",lFinal);
for(let i=0;i<lFinal;i++)
{
    if(str[i]==str[j])
    {
        count=count+1;
        j=j-1;
        
    }
    else
    {
        break;
    }
}
console.log("count:=",count);
    if(count==lFinal)
    {
        console.log("Given string or number is a Palindrome")
    }
    else{
        console.log("Given string or number is not a Palindrome")
    }
}


palindromeByDividingLengthByTwo("abac")
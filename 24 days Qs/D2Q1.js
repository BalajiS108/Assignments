//First way using inbuilt funcion

function strReverse1(str)
{
// let newStr= str.split("");
console.log(str.split("").reverse().join(""));

}
strReverse1("balaji sawant");
//---------------------------------------------------------------------------------------//
//Second way without using inbuilt funcion

function strReverse2(str)
{
l=str.length;
let newString="";
for(let i=l-1;i>=0;i--)
{
    newString+=str[i];
    
}
console.log(newString);
}
strReverse2("balaji sawant");

// Third way  using charAt()

function strReverse3(str)
{
l=str.length;
let newString="";
let k=l-1;
for(i=0;i<=l-1;i++)
{    
    newString+=str.charAt(k);
    k=k-1;
    
}
console.log(newString)
}
strReverse3("balaji sawant");


//Fourth Way using slice()
function strReverse4(str)
{
l=str.length;
let newString="";
let k=l-1;
for(i=0;i<=l-1;i++)
{    
    newString+=(str.slice(k,k+1));
    k=k-1;
    
}
console.log(newString)
}
strReverse4("balaji sawant");

//Fifth Method
//Fourth Way using slice()
function strReverse5(str)
{
l=str.length;
let newString="";
let k=l-1;
for(i=0;i<=l-1;i++)
{    
    newString+=(str.substr(k,1));
    k=k-1;
    
}
console.log(newString)
}
strReverse5("balaji sawant");

//Sixth Method using filter function
function reverseString(str) {
    let reversed = '';
    str.split('').filter(char1 => reversed = char1 + reversed);
    return reversed;
  }
  const reversed = reverseString("balaji sawant");
  console.log(reversed); // Output: "!dlrow ,olleH"  

//   Seventh Method using filter function & for loop 

function reverseString(str)
{
l=str.length;
finalStr="";
for(let i=0;i<l;i++)
{
finalStr=str[i]+finalStr;
}
return(finalStr)

}
console.log(reverseString("balaji sawant"))
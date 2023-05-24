// •	Truncate the string upto specific character. For ex ("I am priya", 3) => "I am..."

str="My name is Balaji";
arr=str.split(" ")
str1="";
l=arr.length
strtruncate="name";
l1=str.indexOf(strtruncate)
console.log(l)
for(i=0;i<=l1-1;i++)
{    
    str1=str1+str[i]
    
}
console.log(str1+"...")


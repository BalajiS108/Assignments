function isPalindrome(str)
{
let str1=str.split("").reverse().join("");
console.log(str1)
if(str==str1)
{
    console.log("Given Strings are Palindrome");
    
}
else
{
    console.log("Given Strings are not Palindrome");
}
}
isPalindrome("1222")
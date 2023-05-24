// •	To check ending of the string with given character/s using custom implementation

str="I am an Indian"
char="am"
str1=""
l1=str.length;
l2=char.length;
for(i=(l1-l2);i<=l1-1;i++)
{       
    str1=str1+str[i];
    // console.log(str[i])
    
}
if(str1==char)
    {
        console.log("YES")
    }
    else{
        console.log("NO")
    }
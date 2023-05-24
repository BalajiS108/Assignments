// •	To find longest word from a string using custom code


str="Hello World Good Morning"
str1=str.split(" ");
console.log(str1)
l=str1.length;
for(i=0;i<l-1;i++)
{
    if((str1[i].length)>(str1[i+1].length))
    {
        str1[i+1]=str1[i];
    }
}
console.log(str1[l-1])
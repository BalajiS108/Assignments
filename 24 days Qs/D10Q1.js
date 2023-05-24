// •	To check ending of the string matches with given character/s using inbuilt function
str=" I am an Indian";
char="ian";
l1=str.length;
l2=char.length;
if(str.substr(l1-l2)==char)
{
    console.log("TRUE")
}
else{
    console.log("FALSE")
}
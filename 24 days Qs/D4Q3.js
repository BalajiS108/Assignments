str="Hare Krishna Hare Rama"
l=str.length;
let count=0;
for(let i=0;i<l;i++)
{
    if(str[i]=='a' || str[i]=='i' || str[i]=='e'|| str[i]=='o'|| str[i]=='u')
    {
    console.log(str[i])
    count+=1;
    }
}
console.log(count)
let n=27;
let count=0;
for(i=2;i<n;i++)
{
    if(n%i==0)
    {
        break;
    }
    else{
        count+=1;
    }
}
if(count==(n-2))
{
    console.log(n,"is a prime no");
}
else{
    console.log(n,"is not a prime no");
}
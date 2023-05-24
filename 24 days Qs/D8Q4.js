// •	To check if given number is prime or not
console.log(2)
let n=100;
let temp=0;
let temp1=0;
let temp2=0;
for(i=3;i<=n;i++)
{   temp1=0;
    for(j=2;j<i;j++)
        {
            if(i%j==0)
            {  
                // temp=1
                break;
            }
            if(i%j!=0)
            {
                temp1=temp1+1;
            }
        }
    // console.log(i,temp1,i-(2))
    if(temp1==(i-2))
        {
            console.log(i)
            temp2+=1;
        }
}
console.log(temp2+1,"prime nos exists before",n)
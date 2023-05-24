// •	Find first duplicate element from an array
let A=[1,2,3,4,3];
let temp=0;
let c=[];
l=A.length;
for(i=0;i<l;i++)
{
    if(c[c.length-1]==undefined)
    {
        c.push(A[i])
    }
    // console.log(c[c.length-1])
    else{
        let count=0;
        for(j=0;j<=c.length-1;j++)
        {
        if(c[j]!=A[i])
        {
          count+=1;
        }
        else{
            console.log(A[i])
            temp=1;
            break;
        }
        }
        if(count==c.length)
        {
            c.push(A[i])
        }
       
    }
    if(temp==1)
    {
        break;
    }
}
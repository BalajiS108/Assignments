// •	To find unique values from 2 arrays and keep into one array. i.e. Union.

for(i=0;i<l1;i++)
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
        }
        if(count==c.length)
        {
            c.push(A[i])
        }
       
    }
}


let A=[1,4,1,3,3,4,4,5,4,5]
let B=[6,7,8,1,2,2]
let c=[]

l1=A.length
l2=B.length
l=l1+l2
for(i=0;i<l1;i++)
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
        }
        if(count==c.length)
        {
            c.push(A[i])
        }
       
    }
}
// ----------------------------------------------------------------------------------------------------
for(i=0;i<l2;i++)
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
        if(c[j]!=B[i])
        {
          count+=1;
        }
        }
        if(count==c.length)
        {
            c.push(B[i])
        }
       
    }
}



console.log(c)
// for(i=0;i<l1;i++)
// {

// }
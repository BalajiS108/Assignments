function fact(n)
{
let fact=1;
while(n>=1)
{
    fact=fact*(n);
    n=n-1;
}
console.log(fact);
}
fact(4)
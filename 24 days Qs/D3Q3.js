array=['abcdefg','abcde','abcdef']
let temp="";
for(let i=0;i<array.length-1;i++)
{
    if(array[i].length>array[i+1].length)
    {
        temp=array[i];
        array[i]=array[i+1];
        array[i+1]=temp;

    }

    
}
console.log(array[array.length-1])



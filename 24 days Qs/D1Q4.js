function reverseString(str)
{
    let strSplit=str.split(" ");
    console.log("Original String=",str);
    // console.log(strSplit[1],strSplit.length);
    // return(strSplit);
    let newStrSplit=[];
    let l=strSplit.length;
    for(let i=l-1;i>=0;i--)
    {   
        // newString=newString+" "+strSplit[i];    
        newStrSplit.push(strSplit[i]);    
    }
    reverseString=newStrSplit.join(" ");
    return(reverseString)
    // newString=strSplit.join(" ");
    // return(newString);
}
console.log("Reverse String=",reverseString("Krishna is a God"));